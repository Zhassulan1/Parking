from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.conf import settings

import json
import datetime

from api.sort_parkings import sort_parkings

from api.models import User, Parking
from api.serializers import UserSerializer, ParkingSerializer


@require_http_methods(["POST"])
@csrf_exempt
def parkings_list(request, user_id):
    lat, lon = json.loads(request.body)["user_coordinates"]
    lat, lon = int(lat), int(lon)
    print(lat, lon)

    parkings = Parking.objects.values()
    # print(parkings)
    # print(type(parkings))

    personal_list = sort_parkings(parkings, lat, lon)

    return JsonResponse({"message": "Parkings list received"})


@require_http_methods(["GET"])
@csrf_exempt
def user_balance(request, user_id):
    balance = User.objects.get(user_id=user_id).balance
    return JsonResponse({"balance": balance})


@require_http_methods(["POST"])
@csrf_exempt
def reserve(request, user_id, parking_id):
    is_parked = User.objects.get(user_id=user_id).is_parked
    if is_parked:
        return JsonResponse({"message": "User is already parked"}, status=400)
    
    hours = json.loads(request.body)["time"]

    User.objects.filter(pk=user_id).update(is_parked=True)
    User.objects.filter(pk=user_id).update(current_parking_id=parking_id)
    User.objects.filter(pk=user_id).update(started_parking=datetime.datetime.now())
    User.objects.filter(pk=user_id).update(reserved_time=hours)
    user = User.objects.get(pk=user_id)
    serializer = UserSerializer(user)

    print(serializer.data)

    return JsonResponse(serializer.data, status=200)


@require_http_methods(["GET"])
@csrf_exempt
def finish(request, user_id):
    User.objects.filter(pk=user_id).update(is_parked=False)
    User.objects.filter(pk=user_id).update(current_parking_id=None)
    User.objects.filter(pk=user_id).update(started_parking=None)
    User.objects.filter(pk=user_id).update(reserved_time=None)

    return JsonResponse({"message": "Parking finished"}, status=200)


@require_http_methods(["GET"])
@csrf_exempt
def increse(request, parking_id):
    pass


@require_http_methods(["GET"])
@csrf_exempt
def decrease(request, parking_id):
    pass