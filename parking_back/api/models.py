from django.db import models

# Create your models here.

    # "parking_id": 4,
    # "map": "string",
    # "address": "Adress SDU",
    # "is_paid": true,
    # "price": 200.00,
    # "free_spaces": 15,
    # "capacity": 50


class Parking(models.Model):
    parking_id = models.IntegerField(primary_key=True)
    map = models.TextField()
    address = models.TextField()
    lat = models.FloatField()
    lon = models.FloatField()
    is_paid = models.BooleanField()
    price = models.DecimalField(max_digits=7, decimal_places=2)
    free_spaces = models.IntegerField()
    capacity = models.IntegerField()



class User(models.Model):
    user_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    balance = models.DecimalField(max_digits=7, decimal_places=2, default=0)
    is_parked = models.BooleanField(default=False)
    current_parking_id = models.IntegerField(null=True)
    started_parking = models.DateTimeField(null=True)
    reserved_time = models.IntegerField(null=True)

