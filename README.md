# Brastlewark Finder

Web application that will allow you to search for gnomes inside the village of Brastlewark, built in React. ⚛️

## Context

All the information of the gnomes comes from a single endpoint, that will return the information of each gnome in the following structure:

```json
{
     "id": 0,
     "name": "Tobus Quickwhistle",
     "thumbnail":
    "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
     "age": 306,
     "weight": 39.065952,
     "height": 107.75835,
     "hair_color": "Pink",
     "professions": [
       "Metalworker",
       "Woodcarver",
       "Stonecarver",
       " Tinker",
       "Tailor",
       "Potter"
     ],
     "friends": ["Cogwitz Chillwidget", "Tinadette Chillbuster"]
   },
```

Given the lack of an approapiate REST API (all the information comes together, and that is the worst for the performance of the application), I divided the web application in two sections:

### Client

Communicate with the Server and provides a simple page which will help to find gnomes with a specific name or with different proffessions. Technologies that runs here:

All the request are going to be managed using apollo, so we don't have to care of how the request is being performed just what information we need. By using redux we'll have to take care on all the process of the request (PENDING, SUCCESS, FAILURE) and in the other hand Apollo will handle that for us! I like this approach because it's a more declative way.

#### Project's structure

**Redux is organized using the ducks structure due to the complexity of the store, splitting each part of redux (actions, reducers, selectors, etc.) into different files will increase the boilerplate unnecesarily**

* /src
  * /ducks
    * search.js // Ducks
  * /screens
    * /Home
      * Container.js //connection to redux
      * Home.js //screen itsef
    * /Gnome
      * Container.js //connection to redux
      * Gnome.js //screen itsef
  * /shared
    * /AppContainer
    * /GnomeInformation
    * /TextField
  * index.js //Render the application
  * apolloClient // Apollo configuration
  * Router.js //React-router configuration
  * store.js //Redux configuration

#### Stack Used

* react: UI library
* react-router: Routing
* redux: State manager
* apollo-client: Manage all the data request
* styled-components: Styling library

### Server

I create a GraphQL server that will help to query that huge ammount of data.

Using Micro from Zeit, I'm hosting a GrahQL server using Apollo-GraphQL-Server from apollo, that will fetch the json from github and then give me GraphQL endpoint so I can query it without having any problem!
