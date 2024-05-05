from api.views import *
from django.urls import path, re_path

urlpatterns = [
    path('user/<int:user_id>/parkings/', parkings_list),
    path('balance/user/<int:user_id>/', user_balance),
    path('user/<int:user_id>/reserve/<int:parking_id>', reserve),
    path('user/<int:user_id>/finish/', finish),
    path('increase/<int:parking_id>', increse),
    path('decrease/<int:parking_id>', decrease),
]