message = input(">")
words = message.split(' ')
print(words)

emojis = {
    ':)' : ':-)',
    ':(' : ':-('
}

output = ""
for item in words:
    output = output + emojis.get(item, item) + ' '
# fungsi get akan berfungsi ketika pada dictionary tidak ada key tersebut dan tidak menambahkan key apapun ke dictionary
# jika tedapat key yang dicari pada dictionary, maka string masukkan akan diabaikan

print(output)