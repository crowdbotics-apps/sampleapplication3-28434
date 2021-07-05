from django.contrib import admin
from .models import Order, Bill, PaymentMethod

admin.site.register(PaymentMethod)
admin.site.register(Order)
admin.site.register(Bill)

# Register your models here.
