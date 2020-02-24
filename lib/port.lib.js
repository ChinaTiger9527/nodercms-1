/*
 * @Author: your name
 * @Date: 2020-01-27 15:34:39
 * @LastEditTime: 2020-02-24 14:07:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \nodercms-1\lib\port.lib.js
 */
var _ = require('lodash');

/**
 * 格式化端口
 */
module.exports = function () {
  var PORT = false;

  var portIndex = _.findIndex(process.argv, function (arg) {
    return arg === '--port' || arg === '-p';
  });

  if (portIndex !== -1 && _.isNumber(parseInt(process.argv[portIndex + 1], 10))) {
    PORT = process.argv[portIndex + 1];
  }

  var val = PORT || process.env.PORT || '80';
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};