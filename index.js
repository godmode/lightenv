try {
  const lines = require('fs').readFileSync('./.env', 'utf-8').split('\n');

  lines.forEach((line) => {
    // a line should have at least 3 characters (k=v)
    if (line && line.charAt(0) != '#' && line.length > 2) {
      const equality = line.indexOf('=');
      if (equality !== -1) {
        const key = line.substr(0, equality);
        const value = line.substr(equality + 1, line.length);

        if (!process.env[key]) {
          process.env[key] = value;
        }
      }
    }
  });
} catch (err) { console.warn('Warning: .env file not found or loaded.'); }
