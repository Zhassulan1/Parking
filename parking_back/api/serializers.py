from rest_framework import serializers

from api.models import User, Parking

class ParkingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parking
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'