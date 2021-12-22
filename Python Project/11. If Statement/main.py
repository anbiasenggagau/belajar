isHot = True

if isHot:
    print("You should drink a cool drink")
print("Enjoy Your Day")

isHot = False

if isHot:
    print("You should drink a cool dring")
else:
    print("Make sure you're in the warm place")
print("enjoy your day")

#fungsi else if
#else if atau elif

#Exercise, tuliskan fungsi logika mengenai diskon pembelian rumah, aoakah pembeli memiliki finansial yang baik atau tidak
price = 1000000
goodCredit = True

if goodCredit:
    payment = 0.1 * price
else:
    payment = 0.2 * price
print(f"Payment = ${price - payment}")