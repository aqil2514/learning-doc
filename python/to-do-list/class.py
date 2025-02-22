class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greeting(self):
        print(f"Halo. Saya {self.name} dan umur saya {self.age}");

person1 = Person("John", 30)
print(person1.name)  # Output: John
print(person1.age)   # Output: 30

person1.greeting()