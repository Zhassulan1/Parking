from functools import cmp_to_key

lat = 0
lon = 0


def compare(p1, p2):
    x1 = abs(p1['lat'] - lat)
    y1 = abs(p1['lon'] - lon)

    x2 = abs(p2['lat'] - lat)
    y2 = abs(p2['lon'] - lon)

    dist_p1 = (x1**2 + y1**2)**0.5
    dist_p2 = (x2**2 + y2**2)**0.5
    
    if dist_p1 < dist_p2:
        return -1
    elif p1['price'] < p2['price']:
        return -1
    else:
        return 1

def sort_parkings(parkings, latt, long):
    lat, lon = latt, long
    sorted_parkings = sorted(parkings, key=cmp_to_key(compare))
    print(parkings)

    return sorted_parkings
