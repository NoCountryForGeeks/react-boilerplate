# NC4G React Boilerplate

<div align="center">
    <a href="http://www.nocountryforgeeks.com" target="_blank">
        <img width="200px" src="documentation/images/nocountryforgeeks.svg" alt="nocountryforgeeks" />
    </a>
</div>

The **nocountryforgeeks** team have been working in a base **React Boilerplate** to allow developers to start a **React** project with no configuration and trying to improve the development experience and reduce the develop time.

# Features

- **Quick start**: Inmediatly after downloading the project, you will can start to develop your application , creating new components, fetching data from server, create reducers, sagas and styling your application .

- **JavaScript**: It is posible to write the latest JavaScript features (destructuring, arrow functions, generators, JSX) and transpile to suport all browsers.

- **State management**: Centralize the application  state and manage the unidirectional data flow. (react-redux, redux, redux-act, redux-saga)


- **Internationalization**: Support multiple languages, making lazy loading languages when the application  language is changed. (i18next, i18next-browser-languagedetector, i18next-xhr-backend, react-i18next)

- **CSS**: Write modularity CSS for each component. The configuration generates unique class names, eliminate the unused styles and lazy load chunks of css per component to best performance. (css-loader, postcss-loader, purifycss-webpack, mini-css-extract-plugin)

- **Linter**: Inmedialtly linter errors and warnings in IDE and console, linting JS and CSS. (eslint, stylelint)

- **Hot module replacement**: Improve the **developer experience** with fast reflect changes in the browser, the JS and CSS changes are reflected instantaneously without refreshing the page and preserve application state. (react-hot-loader)

- **Offline**: Offline support catching all resources and assets with service worker to allow users to use application without conexion.

- **Images minification**: Minimize images to remove unnecesary data into the image. it is configured to no lose quality (only the image size go down if the ima is not optimized by default). (image-webpack-loader)

- **Fonts minification**: Minifies icon fonts to just what is used. (fontmin-webpack)

- **SVG Sprite**: Create SVG sprite to yours SVG images or icon to only make a single http request. (svg-sprite-loader)

- **Icon generator**: With a single image a bunch of favicons are generated to all platforms and sizes and the links are inserted in the index.html. (webapp-webpack-plugin)

- **Error boundary**: Catch render errors in react component and the option to make an action when it happens and option to render a error component.

- **Test**: "Waiting to Test setup"

- **Navigation** "Waiting to router setup"

- **Banner**: You can add a banner to the top of each generated chunk.

- **Production bundle**: It's posible to create 2 production bundles. First way generate the application as statics files. Second way generate the files with a **nginx** server configured to serve the application.

- **Zip resources**: The production bundle, generate 3 output file types (.js, .zip, .br). It allow the server to send the file with minimun file that is supported muy the requester browser. With process the .br files are about **400%** smaller!.

- **IDE configuration**: To improve **developer experience** there is a **Docker image** with a **VS Code** ready to start **developing** with all settings configured.

# Quick start

1. Clone the repo using `git clone https://github.com/NoCountryForGeeks/react-boilerplate.git`
2. Move to boilerplate directory `cd react-boilerplate`
3. Execute `yarn start` or `npm start`
4. If you wanna have a full development enviroment you can use `yarn start:docker:editor` and the project will be run in a container and a vscode instance previosly configured will be run with the project opened. (Disclaimer: Don´t forget setting the environment DISPLAY variable if you are working on a windows machine)

# Road Map

- Create theme provider
- Create **NC4G CLI**
    - Transparent configuration
    - Generate the webpack configuration as npm package
    - Extensible webpack configuration
- Diferent build platforms support
    - gitHub
    - gitLab
    - VSTS
- Service worker
    - Improve offline work
    - Caching all request
- Notifications
    - Firebase
    - Azure
- Usage of Native services (GPS, Webcam, Microphone)
- Plash screen
- SSR
- CLI creation options
    - Select store (redux, apollo, no store)
    - PWA support (yes, no)
    - SSR support (yes, no)
- Generate SPA reporter.
