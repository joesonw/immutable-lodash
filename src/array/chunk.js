/*
* @Author: Qiaosen Huang
* @Date:   2016-07-20 15:41:35
* @Last Modified by:   Qiaosen Huang
* @Last Modified time: 2016-07-20 16:43:14
*/

'use strict';
const List = require('immutable').List;

module.exports = function(array, size) {
    size = size || 1;
    let result = List(); 
    let i = 0;
    let list = List();
    array.forEach((value) => {
        list = list.push(value);
        i++;
        if (i % size === 0) {
            result = result.push(list);
            list = List();
        }
    });
    if (list.count() > 0) {
        result = result.push(list);
    }
    return result;
}