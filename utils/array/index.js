/**
 *
 * @param {*} columns
 * @param {*} array
 * @desc Sorts list to be spread evenly between a matrix [][]
 * @returns 2D Matrix [][]
 *
 */

const spreadElementsInMatrix = (columns, array) => {
  let new_array = Array(columns).fill(Array());
  let count = 0;

  array.forEach((element) => {
    new_array[count] = [element, ...new_array[count]];

    if (count + 1 < columns) count++;
    else count = 0;
  });

  return new_array;
};

export { spreadElementsInMatrix };
