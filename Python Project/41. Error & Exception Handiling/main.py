def add(n1,n2):
    print(n1 + n2)

add(20,10)

# Memiliki konsep yang seperti try & catch pada javascript
try:
    add(10, "10")
except:
    print("You are inputing a string, not a number")

# Input Validation
def askForInt():
    while 1:
        try:
            result = int(input("Please provide number: "))
        except:
            print("Whoops! That's not a number")
            print("I Will ask you Again!")
        else:
            print("Thank You")
            return result
        finally:
            print("I always run regardless the error")

print(askForInt())