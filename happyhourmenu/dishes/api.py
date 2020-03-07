from dishes.models import Dish
from rest_framework import viewsets, permissions, generics
from .serializers import DishSerializer

# Dish Viewset


class DishViewSet(viewsets.ModelViewSet):
    # queryset = Dish.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = DishSerializer

    def get_queryset(self):
        return self.request.user.dishes.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


# Get Dish API


class DishAPI(generics.ListAPIView):
    queryset = Dish.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = DishSerializer