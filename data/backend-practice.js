const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});
//the above piece of code will help to wait for the responce to load first and so xhr.responce will not be undefined.

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();
//xhr.response;
/*
it takes some time to send a request onto the internet and .send() is an asynchronous code which means it
doesn't wait for this line of code to finish and it immediately jumps to the next line of code.
So xhr.response will be undefined in this case.
*/

/*
xhr.open('GET', 'https://supersimplebackend.dev/hello');
xhr.open('GET', 'https://supersimplebackend.dev/product/first');
A URL path is the part that comes after the domain name.And here this URL path gave us a Json and this contains the details of the first product in our Amazon project.So we can send requests to different URL paths and we will get different responses from the back end.

xhr.open('GET', 'https://supersimplebackend.dev/not-supported');
Backend only supports a certain set of URL paths.When we create our back end,we have to decide which URL paths are supported and how our backend would respond to each URL path.If we send a request to a URL path that is not supported, the backend will respond with an error like in the above mentioned url.

The backend also shows us a status code which tells us if your request succeeded or failed.A status code that starts with 4 or 5 means a response failed.Sstarting with 4 means it was our problem we set the request which was not supported. Starting with 5 means it was the backends problem, for example the backend crashed. If that  code starts with a 2 means a response was successful.

So now you might be wondering, how do we know which URL paths are supported and which are not?So there's actually no way to figure out all the URL paths that are supported, and this is for security reasons.However, some back ends do provide a documentation page that lists the URL path that are supported and also what kind of response that they give.
So by the way, the list of all the URL paths that are supported is called the backend API. API means application programming interface. Interface means how we interact with something. So this list of URL paths are all the ways that we can interact with the back end and that's why we call this the backend API.

The type of data that a backend can respond with is text,html,json,image etc.
Using a browser is the same thing as making a GET req.
*/