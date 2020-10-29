const fs = require('fs');
const path = require('path');
const fileName = path.join(process.cwd(), '/.env');

try {
  fs.accessSync(fileName, fs.constants.R_OK);

  const replaceEscapedChar = (char) => {
    switch(char) {
      case 't':
        return '\t';
      case 'v':
        return '\v';
      case '0':
        return '\0';
      case 'b':
        return '\b';
      case 'f':
        return '\f';
      case 'n':
        return '\n';
      case 'r':
        return '\r';
      case '\'':
        return '\'';
      case '"':
        return '\"';
      case '\\':
        return '\\';
      default:
        return char;
    }
  };

  const lines = fs.readFileSync(fileName, 'utf-8').split(/(\n|\r)/);

  lines.forEach((line) => {
    // a line should have at least 3 characters (k=v)
    if (line && line.charAt(0) != '#' && line.length > 2) {
      const equality = line.indexOf('=');
      if (equality !== -1) {
        const key = line.substr(0, equality);
        const value = line.substr(equality + 1, line.length);

        if (!process.env[key]) {
          process.env[key] = value.replace(/\\[tv0bfnr'"\\"]/g, str => {
            return replaceEscapedChar(str.substr(1, 2));
          });
        }
      }
    }
  });
} catch (err) {
  if (process.env.LIGHTENV_DEBUG) {
    console.warn(err.message);
  }
}
