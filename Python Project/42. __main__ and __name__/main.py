# Main

import imported_module as p

# Ketika pertama kali source code dijalankan
# terdapat built-in variable __name__ yang terassign dengan value = __main__
print("Isi variable __name__ ketika source code dijalankan langsung : ",__name__)

# Akan tetapi, ketika sebuah source code merupakan hasil import
# Maka variable __name__ tidak lagi berisi __main__

p.func();