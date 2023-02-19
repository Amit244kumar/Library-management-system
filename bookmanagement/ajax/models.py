from django.db import models

# Create your models here.
class Book(models.Model):
    name=models.CharField(max_length=100)
    prize=models.IntegerField()
    pages=models.IntegerField()
    bookId=models.IntegerField(primary_key=True,default=True)
    
from rest_framework import serializers

class BookSerializer(serializers.Serializer):
    name=serializers.CharField(max_length=100)
    prize=serializers.IntegerField()
    pages=serializers.IntegerField()
    bookId=serializers.IntegerField()