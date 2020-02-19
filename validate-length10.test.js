const validate = require('./validate-length10')

test('validating lenght <= 10', () => {
    expect(validate("123456789-")).toEqual(true)
    expect(validate("123456789")).toEqual(true)
    expect(validate("123456789-1")).toEqual(false)
})