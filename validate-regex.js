function validate(str) {
    regex = /^.*-s/i;
    if (str.search(regex) >= 0) {
        return true
    } else {
        return false
    }
}

module.exports = validate