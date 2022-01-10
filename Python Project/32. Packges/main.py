# Package adalah kumpulan method atau function yang kita assign secara mandiri di file terpisah
# Untuk membuat folder package, folder tersebut harus mempunyai file bernama __init__.py
# Untuk memberitahu bahwa pada folder tersebut merupakan folder python package

# Berikut merupakan beberapa cara menggunakan package

import ecommerce.shipping
ecommerce.shipping.calc_shipping()

from ecommerce import shipping
shipping.calc_shipping()

from ecommerce.shipping import calc_shipping
calc_shipping()