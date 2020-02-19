const validate = require('./validate-length3')

test('validating lenght = 3', () => {
    expect(validate("123")).toEqual(false)
    expect(validate("12345")).toEqual(true)
})