# Defining a Class
class Orang():
    # Inisialisasi properthy dari sebuah class dengan menjalankan magic method __init__
    # Menambahkan value pada argument untuk meng-assign default value ketika user tidak menginputkan parameter
    def __init__(self, nama, umur=23, jenisKelamin="Pria"):
        self.nama = nama
        self.umur = umur
        self.jenisKelamin = jenisKelamin
        self.energi = 10

    def berjalan(self, langkah):
        if langkah > self.energi:
            print("tidak cukup energi untuk melakukan kegiatan ini")
            print()
            return False
        self.energi = self.energi - langkah
        print(f"{self.nama} telah berjalan sebanyak {langkah} langkah")
        print(f"Sisa energi {self.nama} adalah {self.energi} energi")
        print()

    def makan(self, porsi):
        self.energi = self.energi + 3 * porsi
        print(f"{self.nama} sudah makan sebanyak {porsi}.")
        print(f"{self.nama} sekarang memiliki {self.energi} energi")
        print()

    # Another way to assign a properthy
    testing = "testing testing terus"

    def test(self):
        print(self.testing)


# Class Inisialisasi
anbia = Orang("Anbia Senggagau")
anbia.makan(4)
anbia.berjalan(10)
anbia.berjalan(20)
anbia.test()

# Another way to assign parameter
anbia = Orang(nama="Senggagau", umur=20, jenisKelamin='Pria')
anbia.energi = 12


# Inheritance
# Dengan menggunakan syntax dibawah, class Lampung akan mewariskan seluruh method dari class Orang
class Lampung(Orang):
    def __init__(self, nama, umur, Kelamin, asal="Lampung"):
        self.asal = asal
        # Melakukan assignment variable dengan memanggil Parent Class
        # dengan begini, properthy dari Parent Class akan diwariskan
        # super artinya memanggil Base Class/Parent Class
        super(Lampung, self).__init__(nama=nama, umur=umur, jenisKelamin=Kelamin)

    def perkenalkanDiri(self):
        print(f"Hallo, nama saya {self.nama}, saya berasal dari {self.asal}")
        print(f"saya mempunyai energi sebanyak {self.energi}")
        print()

    def hobby(self):
        self.makan(2)
        print(f"{self.nama} mempunyai hobby Makan")
        print()

    # This will overide methods in Orang Class
    # Overided method only affected on the child class
    def makan(self, porsi):
        self.energi = self.energi + 10 * porsi
        print(f"{self.nama} sudah makan sebanyak {porsi}.")
        print(f"{self.nama} sekarang memiliki {self.energi} energi")
        print()


seng = Lampung("Anbia", 23, 'Pria')
seng.perkenalkanDiri()
seng.makan(10)
seng.hobby()

# You can still use the method from the Parent Class
# If you initialize it through it
anbia.makan(10)


# Special / Magic Method
class Book():
    # Magic method untuk inisialisasi masukan user
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    # Magic method apabila object dimasukkan ke dalam fungsi print
    def __str__(self):
        return f"This is a {self.title} Book, authorized by {self.author} with {self.pages} pages"

    # Magic method jika object dimasukkan ke dalam fungsi int
    def __int__(self):
        return self.pages

    # Magic method jika object dihapus
    def __del__(self):
        print(f"{self.title} Book has been deleted")

    # Magic method jika object dimasukkan de dalam fungsi len
    def __len__(self):
        return self.pages

    def _


pythonRocks = Book('Python rock', 'Jose', 120)
print(pythonRocks)
print(int(pythonRocks))
print(len(pythonRocks))
del pythonRocks

pythonRocks.pages = 10
print(pythonRocks.pages)

# Magic method biasanya terdiri dari beberapa built-in function seperti
# abs, len, del, float, bool dan lain lain
