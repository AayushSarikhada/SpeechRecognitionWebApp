var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
 
var xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:5000/api");
xhr.onload = () => console.log(xhr.responseText);
xhr.send();

console.log("helo");