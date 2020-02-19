const validate = require('./validate-length30')

test('validating lenght > 30', () => {
    expect(validate("123456789-123456789-123456789-1")).toEqual(false)
    expect(validate("123456789")).toEqual(true)
})