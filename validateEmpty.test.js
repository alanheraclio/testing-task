const validate = require('./validate-empty')

test('validating empty value', () => {
    expect(validate(4)).toEqual(true)
    expect(validate()).toEqual(false)
})