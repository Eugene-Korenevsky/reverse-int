module.exports = function reverse(n) {
    if (!n) {
        return
    }
    let first = n.toString().split('').reverse().join('');
    return parseInt(first);
}