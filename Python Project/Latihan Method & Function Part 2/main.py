def vol(rad):
    PI = 3.14
    return (4 / 3) * PI * (rad ** 3)


print(vol(2))
print()


# ==================================================================================
def ran_check(num, low, high):
    if num < high and num > low:
        return f"{num} is in the range between {low} and {high}"
    else:
        return f"{num} is not in the range between {low} and {high}"


print(ran_check(5, 2, 7))
print()


# ==================================================================================
def up_low(s):
    print(f"Original String : {s}")
    upper = 0
    lower = 0
    for item in s:
        if item.isupper() == True:
            upper = upper + 1
        else:
            lower = lower + 1
    print(f"No. of Upper case characters : {upper}")
    print(f"No. of Lower case characters : {lower}")


s = "Hello Mr. Rogers, how are you this fine Tuesday?"
up_low(s)
print()

# ==================================================================================
import numpy as np

number = [1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 5]


def unique_list(list):
    x = np.array(list)
    x = np.unique(x)
    print(x)


unique_list(number)
print()


# ==================================================================================
def multiply(numbers):
    sum = 1
    for item in numbers:
        sum = sum * item
    print(sum)


multiply([1, 2, 3, -4])
print()


# ==================================================================================
def palindrom(s):
    x = s[::-1]
    if x == s:
        print(True)
    else:
        print(False)


palindrom("helleh")
palindrom("abcba")
print()


# ==================================================================================
import string


def is_pangram(str1, alphabet=string.ascii_lowercase):
    str1 = str1.lower()
    for item in str1:
        if item in alphabet:
            alphabet = alphabet.replace(item, "")
    if len(alphabet) == 0:
        print(True)
    else:
        print(False)

is_pangram("The quick brown fox jumps over the lazy dog")
is_pangram("The quick brown")