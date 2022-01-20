def create_cubes_old(n):
    result = []
    for i in range(n):
        result.append(i ** 3)
    return result


def create_cubes(n):
    for i in range(n):
        yield i ** 3


# dengan menggunakan yield, kita dapat melakukan efisiensi memory dan menghasilkan hasil yang sama


numberListOld = create_cubes_old(10)
numberList = list(create_cubes(10))

print(f"Hasil Fungsi pertama \t: {numberListOld}")
print(f"Hasil Fungsi Kedua \t\t: {numberList}")
print()


def gen_fibon(n):
    a = 1
    b = 1
    for i in range(n):
        yield a
        a, b = b, a + b

fibonNumber = list(gen_fibon(10))

print(f"Hasil Fungsi Fibonaci \t: {fibonNumber}")
print()

def simple_gen():
    for item in range(3):
        yield item
        


