# Rosie's Recipes Web Frontend

We're creating a *virtual cooking assistant*: __Rosie__. 

This is the web frontend for it. 

It is written in React with TypeScript

## Development
@b3: see wiki in MS Teams for overall project description and links to various tools


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `VS Code setup`

In order to setup your vs code to format your code correctly you need to .
1- Install ESLint VS Code extension by Microsoft.
2- Go to settings > Open Settings (JSON) which you'll fin in the top right hand side of the window.
3- Set EsLint as default formatter like this
    `"editor.defaultFormatter": "dbaeumer.vscode-eslint"`
4- In order to enable AutoFix on save add this to settings:
    `"editor.codeActionsOnSave": { "source.fixAll": true }`
5- When editing a file, make sure to select the right end of line sequence. You will find it on the editor's bottom bar and you'll see two options: ##LF and ##CRLF . Select ##LF .

For more information about VS Code, you check out the [VS Code documentation](https://code.visualstudio.com/docs).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
