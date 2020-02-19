function validate(value) {
    if (value.length > 30) {
        return false
    } else {
        return true
    }
}

module.exports = validate