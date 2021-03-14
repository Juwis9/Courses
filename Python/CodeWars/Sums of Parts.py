def parts_sums(ls):
    res = [sum(ls)]
    for x in ls:
        res.append(res[-1]-x)
    return res

ls = [1,2,3,4,5,6]
print(parts_sums(ls))