from django.db import models

# Create your models here.
class Product(models.Model):
    # inisialisasi property dari class untuk menjadi tabel database
    name = models.CharField(max_length=255)
    price = models.FloatField()
    stock = models.IntegerField()
    image_url = models.CharField(max_length=2083)

#Exercise
class Offer(models.Model):
    code = models.CharField(max_length=8)
    discount = models.FloatField()
    description = models.CharField(max_length=100)