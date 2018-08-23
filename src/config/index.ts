const patchConfig = `./${process.env.NODE_ENV || './local'}`;
module.exports = require(patchConfig);
