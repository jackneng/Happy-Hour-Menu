from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('dishes.urlsd')),
    path('', include('dishes.urls')),
    path('', include('restaccs.urlsd')),
    path('', include('restaccs.urls')),
    path('admin/', admin.site.urls)
]