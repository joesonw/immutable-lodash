/*
* @Author: Qiaosen Huang
* @Date:   2016-07-20 15:41:35
* @Last Modified by:   Qiaosen Huang
* @Last Modified time: 2016-07-20 18:00:06
*/

'use strict';
const List = require('immutable').List;
const falsey = require('../falsey');

module.exports = function(array) {
    return array.filterNot(value => {
        return ~falsey.indexOf(value) || isNaN(value);
    });
}