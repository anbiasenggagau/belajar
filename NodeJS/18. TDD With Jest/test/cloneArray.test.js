const expect=require('expect')
const cloneArray=require('../utils/cloneArray')

test('Properly clones an array', () => {
    const array=[1, 2, 3]
    // Diharapkan menghasilkan array yang sama walupun dengan penempatan memory yang berbeda
    expect(cloneArray(array)).toEqual(array)
    // Diharapkan tidak menghasilkan array dengan isi array dan penempatan memory yang sama
    expect(cloneArray(array)).not.toBe(array)
})