import math as m
from timeit import default_timer as time
def isprime(n):
    if n == 1:
        return False
    for i in range(2,m.floor(n**.5)+1):
        if n % i == 0:
            return False
    return True

def sq_cub_rev_prime(n):
    cont = 0
    x = 89
    while True:
        res = int(str(x**2)[::-1])
        if isprime(res):
            res = int(str(x**3)[::-1])
            if isprime(res):
                cont += 1
                if cont == n:
                    return x
        x += 2
start=time()
print(sq_cub_rev_prime(2))
end=time()
print(f"Demoró {end-start}")
