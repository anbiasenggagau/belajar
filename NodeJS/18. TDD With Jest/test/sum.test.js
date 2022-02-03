const sum=require('../utils/sum')

test('properly adds two number', () => {
    expect(sum(1, 2)).toBe(3)
})