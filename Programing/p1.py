print("Enter 1st number: ")
num1 = int(input())
print("Enter 2nd number: ")
num2 = int(input())
print(num1 + num2)
if num1 > num2:
    print("Person 1 is taller")
elif num2 > num1:
    print("Person 2 is taller")
else:
    print("Both are of same height")

if num1 > 0 and num2 < 10:
    print("AND")

print(range(10))

for i in range(10):
    print("Kshitij", i)

#range(1, 10) - [1,....,9]
#range(1, 10, 2) - [1,3,5,7,9]

n = 1
while(n < 10):
    print(n)
    n = n + 1

print("Break:")
for i in range(10):
    if i == 5:
        break
    print(i)

print("Continue:")
for i in range(10):
    if i == 5:
        continue
    print(i)

# List, Array
subjectMarks = [10,20,30,40,50]
print(subjectMarks)
subjectMarks.append(56)
print(subjectMarks)
subjectMarks.pop()
print(subjectMarks)
for marks in subjectMarks:
    print(marks, end = " ")