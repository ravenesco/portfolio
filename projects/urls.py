from django.urls import path
from . import views


urlpatterns = [
    path('', views.ProjectListCreate.as_view(), name="api"),
]