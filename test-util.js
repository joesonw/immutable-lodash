/*
* @Author: Qiaosen Huang
* @Date:   2016-07-20 16:27:11
* @Last Modified by:   Qiaosen Huang
* @Last Modified time: 2016-07-20 17:02:14
*/

'use strict';
const Immutable = require('immutable');
const is = Immutable.is;

module.exports = {
    equal: (lhs, rhs) => {
        if (!is(lhs, rhs)) {
            throw new Error('AssertionError: expcted \n' + 
                JSON.stringify(lhs.toJSON(), 0, 4) +
                '\n to euqlas \n' +
                JSON.stringify(rhs.toJSON(), 0, 4));
        }
    },
};
