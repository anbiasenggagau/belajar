from django.contrib import admin
from . models import Product
from . models import Offer


# Register your models here.

#Mengatur tampilan tabel pada admin section
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name','price','stock')

class OfferAdmin(admin.ModelAdmin):
    list_display = ('code','discount')

#Memasukkan database product admin section
admin.site.register(Product, ProductAdmin)
admin.site.register(Offer, OfferAdmin)