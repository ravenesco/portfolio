from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    technology = models.CharField(max_length=120, blank=True, null=True)
    image = models.CharField(max_length=200, null=True, blank=True, default='default.jpg')
    image_thumbnail = models.CharField(max_length=200, null=True, blank=True, default='thumbnail_default.jpg')
    link = models.CharField(max_length=200, blank=True, null=True)
