try:
    for item in ['a','b','c','d']:
        print(item**2)
except:
    print("You can't do the square root on a string")
print()
# =========================================================================

x = 5
y = 0
try:
    z = x/y
except:
    print("Can't do the division by zero")
finally:
    print("All done")
print()
# =========================================================================

def ask():
    while 1:
        try:
            result = int(input("Input an Integer : "))
        except:
            print("Whoops! That's not a number")
            print("I will ask you again!")
            print()
        else:
            print("Thank you for contribution")
            return result**2

print(ask())
