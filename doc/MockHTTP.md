# HTTP Calls

## Why Mock HTTP

1. Unit Testing
1. Instant response
1. Keep working when services are down
1. Rapid protyping
1. Avoid inter-team bottlenecks
1. Work offline

## How to Mock HTTP

1. Nock. tell it the specific url to nock and what to return
1. Static JSON. point to a static file instead of live service
1. Create development webserver
- api-mock
- JSON server
- JSON Schema faker
- Browsersync - just make your own actual server
- Express, etc. - just make your own actual server

### Static JSON -> JSON Server -> JSON Server + JSON Schema Faker -> Express, etc

1. Upfront work -->
1. Realism -->
1. Customization -->

## Our Plan for Mocking HTTP - Three step process

1. Declare our schema:
- JSON Schema Faker
1. Generate Random Data - using libraries
- faker.js
- chance.js
- randexp.js - focuses on creating random data based on regexp
1. Serve Data via API
- JSON Server

## URLs

1. [JSON-Schema.org](http://json-schema.org)
1. [JSON Schema Faker](http://github.com/json-schema-faker/json-schema-faker)

## Faker.js Docs

1. [Faker.js](http://github.com/Marak/faker.js/wiki)
1. [More Faker.js Doc](http://marak.github.io/faker.js/index.html)
1. [JSON Schema Faker REPL](http://json-schema-faker.js.org/#)

You can also use Faker's interactive example as a way to see all the data that Faker can generate.

Chance.JS - has a long dedicated website w/ examples, etc.

## DEMO Mock HTTP

1. JSON Schema Faker
- faker, chance, regexp
1. JSON Server

Get an example @ bit.ly/ps-mock-data-schema

Run the mock data api using ```npm run start-mockapi```

### Randomized data is helpful

1. Empty lists
1. Long lists
1. Long values
1. Testing
1. Filtering
1. Sorting

## Now let's mock up the delete links

1. We'll now update the code for the Delete links to delete data from the mock data.
1. We add in the code into userApi.js for the function deleteUser(id), function del(url)
1. We add in the const deleteLinks, the Array.from(deleteLinks) to cycle over the links and add the link.onclick event to call deleteUser
1. We add deleteUser to the import at the top of the code fm './api/userApi'
1. Cycle the app and you can see the code actually removes the sample data fm ./api/db.json

## Summary

### Making HTTP Calls

1. Node: http, request
1. Browser: XMLHttpRequest, jQuery, fetch
1. Node and Browser: Isomorphic Fetch, xhr, SuperAgent, Axios

### Mocking HTTP Calls

1. Nock, Hard coded JSON
1. Custom webserver: json-server, JSON Schema Faker, Express, Browsersync