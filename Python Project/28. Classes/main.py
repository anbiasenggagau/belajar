class Point:
    def move(self):
        print("Move")

    def draw(self):
        print("Draw")

point1 = Point()
point1.x = 10
point1.y = 20
print(point1.x)
point1.draw()
print()
print()

class Point:
    def __init__(self,x,y): #Membuat constructor untuk menginisialisasi nilai suatu properthy pada object
        self.x = x
        self.y = y

point1 = Point(10,20)
print(point1.x)
print(point1.y)
print()
print()

point1.x = 20
print(point1.x)
print()
print()

# Exercise : buatlah suatu class orang, yang terdapat properthy name dan method talk
class Person:
    def __init__(self,name='Anbia'): #pada properthy bisa dilakukan nilai inisialisasi, contohnya 'anbia'
        self.name = name

    def talk(self):
        print(f"Hi {self.name}")

anbia = Person("Muhammad Anbia Senggagau")
anbia.talk()
gg = Person()
gg.talk()
