# if temperature is greater than 30, it's a hot day.
# otherwise if it's less than 10, it's a cold day
# otherwise it's neither hot or cold

temp = 30

if temp > 30:
    print("It's a hot day")
elif temp < 30:
    print("It's a cold day")
elif temp == 30:
    print("It's neither hot or cold")

# Exercise
# if name is less than 3 characters long, name must be at least 3 characters
# otherwise if it's more than 50 characters long, name can be a maximum of 50 characters
# otherwise, name looks good

name = "Muhammad Anbia Senggagau"

if len(name) < 3:
    print("Name must be at least 3 characters")
elif len(name) > 50:
    print("Name can be a maximum of 50 characters")
else:
    print("Name looks good")