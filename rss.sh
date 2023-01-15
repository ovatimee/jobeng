#!/bin/bash
# Define variables for connection parameters
dbname="mydb"
host="localhost"
port="5432"
username="myuser"

URL='https://weworkremotely.com/remote-jobs.rss'

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


while read url; do
  url_effective=$(curl -Ls -w %{url_effective} -o /dev/null $url)
  echo $url_effective
  if [ "$redirect_url" == "https://weworkremotely.com/" ]; then
    echo "URL has been redirected, skipping: $url"
    continue
  fi

  arr+=("$line")
done <<< "$links"

for link in $all_links
do

torsocks /usr/local/opt/curl/bin/curl "$link" > page.html

job["title"]=$(ggrep -Po '<h1[^>]*>(.*?)</h1>' page.html | sed -n '2p' | sed -e 's/<[^>]*>//g')

done

INSERT INTO job (title) VALUES ('${job[title]}');

# Clean up by deleting the downloaded XML document
if test -f "feed.xml"; then
  rm "feed.xml"
fi

if test -f "page.html"; then
  rm "page.html"
fi
