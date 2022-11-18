const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain) in this case mywebsite.com
console.log(myUrl.host);

// Hostname
console.log(myUrl.hostname);

// Host and hostname will look like it prints out the same thing here but host will get the port if that is in the url and hostname will not

// Path name
console.log(myUrl.pathname);

// Serialized Query
console.log(myUrl.search);
// Params Object
console.log(myUrl.searchParams);
// Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));