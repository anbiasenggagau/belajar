name = ['John', 'Bob', 'Serah', 'Marry','James','Anbia']
print(name)
print(name[0])
print(name[1])
print(name[-1])
print(name[2:])
print(name[:2])
print(name[2:4])

# Mengkonfigurasi salah satu elemen index
name[0] = 'Gaforx'
print(name)

# Exercise : Buatlah program untuk menemukan posisi angka terbesar pada suatu list
angka = [5, 6, 7, 1, 9, 7, 4, 10]
index = len(angka)
i = 1
while i<index:
    if angka[i] > angka[i-1]:
        posisi = i
    i += 1
print(f"Angka terbesar berada di posisi : {posisi+1}")