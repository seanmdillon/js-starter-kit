# HTTP Calls

1. Making HTTP Calls
1. Mocking HTTP Calls
- Why Mock
- Mocking Approaches
- Generate mock data and mock API

This module is about making our dev and app interact w/ the world. 

## HTTP Call Approaches

Node | Browser | Node & Browser
---- | ------- | --------------
http | XMLHttpRequest (XHR) | isomorphic-fetch
request(*) | jQuery ($.ajax) | xhr (package on NPM)
. | Framework-based (like Angular) | SuperAgent
. | Fetch(*) | Axios (auth preferred)(*)

### * - probably best approach

### Example of Fetch

```Javascript
var request = new Request('http://your-api.com/user', {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({
        'Content-type': 'text/html; charset=UTF-8'
    })
});

fetch(request).then(onSuccess, error);
```

## Why Centralize API Calls

1. Configure ALL calls. base urls, utility functions, et al can all go in one place.
1. Handle preloader logic
1. Handle errors
1. Single seam for mocking

## We'll use FETCH for our demo, we'll also centralize our API calls

