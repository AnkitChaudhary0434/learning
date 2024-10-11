# create an empty dict. allow 4 friends to enter their favorite language as value and use key as thare names. aasume that the names are uniqe.

d = {}

name = input("enter friend name: ")
leng = input("enter language name: ")
d.update({name: leng})

name = input("enter friend name: ")
leng = input("enter language name: ")
d.update({name: leng})

name = input("enter friend name: ")
leng = input("enter language name: ")
d.update({name: leng})

name = input("enter friend name: ")
leng = input("enter language name: ")
d.update({name: leng})

print(d)