# Melakukan fungsi map
def square(num):
    return num ** 2


numbers = [1, 2, 3, 4, 5]

# hasil dari fungsi map harus di-assign ke dalam suatu variable
newList = list(map(square, numbers))
print(newList)
print()


# Jika suatu element memiliki panjang string genap, maka nilainya akan digantikan menjadi tulisan even
# Jika ganjil, maka akan digantikan menjadi huruf pertama dari string tersebut
def splicer(myString):
    if len(myString) % 2 == 0:
        return "even"
    else:
        return myString[0]


names = ['John', 'Cindy', 'Sarah', 'Kelly', 'Mike']
newNames = list(map(splicer, names))
print(newNames)
print()


# Melakukan fungsi filter
# Membuat list baru yang hanya terisi angka-angka genap dari list yang lain
def check_even(num):
    return num % 2 == 0


numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
newList = list(filter(check_even, numbers))
print(newList)
print()

# Melakukan fungsi lamda
# Example
square = lambda num: num ** 2
print(square(2))
print()

# So why would use this? Many function calls need a function passed in, such as map and filter.
# Often you only need to use the function you are passing in once, so instead of formally defining it,
# you just use the lambda expression. Let's repeat some of the examples from above with a lambda
# expression

newList = list(map(lambda num: num ** 2, numbers))
print(newList)
print()

newList = list(filter(lambda n: n % 2 == 0,numbers))
print(newList)
print()