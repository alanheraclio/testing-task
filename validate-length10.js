function validate(value) {
    if (value.length <= 10) {
        return true
    } else {
        return false
    }
}

module.exports = validate