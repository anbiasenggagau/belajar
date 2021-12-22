import random

for item in range(3):
    print(random.randint(0,20)) # Membangkitkan angka acak dari 10 hingga 20

print()
print()
for item in range(3):
    print(random.random())

print()
print()
numbers=[1,4,7,1,5,3,8,2]
print(random.choice(numbers))

# Exercise : buatlah program yang menggambarkan cara kerja dadu dengan menggunakan class
class Dice:
    def __init__(self):
        self.roll =(1,2,3,4,5,6)

    def shake_it(self):
        self.dadu1 = random.choice(self.roll)
        self.dadu2 = random.choice(self.roll)
        print(f"({self.dadu1}, {self.dadu2})")

testing = Dice()
testing.shake_it()
