import os
import random
import shutil

'''
print(path)
f = open('practice.txt','w+')
f.write('This is a test string number 4\n')
f.close()
'''

# Get Current File Directory Path
print(os.getcwd())
print(os.listdir())
print(os.listdir('D:\\Adek'))

currentDir = os.getcwd()

# Memindahkan suatu file ke folder lain
# shutil.move(currentDir+"\\practice.txt",'D:\\Adek\\htdocs')


print(os.listdir('D:\\Adek\\htdocs'))
# shutil.move('D:\\Adek\\htdocs\\practice.txt',currentDir)
print(os.listdir())
print()

# pada module os, tedapat method untuk menghapus file,
# akan tetapi method tersebut akan langsung menghapus secara permanen
# Oleh karena itu, disarankan untuk menggunakan module send2trash
# yang dimana akan melakukan penghapusan ke recycle bin

import send2trash

# send2trash.send2trash('practice.txt')

# os walk berguna untuk melakukan scanning seluruh file dan folder dari Parent Folder yang kita tentukan
listPath = list(os.walk(currentDir))

for parentFolder, subFolder, file in listPath:
    print(f"Parent Folder : {parentFolder} \n Sub Folder : {subFolder} \n  File In Parent Folder : {file}")
    print()

f = open('sql.txt','w+')
for item in range(1000000):
    f.write(f'\nINSERT INTO "DummyDataBase"(random) VALUES({random.randint(0,100)});')
    print(f"Row : {item+1}")
f.close()