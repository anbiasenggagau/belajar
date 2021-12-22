# Membuat daftar koordinat dengan nested loop
for x in range(1, 4):
    for y in range(1, 4):
        print(f'({x}, {y})')
print()
print()

#Challange
numbers = [5, 2, 5, 2, 2]
for item in numbers:
    output = ''
    for count in range(item):
        output = output + 'x'
    print(output)