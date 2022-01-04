# Renaming dengan menggunakan module os
import os

# Mengganti lokasi target folder yang ingin di-edit
os.chdir('D:\Adek\htdocs\Python Project')
# Mengambil daftar folder yang ada di folder target
listDir = os.listdir('D:\Adek\htdocs\Python Project')

# Menganti folder yang memiliki angka 30 ke atas menjadi ditambah 1
for item in listDir:
    listStr = item.split(".")
    if listStr[0].isdigit():
        no = int(listStr[0])
        if no >= 30:
            no = no + 1
        newName = f"{str(no)}.{listStr[1]}"
        # os.rename(item,newName)
        print(item)
        print(newName)
