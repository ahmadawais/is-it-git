/**
 * Is It Git.
 */
const fs = require('fs');
const path = require('path');

module.exports = (cwd = process.cwd()) => {
	return fs.existsSync(path.join(cwd, '.git'));
};
