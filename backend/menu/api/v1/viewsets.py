from rest_framework import authentication
from menu.models import Country, Item, ItemVariant, Review, Category
from .serializers import (
    CountrySerializer,
    ItemSerializer,
    ItemVariantSerializer,
    ReviewSerializer,
    CategorySerializer,
)
from rest_framework import viewsets


class ItemVariantViewSet(viewsets.ModelViewSet):
    serializer_class = ItemVariantSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = ItemVariant.objects.all()


class ReviewViewSet(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Review.objects.all()


class CountryViewSet(viewsets.ModelViewSet):
    serializer_class = CountrySerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Country.objects.all()


class ItemViewSet(viewsets.ModelViewSet):
    serializer_class = ItemSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Item.objects.all()


class CategoryViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Category.objects.all()
