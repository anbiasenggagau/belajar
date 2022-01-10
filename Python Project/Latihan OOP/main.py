class Line():
    def __init__(self, coor1, coor2):
        self.coor1 = coor1
        self.coor2 = coor2

    def distance(self):
        x = self.coor1[0] - self.coor2[0]
        y = self.coor1[1] - self.coor2[1]
        return x * y

    def slope(self):
        x = self.coor1[0] - self.coor2[0]
        y = self.coor1[1] - self.coor2[1]
        return x / y


coordinates1 = (3, 2)
coordinates2 = (8, 10)

li = Line(coordinates1, coordinates2)
print(li.distance())
print(li.slope())
print()
# =================================================================

class Cylinder():

    def __init__(self, height=1, radius=1):
        self.height = height
        self.radius = radius

    def volume(self):
        vol = (self.radius ** 2) * 3.14 * self.height
        return vol

    def surface_ares(self):
        sur = (self.radius ** 2) * 3.14 * 2 + (self.radius * 2 * 3.14 * self.height)
        return sur


c = Cylinder(2, 3)
print(c.volume())
print(c.surface_ares())
print()
# =================================================================

class Account():
    def __init__(self,owner,balance):
        self.owner = owner
        self.balance = balance

    def deposit(self,depo):
        self.balance = self.balance + depo
        print(f"${depo} deposit accepted")
        print()

    def withdraw(self,amount):
        if amount > self.balance:
            print("Funds Unavailable")
            print()
            return False
        self.balance = self.balance - amount
        print(f"${amount} withdrawal accepted")
        print()

    def __str__(self):
        return f"""
Account owner       : {self.owner}
Account balance     : {self.balance}
"""

anbia = Account('Anbia',100)
print(anbia)
print(anbia.owner)
print(anbia.balance)
anbia.deposit(50)
print(anbia.balance)
anbia.withdraw(75)
print(anbia.balance)
anbia.withdraw(500)

# =================================================================

class Belanja():
    def __init__(self,uang=100000,lembar=10):
        self.uang = uang
        self.lembar = lembar
        self.tipeUang = [1000,2000,5000,10000,20000,50000,100000]

    def bayar(self,hargaBarang,jumlahLembar):
        if hargaBarang > self.uang:
            print("Uang tidak cukup")
            return False
        elif jumlahLembar > 10:
            print("Jumlah lembar uang terlalu banyak")
            return False
        else:
            jumlahUang = []
            sum = 0
            jumlahLembarUang = 0
            selesai = False
            while jumlahLembarUang != jumlahLembar:
                if jumlahLembar == 1:
                    for item in self.tipeUang:
                        if item > hargaBarang:
                            jumlahUang.append(item)
                            jumlahLembarUang = jumlahLembarUang + 1
                            return jumlahUang
                else:
                    for index in range(6,-1,-1):
                        while self.tipeUang[index] + sum < hargaBarang :
                            sum = sum + self.tipeUang[index]
                            jumlahUang.append(self.tipeUang[index])
                            jumlahLembarUang = jumlahLembarUang + 1
                            if sum > hargaBarang:
                                jumlahUang.pop()
                                sum = sum - self.tipeUang[index]
                                jumlahLembarUang = jumlahLembarUang - 1
                    return jumlahUang

bella = Belanja()
jumlah = bella.bayar(24000,4)
print(jumlah)


