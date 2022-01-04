def lbs_to_kg(weight):
    return weight * 0.45


def kg_to_lbs(weight):
    return weight/0.45

def find_max(number=[None]):
    if number[0] != None:
        max = number[0]
        for item in number:
            if item > max:
                max = item
        return max
    else:
        return "Tidak ada angka pada list"