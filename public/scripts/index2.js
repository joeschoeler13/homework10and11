// index2.js

var REST_DATA = 'api/animals';
var KEY_ENTER = 13;
var defaultItems = [

];

function encodeUriAndQuotes(untrustedStr) {
    return encodeURI(String(untrustedStr)).replace(/'/g, '%27').replace(')', '%29');
}

function addanimal() {
    console.log("adding animal");
}

