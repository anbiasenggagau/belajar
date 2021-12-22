numbers = [5,2,1,7,4]

numbers.append(20)
print(numbers)
print()

numbers.insert(0, 8)
print(numbers)
print()

numbers.remove(7)
print(numbers)
print()

print(numbers.count(10))
print()

numbers.pop()
print(numbers)
print()

print(numbers.index(1))
print()

print(8 in numbers)
print()

numbers.sort()
print(numbers)
print()

numbers.reverse()
print(numbers)
print()

numbers2 = numbers.copy()
numbers.append(20)
print(f'Numbers = {numbers}')
print(f"Numbers2 = {numbers2}")
print()

numbers.clear()
print(numbers)
print()

# Exercise : buatlah program yang menghilangkan angka yang sama pada list
numbers = [5,7,6,9,1,3,6,5,4,2,7,8]
unique = []
print(f'Numbers = {numbers}')
print()

for item in numbers:
    if item not in unique:
        unique.append(item)

print(f'Unique number = {unique}')
