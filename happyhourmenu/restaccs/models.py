from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Restacc(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)

    restaurant = models.CharField(max_length=100)
    address = models.CharField(max_length=500)
    phone = models.CharField(max_length=13)
    website = models.CharField(max_length=500)
    pic = models.CharField(max_length=500, blank=True)

    def __str__(self):
        return self.restaurant