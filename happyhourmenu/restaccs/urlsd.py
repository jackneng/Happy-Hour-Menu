from rest_framework import routers
from .api import RestaccViewSet

router = routers.DefaultRouter()
router.register('api/restaurant', RestaccViewSet, 'restaurant')

urlpatterns = router.urls