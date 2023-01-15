#!/bin/bash

dbname="jobeng"
host="localhost"
port="5432"
username="iandeeq"

URL='https://weworkremotely.com/remote-jobs.rss'

torsocks /usr/local/opt/curl/bin/curl "$URL" > feed.xml

links=$(xmllint --xpath '//item/link/text()' feed.xml)

if [[ -f links.txt ]]; then
old_links=$(cat links.txt)
else
old_links=""
fi

new_links=$(echo "$links" | grep -v -f links.txt)

echo "$new_links" >> links.txt

all_links="$new_links $old_links"

# psql -U "$username" -d "$dbname" -h "$host" -p "$port" -c "CREATE TABLE IF NOT EXISTS jobs (title TEXT)" --quiet

declare -A company
declare -A job

for link in $all_links
do
redirect_url=$(curl -Ls -w %{url_effective} -o /dev/null $link)
if [ "$redirect_url" == "https://weworkremotely.com" ]; then
echo "URL has been redirected, skipping: $link"
continue
fi
torsocks /usr/local/opt/curl/bin/curl -s "$link" > page.html

job["title"]=$(ggrep -Po '<h1[^>]*>(.*?)</h1>' page.html | sed -n '2p' | sed -e 's/<[^>]*>//g')
tags=$(ggrep -oP '<span class=listing-tag>[^<]*</span>' page.html | ggrep -oP '>\K[^<]*')
logo=$(grep -oE '<div[^>]*class=listing-logo[^>]*>.*?<img[^>]*src=[^>]*([^"]*).*?</div>' page.html)
categories=$(grep -oE '<ul class="dropdown categories">.*?<li>.*?</li>.*?</ul>' page.html | grep -oE '<a[^>]*>.*?</a>' | sed -e 's/<a[^>]*>//g' -e 's/<\/a>//g')

IFS=$'\n' readarray -t tags <<< "$tags"
job["type"]="${tags[0]}"
job["category"]="${tags[1]}"
job["locations"]="${tags[@]:2}"
job["link"]=$(ggrep -oP '<a[^<]*id=job-cta-alt[^<]*href="\K[^"]+' page.html | head -n 1)
# job["link"]=$(ggrep -zoP '<a[^<]*id=job-cta-alt[^<]*data-clipboard-text="\K[^"]+' page.html)

applicants=$(ggrep -oP '(?<=<h3>)[^<]+' page.html)
# location=$(xmllint --html --xpath 'string(//div[@class="company-card"]/h3[1])' page.html)
company["logo"]=$(grep -oE '"([^"]*)"' <<< "$logo" | sed -n '2p')
company["name"]=$(grep -oE '<div class=company-card>.*?<h2[^>]*>(.*?)</h2>.*?</div>' page.html | sed -n 's#.*<h2[^>]*>\(.*\)</h2>.*#\1#p' | sed -n 's/<a[^>]*>\(.*\)<\/a>/\1/p')
job["description"]=$(grep -oE '<div[^>]*class=listing-container[^>]*>.*?</div>' page.html | sed -n 's/.*<div[^>]*>\(.*\)<\/div>.*/\1/p')

type_id=$(psql -U "$username" -d "$dbname" -h "$host" -p "$port" -t -c "SELECT id FROM types WHERE name='${job["type"]}'")

category_id=$(psql -U "$username" -d "$dbname" -h "$host" -p "$port" -t -c "SELECT id FROM categories WHERE name='${job["locations"]}'")
job["salary"]=0

INSERT INTO types (name) VALUES ('${job["type"]}')
ON CONFLICT (name) DO NOTHING;

INSERT INTO categories (name) VALUES ('${job["category"]}')
ON CONFLICT (name) DO NOTHING;


psql -U iandeeq -d jobeng -c "INSERT INTO jobs (title, link, description, salary, location, company_name, company_logo, category_id, type_id) VALUES (
    '${job["title"]}', 
    '${job["link"]}', 
    '${job["description"]}', 
    '${job["salary"]}', 
    '${job["locations"]}', 
    '${company["name"]}', 
    '${company["logo"]}', 
    (SELECT id FROM categories WHERE name = '${job["category"]}'), 
    (SELECT id FROM types WHERE name = '${job["type"]}')
  );"

# echo "$title", "$job[link]", "$job[description]", "$salary", "$location", "$company[name]", "$company[logo]", 
# echo "${company[logo]}" "${company["name"]}" "${job["description"]}" "$location" "$tags"


done

# IFS=","
# query="INSERT INTO job (title, link, description, salary, location, company_name, company_logo, category_id, type_id) VALUES ('$title', '$job[link]', '$job[description]', '$salary', '$location', '$company[name]', '$company[logo]', $category_id, $type_id)"
# query="INSERT INTO job (title, link, description, salary, location, company_name, company_logo, category_id, type_id) VALUES ${data_array[*]}"
# psql -U "$username" -d "$dbname" -h "$host" -p "$port" -c "$query"

if test -f "feed.xml"; then
rm "feed.xml"
fi

if test -f "page.html"; then
rm "page.html"
fi
