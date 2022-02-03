const substract=require('../utils/substract')

test('properly substract two number', () => {
    expect(substract(1, 2)).toBe(-1)
})