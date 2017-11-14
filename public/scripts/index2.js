// index2.js

var REST_DATA = 'api/animals';
var KEY_ENTER = 13;
var defaultItems = [

];

var item = 0;

function encodeUriAndQuotes(untrustedStr) {
    return encodeURI(String(untrustedStr)).replace(/'/g, '%27').replace(')', '%29');
}

function addanimal() {
    console.log("adding animal");

    var data = {
        name: "animal",
        animalname: document.getElementById('animalname').value,
        animallegs: document.getElementById('animallegs').value
    };
    console.log(data)
    item++
    xhrPost(REST_DATA, data, function(item){

    }, function(err) {
        console.error(err);
    })
}