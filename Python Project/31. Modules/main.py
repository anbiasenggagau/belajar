import test #mengimport seluruh code
from test import kg_to_lbs #hanya mengimport 1 bagian fungsi

print(kg_to_lbs(70))    #syntax jika hanya mengimport 1 fungsi saja
print(test.lbs_to_kg(70)) #syntax jika mengimport seluruh code
print()
print()

# Exercise : buatlah program ini menjadi module
numbers = [10,3,6,2,88,312,746,784,215,878]
max = numbers[0]
for item in numbers:
    if item > max:
        max = item
print(max)
print()
print()

print(test.find_max())

# Catatan : terdapat beberapa fungsi built-in contohnya fungsi "max"
# ketika kita mendefine variable "max", maka fungsi tersebut tidak bisa dipanggil lagi
# pastikan untuk menggunakan nama variable yang tidak sama dengan fungsi built-in