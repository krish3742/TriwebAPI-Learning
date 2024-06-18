for x in range(5):
    for y in range(x+1):
        print("*", end = " ")
    print()

print()

i = 1
while i <= 5:
    j = 1
    while j <= i:
        print("*", end = " ")
        j += 1
    print()
    i += 1

print()

i = 5
while i >= 1:
    j = 1
    while j <= i:
        print("*", end= " ")
        j += 1
    print()
    i -= 1

print()

i = 1
gap = 3
number = 1
while i <= 10:
    j = 1
    while j <= number:
        print("*", end= " ")
        j += 1
    number += gap
    if gap == 3:
        gap = -1
    else:
        gap = 3
    i += 1
    print()

print()

#     *
#   * * *
# * * * * *

i = 1
while i <= 3:
    j = 1
    while j <= 3-i:
        print(" ", end= " ")
        j += 1
    k = 1
    while k < (2*i):
        print("*", end = " ")
        k += 1
    print()
    i += 1

print()

# Recursion

def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n-1)

print(factorial(5))