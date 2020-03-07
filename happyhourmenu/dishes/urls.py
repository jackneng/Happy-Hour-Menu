from django.urls import path, include
from .api import DishAPI

urlpatterns = [
    path('api/menus', DishAPI.as_view())
]