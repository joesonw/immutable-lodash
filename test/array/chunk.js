/*
* @Author: Qiaosen Huang
* @Date:   2016-07-20 16:04:43
* @Last Modified by:   Qiaosen Huang
* @Last Modified time: 2016-07-20 17:01:56
*/

'use strict';
const _ = require('../../src');
const Immutable = require('immutable');
const fromJS = Immutable.fromJS;
const equal = require('../../test-util').equal;

describe('_.chunk', () => {
    const array = fromJS([0, 1, 2, 3, 4, 5]);
    it('should return chunked arrays', () => {
        const result = _.chunk(array, 3);
        equal(result ,fromJS([[0, 1, 2], [3, 4, 5]]));
    })
    it('should return the last chunk as remaining elements', () => {
        const result = _.chunk(array, 4);
        equal(result ,fromJS([[0, 1, 2, 3], [4, 5]]));
    })
    it('should treat falsey `size` values, except `undefined`, as `0`', () => {
        const result = _.chunk(array, undefined);
        equal(result ,fromJS([[0], [1], [2], [3], [4], [5]]));
    })
    it('should ensure the minimum `size` is `0`', () => {
        const result = _.chunk(array, -1);
        equal(result ,fromJS([[0], [1], [2], [3], [4], [5]]));
    })
    it('should coerce `size` to an integer', () => {
        const result = _.chunk(array, array.length / 4);
        equal(result ,fromJS([[0], [1], [2], [3], [4], [5]]));
    })
    it('should work as an iteratee for methods like `List.map`', () => {
        const result = fromJS([[1, 2], [3, 4], [5, 6]]).map(_.chunk);
        equal(result ,fromJS([[[1], [2]], [[3], [4]], [[5], [6]]]));
    })
})