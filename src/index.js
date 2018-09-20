/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

let count = 0;
let spichonee_1,spichonee_2;
for (let i=0; i<preferences.length; i++) {
  spichonee_1 = preferences[i] -1;
  spichonee_2 = preferences[spichonee_1] -1;
  if (preferences[spichonee_2] -1 == i) {
    count+=1;
  }
}
return result = Math.floor(count / 3);
};
