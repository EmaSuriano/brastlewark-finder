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

* React: UI library
* React-router: Routing
* Redux: State manager
* Styled-components: Styling library

### Server

I create a GraphQL server that will help to query that huge ammount of data.

Using Micro from Zeit, I'm hosting a GrahQL server using Apollo-GraphQL-Server from apollo, that will fetch the json from github and then give me GraphQL endpoint so I can query it without having any problem!
