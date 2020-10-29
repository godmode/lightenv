# lightenv
lightenv is a lightweight .env parser with no dependencies or config

### Install and use

1. Run `npm i -s lightenv` in your project
2. `require('lightenv');` in a file such as `index.js` in the same directory as your `.env` file before you use any environment variables.

### Debugging 

If for some reason you need to debug your `.env` file or while developing this module manually add a `LIGHTENV_DEBUG` environment variable like how you see on the first line of `test.js`;

### Sample .env
```env
# lightenv ignores lines that start with #
# It does not trim whitespace or work with multiline values. To use multiline values escape using \n.
PORT=1234
MYKEY=c73e72d1c1524=5b59f8e1be9bcca065e
```