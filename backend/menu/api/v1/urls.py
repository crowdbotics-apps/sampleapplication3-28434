from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    CountryViewSet,
    ItemViewSet,
    ItemVariantViewSet,
    ReviewViewSet,
    CategoryViewSet,
)

router = DefaultRouter()
router.register("itemvariant", ItemVariantViewSet)
router.register("review", ReviewViewSet)
router.register("country", CountryViewSet)
router.register("item", ItemViewSet)
router.register("category", CategoryViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
