const __= require('lodash');
// const arr = [1,[2,[3,[4,[5]]]]];
// const arr_item = __.flattenDeep(arr);

// const arr = [1,[2,[3,[4,[5]]]]];
// const arr_item = __.chunk(['a','b','c','d','e'],3);
const arr_item = __.compact([1,2,0,3,4,false,5]);
console.log(arr_item);
