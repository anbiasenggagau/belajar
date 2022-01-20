import collections as coll
import random

myListNumber = []

for item in range(10):
    myListNumber.append(random.randint(0, 10))

# Counter secara default akan mengembalikan dictionary
counted = coll.Counter(myListNumber)

myList = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
counted1 = coll.Counter(myList)

print(counted)
print(counted1)
print()

sentence = "How many times does each word show up in this sentence with a word"
sentence = sentence.split(" ")

sentenceCounted = coll.Counter(sentence)
print(sentenceCounted)
print()

alphabets = "asdbhasdjawdlaskldnmrptpeajsfnaaidbaksjdbawidbasjkda"
alphabetsCounted = coll.Counter(alphabets)

# Method most_common berguna untuk menampilkan elemen yang paling sering muncul
print(alphabetsCounted)
print(alphabetsCounted.most_common())
print(alphabetsCounted.most_common(2))
print(alphabetsCounted.most_common(6))
print()

print(list(alphabetsCounted))
print()

dictionary = {'a': 10}
# kita tidak bisa memanggil key yang belum ada
# print(dictionary['unvailable key'])

# Ketika kita memanggil key yang belum ada, secara default akan dikembalikan angka 0
dictionary2 = coll.defaultdict(lambda: 0)
dictionary2['a'] = 10
dictionary2['b'] = 12


print(dictionary2['a'])
print(dictionary2['b'])
print(dictionary2['c'])
print()

myTuple = (10,20,30)
Dog = coll.namedtuple("Dog",['age','breed','name'])
sammy =Dog(age=5,breed='Husky',name='Sam')
print(sammy)
print(sammy.name)
print(sammy.age)