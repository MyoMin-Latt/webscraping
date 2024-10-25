

// const cheerio = require("cheerio");
// const axios = require('axios');
// const j2cp = require('json2csv').Parser;

// const mystery = "https://books.toscrape.com/catalogue/category/books/mystery_3/index.html";
// const baseUrl = "https://books.toscrape.com/catalogue/category/books/mystery_3/";
// const book_data = [];

// async function getBooks(url) {
//     try {
//         const response = await axios.get(url);
//         const $ = cheerio.load(response.data);
//         const books = $("article");
//         books.each(function () {
//             title = $(this).find("h3 a").text();
//             price = $(this).find(".price_color").text();
//             stock = $(this).find(".availability.instock").text().trim();
//             book_data.push({ title, price, stock });
//         });
//         if ($(".next a").length > 0) {
//             next_page = baseUrl + $(".next a").attr("href");
//             // console.log('next_page length ', $(".next a"));
//             // console.log('next_page $(".next a").attr', $(".next a").attr("href"));
//             // console.log('next_page ', next_page);
//             getBooks(next_page);
//         }
//         console.log(book_data.length);
//     } catch (error) {
//         console.error(error);
//     }
// }
// getBooks(mystery);

/// Second Test
// const cheerio = require("cheerio");
// const axios = require('axios');

// const mystery = "https://books.toscrape.com/catalogue/category/books/mystery_3/index.html";
// const book_data = [];

// async function getBooks(url) {
//     try {
//         const response = await axios.get(url);
//         const $ = cheerio.load(response.data);
//         const books = $("article");
//         books.each(function () {
//             title = $(this).find("h3 a").text();
//             price = $(this).find(".price_color").text();
//             stock = $(this).find(".availability.instock").text().trim();
//             // stock: 'In stock'
//             // stock = $(this).find(".availability.instock").text();
//             // stock: '\n    \n    \n        In stock\n    \n'
//             // stock = $(this).find(".availability").text();
//             // stock: '\n    \n    \n        In stock\n    \n'
//             book_data.push({ title, price, stock });
//         });
//         console.log(book_data);
//     } catch (error) {
//         console.error(error);
//     }
// }
// getBooks(mystery);

/// First Test
// const cheerio = require("cheerio");
// const axios = require('axios');

// const url = "https://www.set.or.th/en/home";
// // const url = "https://books.toscrape.com/catalogue/category/books/mystery_3/index.html";

// const stockData = [];
// async function getBooks() {
//     try {
//         const response = await axios.get(url);
//         const $ = cheerio.load(response.data);
//         // const genre = $("#default > div > div > div > div > div.page-header.action > h1").text();
//         // const genre = $("h1").text();
//         // const genre = $("table").find("tbody td a").text();
//         // const genre = $("tbody").find("td a").text();
//         // const genre = $("tr").text();
//         // const genre = $("tr").find("td").text(); // all table
//         // const genre = $("tr td").find("span").text(); // num only
//         // const stocks = $("tr td div span");
//         // const stocks = $("tbody").text(); // all table
//         const stocks = $("tbody").text(); // all table
//         // const stocks = $("tbody a").text(); // name only
//         // const stocks = $("tbody a").find("div").text(); // all table
//         console.log(stocks);
//         // stocks.each(function () {
//         //     last = $(this).text();
//         //     console.log("last",last);
//         // })
//     } catch (error) {
//         console.error(error);
//     }
// }
// getBooks();


// from chat gpt
// const axios = require('axios');
// const cheerio = require('cheerio');

// const url = 'https://www.set.or.th/en/home'; // The URL of the SET website

// async function scrapeSETValue() {
//     try {
//         // Fetch the HTML content of the website
//         const { data } = await axios.get(url);

//         // Load the HTML into cheerio
//         const $ = cheerio.load(data);

//         // Find the SET index value using the correct selector
//         // Note: You need to find the correct selector by inspecting the webpage
//         const setValue = $('.idx-last').text().trim(); // Adjust the selector accordingly

//         console.log(`SET Index Value: ${setValue}`);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// scrapeSETValue();

// const axios = require('axios');
// const cheerio = require('cheerio');

// const url = 'https://www.set.or.th/en/home';

// async function scrapeSETTopRow() {
//     try {
//         // Fetch the HTML content of the website
//         const { data } = await axios.get(url);

//         // Load the HTML into cheerio
//         const $ = cheerio.load(data);

//         // Find and extract the data from the top row
//         // You need to inspect the actual HTML to get the correct selectors
//         const topRowData = [];

//         // Example: Assuming the top row data is in a specific table or div
//         $('.table-info tr').first().find('td').each((i, element) => {
//             const value = $(element).text().trim();
//             topRowData.push(value);
//         });

//         console.log('Top Row Data:', topRowData);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// scrapeSETTopRow();


// const axios = require('axios');
// const cheerio = require('cheerio');

// const url = 'https://www.set.or.th/en/home';

// axios(url)
//     .then(response => {
//         const html = response.data;
//         const $ = cheerio.load(html);

//         // Get SET Index
//         const setIndex = $('table').find('tr:nth-child(1) td:nth-child(2) span').find("ms-auto").text().trim();

//         // Get SET Change
//         const setChange = $('div:contains("SET") + table').find('tr:nth-child(1) td:nth-child(3)').text().trim();

//         // Get SET Value
//         const setValue = $('table').find('tr:nth-child(1) td:nth-child(5)').text().trim();

