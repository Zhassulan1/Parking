from django.contrib import admin
from .models import Parking, User

@admin.register(Parking)
class ParkingAdmin(admin.ModelAdmin):
    list_display = ('parking_id', 'address', 'is_paid', 'price', 'free_spaces', 'capacity')
    search_fields = ('address', 'map')
    list_filter = ('is_paid',)

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'name', 'email', 'balance', 'is_parked', 'current_parking_id')
    search_fields = ('name', 'email')
    list_filter = ('is_parked',)
