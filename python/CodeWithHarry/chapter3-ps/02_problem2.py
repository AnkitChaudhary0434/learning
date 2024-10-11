# 2. write a program to fill in a letter template given below with name and date

# dear <|NAME|>,
# you are selected!
# <|date|>


print("answer is:")
letter = '''
dear <|NAME|>,
you are selected!
<|DATE|>
'''
print(letter.replace("<|NAME|>", "BOBBY JAAT").replace("<|DATE|>", "16 sep"))