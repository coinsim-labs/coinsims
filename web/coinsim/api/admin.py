from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Transaction)
admin.site.register(Balance)
admin.site.register(Currency)
admin.site.register(CryptoDescription)