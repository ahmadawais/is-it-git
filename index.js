/**
 * Is It Git.
 */
const fs = require('fs');
const path = require('path');

module.exports = () => {
	return fs.existsSync(path.join(process.cwd(), '.git'));
};
