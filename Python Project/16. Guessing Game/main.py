# Buat program yang meminta user untuk menebak angka rahasia dengan 3 kesempatan menebak.



JumlahTebakan = 0
while JumlahTebakan < 3:
    angka = int(input("Number: "))
    if angka == 9:
        print("Jawaban anda benar")
        break
    else:
        print("Jawaban anda salah, silahkan coba lagi")
    JumlahTebakan = JumlahTebakan + 1
else:
    print("Anda gagal")
