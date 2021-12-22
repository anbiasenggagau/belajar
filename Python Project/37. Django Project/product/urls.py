from django.urls import path
from . import views #mengimport module yang berada pada folder ini

urlpatterns = [
    path('',views.index), #ketika mengetik url product tanpa kata tambahan apapun, maka akan dibawa ke fungsi index dalam file view
    path('new/',views.new), #ketika mengetik url product dengan tambahan new, makan akan dibawa ke fungsi new dalam file view
    path('templates/',views.buy)
]