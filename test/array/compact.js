/*
* @Author: Qiaosen Huang
* @Date:   2016-07-20 17:38:47
* @Last Modified by:   Qiaosen Huang
* @Last Modified time: 2016-07-20 17:46:48
*/

'use strict';
const _ = require('../../src');
const Immutable = require('immutable');
const fromJS = Immutable.fromJS;
const equal = require('../../test-util').equal;
const falsey = require('../../src/falsey');

describe('_.compact', () => {
    const array = fromJS([0, 1, 2, 3, 4, 5]);
    it('should filter falsey values', () => {
        const array = fromJS(['0', '1', '2']) ;
        const result = _.compact(fromJS(falsey).concat(array));
        equal(result, array);
    })
})