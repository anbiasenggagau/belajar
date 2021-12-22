# buat program yang mengconvert berat badan dari lbs ke kg dan kg ke ibs berdasarkan inputan user

weight = input("Weight: ")
weight = int(weight)
tipe = input("(L)bs or (K)g: ")


if tipe == 'l' or tipe == 'L':
    weight = weight * 0.45
    print(f"You are {weight} Kg")
elif tipe == 'k' or tipe == 'K':
    weight = weight / 0.45
    print(f"You are {weight} lbs")
else:
    print("you are typing a wrong type of weight")