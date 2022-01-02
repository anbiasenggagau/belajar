def lesser_of_two_evens(num):
    if num[0]%2 == 0 and num[1]%2 == 0:
        print(min(num))
    else:
        print(max(num))

lesser_of_two_evens([2,4])
lesser_of_two_evens([2,5])
print()
# ===============================================================================

def animal_crakers(text):
    textList = text.split(' ')
    if textList[0][0] == textList[1][0]:
        print(True)
    else:
        print(False)

animal_crakers("Levelheaded Llama")
animal_crakers("Crazy Kangaroo")
print()
# ===============================================================================

def makes_twenty(a,b):
    if a+b==20 or a == 20 or b == 20:
        return True
    else:
        return False

print(makes_twenty(20,10))
print(makes_twenty(12,8))
print(makes_twenty(2,3))
print()
# ===============================================================================

def old_macdonald(nama):
    text = ""
    text = text + nama[0].upper()
    text = text + nama[1:3]
    text = text + nama[3].upper()
    text = text + nama[4:]
    print(text)

old_macdonald("macdonald")
print()
# ===============================================================================

def master_yoda(text):
    text = text.split(' ')
    text.reverse()
    result = " ".join(text)
    print(result)

master_yoda("I am home")
master_yoda("We are ready")
print()
# ===============================================================================

def almost_there(n):
    if (n >= 90 and n<=110) or (n >= 190 and n<=210):
        print(True)
    else:
        print(False)

almost_there(90)
almost_there(104)
almost_there(150)
almost_there(209)
print()
# ===============================================================================

def has_33(number):
    for index, item in enumerate(number):
        if(index+1 == len(number)):
            return False
        if item == 3 and number[index+1] == 3:
            return True


print(has_33([1,3,3]))
print(has_33([1,3,1,3]))
print(has_33([3,1,3]))
print(has_33([2,5,4,1,3,4,3,3,5,6]))
print()
# ===============================================================================

def blackjack(number):
    # number = [5,6,7]
    result = sum(number)
    if result <= 21:
        print(result)
    elif result > 21 and 11 in number:
        print(result - 10)
    else:
        print("BUST")

blackjack([5,6,7])
blackjack([9,9,9])
blackjack([9,9,11])
print()
# ===============================================================================

def summer_69(number):
    summ = 0
    for index,item in enumerate(number):
        if item == 6 and number[index + 1] == 9:
            summ += sum(number[index + 2:])
            break
        elif item == 6:
            return summ
        else:
            summ += item
        # print(summ)
    return summ

print(summer_69([1,3,5]))
print(summer_69([4,5,6,7,8,9]))
print(summer_69([2,1,6,9,11]))
print()
# ===============================================================================

def spy_game(nums):
    result = []
    for item in (nums):
        if item == 0 or item == 7:
            result.append(str(item))
    result1 = ''.join(result)
    return result1 == "007"

print(spy_game([1,2,4,0,0,7,5]))
print(spy_game([1,0,2,4,0,5,7]))
print(spy_game([1,7,2,0,4,5,0]))
print()
# ===============================================================================

