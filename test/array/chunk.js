/*
* @Author: Qiaosen Huang
* @Date:   2016-07-20 16:04:43
* @Last Modified by:   Qiaosen Huang
* @Last Modified time: 2016-07-20 16:47:24
*/

'use strict';
const _ = require('../../src');
const Immutable = require('immutable');
const fromJS = Immutable.fromJS;
const equal = require('../../test-util').equal;

describe('_.chunk', () => {
    it('should split array into size-of-2 arrays', () => {
        const array = fromJS(['a', 'b', 'c', 'd']);
        const result = _.chunk(array, 2);
        equal(result ,fromJS([['a', 'b'], ['c', 'd']]));
    })
    it('should split array into size-of-3 arrays', () => {
        const array = fromJS(['a', 'b', 'c', 'd']);
        const result = _.chunk(array, 3);
        equal(result ,fromJS([['a', 'b', 'c'], ['d']]));
    })
})