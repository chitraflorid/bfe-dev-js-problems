There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.

implement your own one.

Here is an example to illustrate

const arr = [1, [2], [3, [4]]];

flat(arr)
// [1, 2, 3, [4]]

flat(arr, 1)
// [1, 2, 3, [4]]

flat(arr, 2)
// [1, 2, 3, 4]

* @param { Array } arr
 * @param { number } depth
 */
function flat(arr, depth = 1, res = []) {
  // your imeplementation here
  if (depth < 0) {
     return res.push(arr);
  }
  
   arr.reduce((acc, item, index) => {
    if (Array.isArray(item)) {
      const sliced = arr.slice(index, index+1);
      return flat(sliced[0], depth - 1, res);      
    } else {      
        res.push(item);
    }
  }, []);
  
  return res;
}
