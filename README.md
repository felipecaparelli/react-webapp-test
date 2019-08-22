# Testing Project - React/TypeScript Web App

## Definition

This is a testing project created using React + React-Redux + Reactive Programming.

## The background

This project permits to a Hospital manager to list patients assigned to a practitioner (using a practitioner ID) and when selecting each patient, it shows a graph using the glucose measures uploaded.

It is compounded by 3 sections: home, a patient’s list and a glucose chart.

### Home
This should contain a component that will allow the practitioner to input his/her user id and if the user id is valid it should navigate to the list section and show the results, otherwise it should show a message saying that the user id is not valid.

### List
This section shows the results of all the patients assigned to that practitioner, showing a scrollable list (if it is needed) and the name, DoB, the diabetes type and a button to navigate to the graph section

### Glucose Measure Chart
Using the data for each patient a graph showing the evolution of a single day is generated using the ‘glucoseMesures’ (GM), the graphic is created dynamically using the ‘ranges’ value for each patient. 
Each glucose measure is be represented by a cross and on roll over should show the data for that GM and it uses a different color depending on its level.


## Running

### `npm start`

> Runs the app in the development mode.<br>
> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Libraries 
*	**[react](https://github.com/facebook/react)**: A declarative, efficient, and flexible JavaScript library for building user interfaces. 
*	**[redux](https://github.com/reactjs/redux)**: Keep the entire state of your app in a single place.
*	**[redux-observable](https://github.com/redux-observable/redux-observable)**: middleware for action side effects in Redux using "Epics".
*	**[Reselect](https://github.com/reduxjs/reselect)**: Simple “selector” library for Redux.
*	**[Recompose](https://github.com/acdlite/recompose)**: Recompose is a React utility belt for function components and higher-order components.
*	**[Ramda](https://github.com/ramda/ramda)**: Practical functional Javascript.
*	**[Jest](https://github.com/facebook/jest)**: A comprehensive JavaScript testing solution.
*	**[styled-components](https://github.com/styled-components/styled-components)**: Use tagged template literals to style your components.
*	**[Typescript](https://github.com/Microsoft/TypeScript)**:  a superset of JavaScript that compiles to clean JavaScript output
