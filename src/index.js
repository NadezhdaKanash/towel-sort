
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if(!Array.isArray(matrix)) return [];

    let result = matrix.reduce(
        (res, current, i) =>
            i % 2 == 0 ?
                res.concat(current.sort((a, b) => a - b)) :
                res.concat(current.sort((a, b) => b - a)),
        []);

    return result;
}
