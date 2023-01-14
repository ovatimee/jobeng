#!/bin/bash

# Define variables for connection parameters
dbname="mydb"
host="localhost"
port="5432"
username="myuser"
password="mypassword"
schema_name="public"

# Define variable for special rules
specialRules=("Posts ViewCount" "NULLIF(ViewCount, '')::int")

# Define variable for file part // same as URL
file_part=None

URL='https://weworkremotely.com/remote-jobs.rss'

# Define function for showing progress
show_progress() {
  local block_num=$1
  local block_size=$2
  local total_size=$3
  
  if [[ -z $file_part ]]; then
    local suffixes=("B" "KB" "MB" "GB" "TB")
    local suffixIndex=0
    local pp_size=$total_size
    while [[ $pp_size -gt 1024 ]]; do
      ((suffixIndex++))
      pp_size=$(echo "$pp_size / 1024" | bc -l)
    done
    echo "Total file size is: ${pp_size}${suffixes[$suffixIndex]}"
    echo "0 % of the file downloaded ...\r"
    file_part=0
  fi

  local downloaded=$(($block_num * $block_size))
  if [[ $downloaded -lt $total_size ]]; then
    local percent=$(($downloaded * 100 / $total_size))
    if [[ $(($percent - $file_part)) -gt 1 ]]; then
      file_part=$percent
      echo "${percent} % of the file downloaded ...\r"
    fi
  else
    file_part=
    echo ""
  fi
}


torsocks /usr/local/opt/curl/bin/curl "$URL" > feed.xml

links=$(xmllint --xpath '//item/link/text()' feed.xml)

# Check if the links file already exists
if [[ -f links.txt ]]; then
  # If the file exists, read the links from the file
  old_links=$(cat links.txt)
else
  # If the file does not exist, initialize the old links variable with an empty string
  old_links=""
fi

# Find the new links that are not in the links.txt file
new_links=$(echo "$links" | grep -v -f links.txt)

# Append the new links to the links.txt file
echo "$new_links" >> links.txt

# Concatenate the new links and the old links
all_links="$new_links $old_links"

psql -U iandeeq -d jobeng -h localhost -c 

declare -A company
declare -A job

declare -a arr

# Iterate over the links
while read -r line; do
  # Append the link to the array
  arr+=("$line")
done <<< "$links"

# for link in $(cat links.txt); do
for link in $all_links
do

  # Visit the first link in the array
torsocks /usr/local/opt/curl/bin/curl "$link" > page.html

# Extract the first h1 tag from the page
h1=$(ggrep -Po '<h1[^>]*>(.*?)</h1>' page.html | sed -n '2p' | sed -e 's/<[^>]*>//g')
tags=$(ggrep -oP '<span class=listing-tag>[^<]*</span>' page.html | ggrep -oP '>\K[^<]*')

# Extract company and job details from the page
#
logo=$(grep -oE '<div[^>]*class=listing-logo[^>]*>.*?<img[^>]*src=[^>]*([^"]*).*?</div>' page.html)
categories=$(grep -oE '<ul class="dropdown categories">.*?<li>.*?</li>.*?</ul>' page.html | grep -oE '<a[^>]*>.*?</a>' | sed -e 's/<a[^>]*>//g' -e 's/<\/a>//g')

location=$(xmllint --html --xpath 'string(//div[@class="company-card"]/h3[1])' page.html)
company["logo"]=$(grep -oE '"([^"]*)"' <<< "$logo" | sed -n '2p')
company["name"]=$(grep -oE '<div class=company-card>.*?<h2[^>]*>(.*?)</h2>.*?</div>' page.html | sed -n 's#.*<h2[^>]*>\(.*\)</h2>.*#\1#p' | sed -n 's/<a[^>]*>\(.*\)<\/a>/\1/p')
job["description"]=$(grep -oE '<div[^>]*class=listing-container[^>]*>.*?</div>' page.html | sed -n 's/.*<div[^>]*>\(.*\)<\/div>.*/\1/p')


# INSERT INTO job (title, tags, company_name, company_location, company_logo, description) VALUES ('$h1', '$tags', '$company_name', '$location', '$company_logo', '$description');


# Print the h1 tag and span tags to the console
# echo "$location"
# echo "$tags"
# echo "${company[logo]}"
# echo "${company["name"]}"
# echo "${job["description"]}"
echo "$categories"

done

# Clean up by deleting the downloaded XML document
if test -f "feed.xml"; then
  rm "feed.xml"
fi

if test -f "page.html"; then
  rm "page.html"
fi
