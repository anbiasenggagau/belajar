#Menghitung umur berdasarkan inputan tahun lahir
BirthYear = input('Birth year: ') #fungsi input akan selalu berjenis string walaupun kita memasukkan integer
print(type(BirthYear)) #Memerika tipe data
age = 2021 - int(BirthYear)
print(type(age))
print(age)

#Note : Beberapa fungsi perubahan tipe data dari suatu variable
float()
bool()
str()
int()

#Exercise : Ask a user their weight (In pounds), convert it to kilogram and print on terminal
WeightLbs = input('What is your weight? ')
WeightKg = int(WeightLbs) * 0.45
print("Your weight is " + str(WeightKg) + ' kg')