//         console.log(`SET Index: ${setIndex}`);
//         console.log(`SET Change: ${setChange}`);
//         console.log(`SET Value: ${setValue}`);
//     })
//     .catch(error => {
//         console.error(`Error fetching data: ${error.message}`);
//     });


// const axios = require('axios');
// const cheerio = require('cheerio');

// const url = 'https://www.set.or.th/en/home';

// axios(url)
//     .then(response => {
//         const html = response.data;
//         const $ = cheerio.load(html);

//         // Selector for the SET Index value
//         const setIndex = $('td.text-end.text-nowrap.fs-20px.px-1.mw-100.text-deep-gray span.ms-auto').eq(0).text().trim();

//         // Selector for the SET Value (M.Baht)
//         const setValue = $('table').find('tr:nth-child(1) td:nth-child(5)').text().trim();

//         console.log(`SET Index: ${setIndex}`);
//         console.log(`SET Value: ${setValue}`);
//     })
//     .catch(error => {
//         console.error(`Error fetching data: ${error.message}`);
//     });

// const express = require('express');
// const axios = require('axios');
// const cheerio = require('cheerio');

// const app = express();
// const PORT = 3000;

// app.get('/set-data', async (req, res) => {
//     try {
//         const url = 'https://www.set.or.th/en/home';
//         const response = await axios(url);
//         const html = response.data;
//         const $ = cheerio.load(html);

//         const setIndex = $('table td span.ms-auto').eq(0).text().trim();
//         const setValue = $('table').find('tr:nth-child(1) td:nth-child(5)').text().trim();
//         const setDigit = setIndex[setIndex.length - 1];
//         const valueDigit = setValue[setValue.length - 4];

//         res.json({
//            set: setIndex,
//             value: setValue,
//             time: new Date(),
//             twod: `${setDigit}${valueDigit}`
//         });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch data' });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });




// const cheerio = require("cheerio");
// const axios = require("axios");
// const j2cp = require("json2csv").Parser;

// const mystery =
//   "https://books.toscrape.com/catalogue/category/books/mystery_3/index.html";
// const baseUrl =
//   "https://books.toscrape.com/catalogue/category/books/mystery_3/";
// const book_data = [];

// async function getBooks(url) {
//   try {
//     const response = await axios.get(url);
//     // console.log("Response data ",response.data);
//     const $ = cheerio.load(response.data);
//     const books = $("article");
//     books.each(function () {
//       // #default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1)
//       // > article > h3 > a
//       title = $(this).find("h3 a").text();
//       // #default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1)
//       //  > article > div.product_price > p.price_color
//       price = $(this).find(".price_color").text();
//       stock = $(this).find(".availability.instock").text().trim();
//       book_data.push({ title, price, stock });
//     });
//     if ($(".next a").length > 0) {
//       next_page = baseUrl + $(".next a").attr("href");
//       // console.log('next_page length ', $(".next a"));
//       // console.log('next_page $(".next a").attr', $(".next a").attr("href"));
//       // console.log('next_page ', next_page);
//       getBooks(next_page);
//     }
//     console.log(book_data[0]);
//   } catch (error) {
//     console.error(error);
//   }
// }
// getBooks(mystery);

// for twoD
// const cheerio = require("cheerio");
// const axios = require("axios");
// const j2cp = require("json2csv").Parser;

// // const mystery = "https://www.set.or.th/th/home";
// // const mystery = "https://www.set.or.th/en/home";
// const mystery = "https://www.set.or.th/en/market/index/set/overview";
// // const mystery =
// //   "https://books.toscrape.com/catalogue/category/books/mystery_3/index.html";
// const book_data = [];

// async function getBooks(url) {
//   try {
//     const response = await axios.get(url);
//     console.log("Response status ",response.status);
//     console.log("Response data ",response.data);
//     // const $ = cheerio.load(response.data);
//     // const $ = cheerio.load(response.data);
//     const books = $("article");
//     // books.each(function () {
//     //   // #default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1)
//     //   // > article > h3 > a
//     //   title = $(this).find("h3 a").text();
//     //   // #default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1)
//     //   //  > article > div.product_price > p.price_color
//     //   price = $(this).find(".price_color").text();
//     //   stock = $(this).find(".availability.instock").text().trim();
//     //   book_data.push({ title, price, stock });
//     // });
//     // console.log(book_data[0]);
//   } catch (error) {
//     console.error(error);
//   }
// }
// getBooks(mystery);

//Response data
// <html>
// <head>
// <META NAME="robots" CONTENT="noindex,nofollow">
// <script src="/_Incapsula_Resource?SWJIYLWA=5074a744e2e3d891814e9a2dace20bd4,719d34d31c8e3a6e6fffd425f7e032f3">
// </script>
// <body>
// </body></html>

// <!DOCTYPE html>


const { chromium } = require("playwright");

(async () => {
  // Launch a headless Chromium browser
  const browser = await chromium.launch({ headless: true }); // Headless mode is true by default
  const page = await browser.newPage();

  // Navigate to a webpage
  await page.goto("https://www.set.or.th/en/market/index/set/overview");

  // Wait for the desired element to load
  await page.waitForSelector(".index__close"); // Example selector (you need to inspect the real one)

  // Extract the value from the page
  const setValue = await page.$eval(".index__close", (el) =>
    el.innerText.trim()
  );

  console.log(`SET Index Value: ${setValue}`);

  // Close the browser
  await browser.close();
})();
