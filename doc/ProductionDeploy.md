# Production Deployment

## Overview

We're going to talk about

1. Separating the UI from the API (into completely separate projects)
1. Hosting providers
1. Automated deployment
1. Handling starter kit updates
1. Inspiration
1. Challenge

### Separating the UI from the API

In a real app, we should separate the front end and the API in completely separate projects. Why?

1. Simple, low-risk, UI only deployments is easy and fast
1. Separate concerns
  - Separate teams! UI team can code against the mock api, and come together when its ready
  - Less to understand. Devs can work on one of the two concerns in isolation
  - Scale back-end separately. Traffic for API may differ dramatically from front end, so separating gives you a lot of flexibility in deplyment architecture, infrastructure, network, et al.
1. Cheap UI hosting
1. Serve UI via a content delivery network. Caching and scalabilty is delivered FOR YOU in CDNs!
1. Finally, use the API technology you like. You don't have to use JS... or you can. All up to you. Rails, Java, .NET, etc.

### Automated Deployments

1. First question is where should we host the app? Popular options include:

1. AWS
1. Azure
1. Heroku
1. Firebase
1. Google Cloud Platform
1. Firebase
1. Github Pages
1. Surge

Most do far more than just host Javascript apps. Interestingly, Firebase, Github Pages and Surge are focused purely on serving static files.

The process of deployment will differ based on the target.

For the HOST API, we'll use Heroku. For the UI, we'll use Surge.

#### DEMO TIME

1. Automated API deploy to [Heroku](https://devcenter.heroku.com/)

In our example app, we made an API endpoint hosted via Express. We'll host this API on Heroku. It also allows you to showcase an automated deployment.

I need to prepare the app.

There were two projects we forked from Cory House (fork vs clone as we're going to be updating and changing things and then pushing those changes to heroku):

1. https://github.com/coryhouse/js-dev-env-demo
1. https://github.com/coryhouse/js-dev-env-demo-api 

