def user_choice():
    choice = input("Please enter a number (1-10) : ")
    while 1:
        if choice.isdigit():
            if int(choice) > 10:
                print("Your input is out of range")
            elif 11 > int(choice) > 0:
                return int(choice)
        elif not choice.isdigit():
            print("Your input is not a number")

        choice = input("PLEASE ENTER A NUMBER (1-10) : ")


print(f"Your Input is : {user_choice()}")
