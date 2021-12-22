# Inisialisasi dictionary
customer = {
    "name" : "John Smith",
    "age" : 30,
    "isVerified" : True
}

print(customer["name"])
print(customer.get("name"))
print(customer.get("birthday"))
print()

customer["name"] = "Muhammad" #Mengubah value dictionary
customer['birthday'] = '31 Oct 1998' # Menambah key baru pada dictionary
print(customer.get("name"))
print(customer['birthday'])

# Exercise : buatlah program yang meminta memasukkan nomor kemudian menghasilkan luaran kalimat angka tersebut
numbers = input('Phone: ')

dictionaries = {
    '1' : "One",
    '2' : "Two",
    '3' : "Three",
    '4' : "Four"  #and so one
}

terjemahan = ""
for item in numbers:
    terjemahan = terjemahan + (dictionaries.get(item)) + " "

print(terjemahan)
