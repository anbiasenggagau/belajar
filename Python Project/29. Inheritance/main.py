class Mamal:
    def __init__(self): # __init__ berfungsi untuk mengeksekusi suatu perintah setiap kali object dibuat
        print("Hewan menyusui")
        self.voice = "Bunyinya"

class Cat(Mamal): #mewarisi seluruh method dan properthy pada class Mamal
    def talk(self):
        print(f"{self.voice} Meong")

kucing = Cat()
kucing.talk()
