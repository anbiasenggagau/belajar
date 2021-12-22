def greetUser(x,y):
    print('Hi there ' + x + ' ' + y)
    print('Welcome abroad')

print("Start")
greetUser("Anbia", 'Senggagau')
greetUser(y="Senggagau", x="Anbia") # Keyword Arguments
print("Finish")

def multiply(x,y):
    output = x * y
    return output

number1 = int(input('Angka Pertama: '))
number2 = int(input('Angka kedua: '))
print(multiply(number2,number1))

# Exercise : buatlah program yang berisi emoji converter
def emoji_converter(message):
    message = message.split(' ')
    dictionary = {
        ':)' : ':-)',
        ':(' : ':-('
    }
    output = ''
    for item in message:
        output = output + dictionary.get(item, item) + ' '
    return output

x = 'y'
while x == 'y':
    pesan = input('>')
    print(emoji_converter(message))
    x = input("Mau coba lagi (y or n)> ")