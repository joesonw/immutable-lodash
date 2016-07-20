/*
* @Author: Qiaosen Huang
* @Date:   2016-07-20 15:40:11
* @Last Modified by:   Qiaosen Huang
* @Last Modified time: 2016-07-20 15:41:27
*/

'use strict';

const array = require('./array');
let lodash = {};
for (const key in array) {
    lodash[key] = array[key];
}

module.exports = lodash;