import string

alphabets = string.printable[10:]
print(alphabets)

result = ""

for item in alphabets:
    result = result + "['" + item + "'],"

print(result[:-1])
