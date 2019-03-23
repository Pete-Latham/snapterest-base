# snapterest-base
Base Webpack and node configuration for Packt React 16 Essentials book

Clone repository.
You will probably want to rename the folder to simply `snapterest`
Open CLI and cd to `snapterest` folder
`npm install` to download required patches.
`npm start` to compile

## Additions
In addition to the setup described in the book, this project has been configured for hot browser loading. Ensure that your entry point JS file (probably `app.js`) has the following as its last line.
`module.hot.accept();`

The Webpack development server is configured for port 8080 by default whereas we've used 3000 in all our React work so far.
