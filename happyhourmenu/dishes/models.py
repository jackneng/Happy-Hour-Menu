from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Dish(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField(max_length=50)
    time = models.CharField(max_length=500)
    created_date = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        User, related_name="dishes", on_delete=models.CASCADE, null=True)