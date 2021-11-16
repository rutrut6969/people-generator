// Imports
const maleNames = require('./male-first-names.json');
const femaleNames = require('./female-first-names.json');
const request = require('request');
const cherio = require('cherio');
const fs = require('fs');

// Variables
const femaleUrl = 'https://www.verywellfamily.com/top-1000-baby-girl-names-2757832'
const maleUrl = 'https://www.verywellfamily.com/top-1000-baby-boy-names-2757618'
const namesList = '#mntl-sc-block_1-0-12, li';
const maleNamesArr = [];
const femaleNamesArr = []

// Functions
function maleNamesFinder() {
  request(maleUrl, (err, response, html) => {
    if(!err && response.statusCode == 200) {
      const $ = cherio.load(html);

      $('ol.mntl-sc-block li').each((i, el) => {
        const item = $(el).text();
        maleNamesArr.push(item);
      })
    }
    // console.log(names);
    fs.writeFileSync('./male-first-names.json', JSON.stringify(maleNamesArr, null, 4));
  })
}

function femaleNamesFinder() {
  request(femaleUrl, (err, response, html) => {
    if(!err && response.statusCode == 200) {
      const $ = cherio.load(html);

      $('ol.mntl-sc-block li').each((i, el) => {
        const item = $(el).text();
        femaleNamesArr.push(item);
      })
    }
    // console.log(names);
    fs.writeFileSync('./female-first-names.json', JSON.stringify(femaleNamesArr, null, 4));
  })
}


// Invoking Functions
maleNamesFinder();
femaleNamesFinder();
