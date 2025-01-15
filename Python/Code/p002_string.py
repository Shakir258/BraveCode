name = "shakir"
name2 = """shakir  
vjjlfdjgjd
jgfjsgljsd
gfjkdfjgjd
"""
print("My name is ", name)
print("My name is ", name2)
print(name[0]) 


for character in name2:
    print(character)


#string slicing 

name = "shakir"
print(name[0:4]) #n-1 including 0 not 4
print(name[0:-2]) #n-1
print(name[-4:-2]) #n-1

nm = "shakir siddiqui"
print(nm[-4:-2])

# length of string
name = "shakir"
print(len(name)) 