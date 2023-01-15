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



# Print the h1 tag and span tags to the console
# echo "$location"
# echo "$tags"
# echo "${company[logo]}"
# echo "${company["name"]}"
# echo "${job["description"]}"
echo "$categories"

tags=$(ggrep -oP '<span class=listing-tag>[^<]*</span>' page.html | ggrep -oP '>\K[^<]*')
categories=$(grep -oE '<ul class="dropdown categories">.*?<li>.*?</li>.*?</ul>' page.html | grep -oE '<a[^>]*>.*?</a>' | sed -e 's/<a[^>]*>//g' -e 's/<\/a>//g')

you could collect all of the data in an array or variable, and then insert it into the database outside of the loop, in a separate block of code
