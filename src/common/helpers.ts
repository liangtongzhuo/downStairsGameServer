import moment from 'moment';

console.log = (function(callback) {
  return function() {
    let s = '';
    for (const iterator of arguments) {
      s = s + '| ' + JSON.stringify(iterator);
    }
    callback.call(console, `${moment().format('YYYY-MM-DD HH:mm:ss')} ${s}`);
  };
})(console.log);
