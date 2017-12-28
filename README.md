# Monadical Take-Home Project

## Task

Your task is to extend this small example app with a few more features and nicer CSS:

1. Add the ability to remove rows by clicking an "X" button in the row
2. Add the ability to download the data as a JSON file
3. Make the page look nicer using a CSS framework like:
  - Bootstrap
  - Semantic UI
  - material design
  - UIKit
  - Pure.CSS
  - or another framework of your choice

It's estimated to take between 1hr and 3hrs depending on how much time you spend doing CSS.

You may also add any other features you think would be a good idea in this database app, but be careful not to over-engineer it.  You're also welcome to name the page something other than "Database" if you want to give it a catchy name, color scheme, or logo (although it's not a requirement).

We're looking for:

1. functional, clean, minimalist code design that extends the existing code
2. good-looking UI & UX that's easy to use

## Folder Structure

```
example-project/
  README.md
  node_modules/
  package.json
  public/
    index.html
  src/
    index.js
    index.css
    ... other javascript files, images, fonts, etc
```


## Running the app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Adding Images, Fonts, and Files

You can **`import` a file right in a JavaScript module**. This tells the build system (Webpack) to include that file in the bundle. Importing a file gives you a string value. This value is the final path you can reference in your code, e.g. as the `src` attribute of an image or the `href` of a link to a PDF.

Here is an example:

```js
import React from 'react'
import logo from './logo.png' // Tell Webpack this JS file uses this image

const Header = () =>
    <img src={logo} alt="Logo"/>
```
