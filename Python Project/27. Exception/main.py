age = int(input('Age :'))
print(age)
# ketika kita memasukkan masukan yang bukan angka, seperti kalimat, maka program akan error


try:
    age = int(input('Age: ')) #Coba masukkan huruf
    uangJajan = 2000/age
    print(uangJajan)
except ValueError:
    print("Anda harus memasukkan angka")
except ZeroDivisionError:
    print("Umur tidak boleh nol")