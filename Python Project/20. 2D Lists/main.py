
matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

print(matrix[0][2])
print(matrix[1][0])
print(matrix[2][2])
matrix[2][2] = 20
print()

for row in matrix:
    for item in row:
        print(item)