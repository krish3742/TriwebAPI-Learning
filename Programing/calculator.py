import os

def add(num1, num2):
    return (num1+num2)

def subtract(num1, num2):
    return num1-num2

def multiply(num1, num2):
    return num1*num2

def divide(num1, num2):
    return num1/num2

while True:
    os.system('cls')
    print("Enter 1 for addition")
    print("Enter 2 for substraction")
    print("Enter 3 for multiplication")
    print("Enter 4 for division")
    print("Enter 5 to exit")
    fun = int(input("Enter your choice: "))
    if fun == 5:
        break
    num1 = int(input("Enter 1st number: "))
    num2 = int(input("Enter 2nd number: "))
    if fun == 1:
        print(add(num1, num2))
    elif fun == 2:
        print(subtract(num1, num2))
    elif fun == 3:
        print(multiply(num1, num2))
    elif fun == 4:
        print(divide(num1, num2))
    input("Press enter to continue...")
    