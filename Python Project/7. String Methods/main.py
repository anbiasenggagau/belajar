course = 'Python for Beginners'
print(len(course))
# len merupakan fungsi untuk menghitung jumlah data pada suatu variable, pada string, akan dihitung jumlah karakter

# String methods, cara kerjanya sama seperti Object Oriented Programming
print(course.split(' '))
print(course.upper())
print(course.lower())
print(course.find('P'))
print(course.find('B'))
print(course.find('F'))  # Method akan mengembalikan nilai -1 ketika tidak menemukannya, perhatikan bahwa Python case sensitive
print(course.find('Beginners'))  # Mencari satu kata penuh
print(course.replace('Beginners', 'Professional'))

# memeriksa suatu kata apakah ada di string
print('Python' in course)

#String pada python bersifat immutable, artinya kita tidak bisa mengganti salah satu nilai index dari variable. this code below will cause an error

x = "Hello World"
# x[1] = "P"

#The right way to replace it, is by using replace method
x = x.replace('H','P')
print(x)
