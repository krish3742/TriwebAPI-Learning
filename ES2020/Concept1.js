function print(value) {
    let print1 = value || "Not found";
    let print2 = value ?? "Not found";
    console.log(`|| ${print1}`);
    console.log(`?? ${print2}`);
}

print(null);
print(undefined);
print(false);
print(true);
print(0);
print(1);
print("Kshitij Agrawal");
print("");
print();