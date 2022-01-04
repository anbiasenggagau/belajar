from pathlib import Path

path = Path("ecommerce")
print(path.exists()) # mengecek apakah folder ecommerce ada

# path = Path("emails")
# print(path.mkdir()) # membuat folder baru bernama "emails"
# print(path.rmdir()) # menghapus folder bernama "emails"

path = Path()
for item in path.glob('*'):
    print(item)

# Syntax untuk method glob, nama-file.extension-file
# contohnya : *.py ; *.xlx ; test.*
# bintang berarti semua
# * = semua jenis file dan termasuk folder
# *.* = semua jenis file kecuali folder