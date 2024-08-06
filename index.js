

const cheerio = require("cheerio");
const axios = require('axios');
const j2cp = require('json2csv').Parser;

const mystery = "https://books.toscrape.com/catalogue/category/books/mystery_3/index.html";
const baseUrl = "https://books.toscrape.com/catalogue/category/books/mystery_3/";
const book_data = [];

async function getBooks(url) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const books = $("article");
        books.each(function () {
            title = $(this).find("h3 a").text();
            price = $(this).find(".price_color").text();
            stock = $(this).find(".availability.instock").text().trim();
            book_data.push({ title, price, stock });
        });
        if ($(".next a").length > 0) {
            next_page = baseUrl + $(".next a").attr("href");
            // console.log('next_page length ', $(".next a"));
            // console.log('next_page $(".next a").attr', $(".next a").attr("href"));
            // console.log('next_page ', next_page);
            getBooks(next_page);
        } 
        console.log(book_data.length);
    } catch (error) {
        console.error(error);
    }
}
getBooks(mystery);

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

// const url = "https://books.toscrape.com/catalogue/category/books/mystery_3/index.html";

// async function getBooks(params) {
//     try {
//         const response = await axios.get(url);
//         const $ = cheerio.load(response.data);
//         const genre = $("h1").text();
//         console.log(genre);
//     } catch (error) {
//         console.error(error);
//     }
// }
// getBooks();


