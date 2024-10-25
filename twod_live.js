// const axios = require("axios");
// const cheerio = require("cheerio");

// async function fetchData() {
//   try {
//     const url = "https://api.thaistock2d.com/live";
//     const response = await axios(url);
//     const liveData = response.data;
//     console.log(liveData.live);
//     console.log(liveData.live.set);
//     console.log(liveData.live.value);
//     console.log(liveData.live.twod);
//     const date = new Date(liveData.live.time);
//     console.log(date);

//     // Check if we successfully scraped the value
//     // if (setIndex) {
//     //   console.log(`SET Index: ${setIndex}`);
//     // } else {
//     //   console.log(
//     //     "SET Index not found. The data might be loaded dynamically with JavaScript."
//     //   );
//     // }
//   } catch (error) {
//     console.error("Failed to fetch data:", error);
//   }
// }

// // Call the fetchData function to test it
// fetchData();

const axios = require("axios");
const cheerio = require("cheerio");

async function fetchData() {
  try {
    // const url = "https://www.set.or.th/en/home";
    // const url = "https://www.set.or.th/en/market/index/set/overview";
    const url = "https://www.settrade.com/th/home";
    const response = await axios(url);
    const html = response.data;
    const $ = cheerio.load(html);
    //
    const setValue = $(
      "div.market-summary-index-items.d-flex.flex-wrap > div:nth-child(2) > div:nth-child(2) > span"
    )
      .text()
      .trim();
      
      const setIndex = $(
        "div.d-flex.align-items-center.text-nowrap.mb-2.market-last > h2"
      )
      .text()
      .trim();
    const setDigit = setIndex[setIndex.length - 1];
    const valueDigit = setValue[setValue.length - 4];
    const twod = `${setDigit}${valueDigit}`;
      
    console.log("Sector setValue:", setValue);
    console.log("Sector setIndex:", setIndex);
    console.log("Sector twod:", twod);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}
// Call the fetchData function to test it
fetchData();
