const validate = require('./validate-regex')

test('validating regex', () => {
    expect(validate("abc-s")).toEqual(true)
    expect(validate("abc-S")).toEqual(true)
    expect(validate("abc")).toEqual(false)
})