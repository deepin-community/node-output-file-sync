/*!
 * indexed-filter | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/indexed-filter
*/
module.exports = function indexedFilter(arr, fn, thisObj) {
  'use strict';

  if (!Array.isArray(arr)) {
    throw new TypeError(String(arr) + ' is not an array. Expected an array to be filtered.');
  }

  if (typeof fn !== 'function') {
    throw new TypeError(
      String(fn) +
      ' is not a function. Expected a filter function that returns Boolean value.'
    );
  }

  var results = [];

  arr.forEach(function(v, i, arrayItself) {
    if (fn.call(this, v, i, arrayItself)) {
      results.push({
        index: i,
        value: v
      });
    }
  }, thisObj);

  return results;
};
