for item in 'Python': # iterasi dilakukan berdasarkan string 'python'
    print(item)
print()

for item in ['John','Mosh',"James"]:
    print(item)
print()

for item in ['John','Mosh',"James"]:
    for item1 in item:
        print(item1)
print()

for item in [1,2,3,4]:
    print(item)
print()

for [item1,item2] in [[1,2],[3,4],[5,6]]:
    print(item1)
    print(item2)
print()

for item in range(10):
    print(item)
print()

for item in range(5, 10, 2): #formatmya -> range(angka awal, angka sesudah terakhir, simpangan)
    print(item)
print()

# Exercise : buatlah program yang menghitung jumlah harga belanjaan
harga = [50, 20, 10, 50, 70]
total = 0

for item in harga:
    total = total + item
print(f"Total harga belanjaan adalah {total}")
print()

# Break Continue and Pass

myString = 'Sammy'

for item in myString:
    if item == 'a':
        continue
    print(item)
print()

for item in myString:
    if item == 'a':
        break
    print(item)
print()

for item in myString:
    pass # It just do nothing