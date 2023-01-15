# while read url; do
#   original_url=$url
#   scraped_data=$(curl -s -L $url -I)
#   redirect_url=$(echo "$scraped_data" | grep -i "Location:" | cut -d' ' -f2)
#   if [ "$original_url" != "$redirect_url" ]; then
#     echo "URL has been redirected, skipping: $original_url"
#     continue
#   fi
#   echo "Active Link"
# done < links.txt


logo=$(grep -oE '<div[^>]*class=listing-logo[^>]*>.*?<img[^>]*src=[^>]*([^"]*).*?</div>' page.html)
location=$(xmllint --html --xpath 'string(//div[@class="company-card"]/h3[1])' page.html)
company["logo"]=$(grep -oE '"([^"]*)"' <<< "$logo" | sed -n '2p')
company["name"]=$(grep -oE '<div class=company-card>.*?<h2[^>]*>(.*?)</h2>.*?</div>' page.html | sed -n 's#.*<h2[^>]*>\(.*\)</h2>.*#\1#p' | sed -n 's/<a[^>]*>\(.*\)<\/a>/\1/p')
job["description"]=$(grep -oE '<div[^>]*class=listing-container[^>]*>.*?</div>' page.html | sed -n 's/.*<div[^>]*>\(.*\)<\/div>.*/\1/p')


while read url; do
  echo $url
  redirect_url=$(curl -Ls -w %{url_effective} -o /dev/null $url)
  url_effective=$(curl -Ls -w %{url_effective} -o /dev/null $url)
  echo $url_effective
  if [ "$redirect_url" == "https://weworkremotely.com/" ]; then
    echo "URL has been redirected, skipping: $url"
    continue
  fi
  echo "Active Link"
done < links.txt
