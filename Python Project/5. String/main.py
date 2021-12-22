#Remember to use wisely whether ' or ", and also you can use \ like in any other programming lenguage
course = "Python's Course for \"Beginners\""
print(course)

#another example for using 3 quotation
course = """
Hi John
this me Anbia, I hope you're doing alright
for my sympathy, I send you my example of exercise
"""
print(course)

#Taking only a character in the string, it works as array of characters
course = 'Python for Beginners'
print(course[0])
print(course[-1]) #print the character from the very last of the array

#Taking a few charaters from a string
course = 'Python for Beginners'
print(course[0:6])
print(course[0:])
print(course[1:])
print(course[:5])
print(course[:])
#If we not define the number, python will define it as zero

#How the plus sign affect the string in python? check the result of this code below
x = 'Hello World'
y = x + ' it is beautiful outside!'
print(y)

#Exercise :
name = 'Jennifer'
print(name[1:-1])
