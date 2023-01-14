let Parser = require("rss-parser");
let parser = new Parser();

async function scraper() {
  try {
    let feed = await parser.parseURL("https://www.higheredjobs.com/rss/categoryFeed.cfm?catID=159")
    // let feed1 = await fetch("https://www.higheredjobs.com/rss/categoryFeed.cfm?catID=159")
    console.log(feed);
  } catch (err) {
    console.log(err);
  }
}

scraper()
