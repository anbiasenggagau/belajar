firstName = 'John'
lastName = 'Smith'
message = firstName + ' ['+ lastName +'] is a coder'
print(message)

#Example of formatted strings
msg = f'{firstName} [{lastName}] is a coder'
print(msg)

# Another formated string
print('This is a string {}'.format('INSERTED'))
print('The {} {} {}'.format('fox','brown','quick'))
print('The {2} {0} {1}'.format('fox','brown','quick'))
print('The {1} {1} {1}'.format('fox','brown','quick'))

print()

print('The {f} {b} {q}'.format(f='fox',b='brown',q='quick'))