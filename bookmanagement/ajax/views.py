from tkinter import PAGES
from django.shortcuts import render
from django.http import HttpResponse
from .models import *
# Create your views here.
def home(request):
    return render(request,'ajax/index.html')

def saveBook(request):
    b=Book()
    if not Book.objects.filter(bookId=int(request.GET['bookid'])):
        b.bookId=int(request.GET['bookid'])
        b.name=request.GET['name']
        b.prize=request.GET['prize']
        b.pages=request.GET['pages']
    else:
        return HttpResponse(False)
    b.save()
    return HttpResponse(True)  

def GetAllBooks(request):
    li=[]
    AllBooks=Book.objects.all()
    for b in AllBooks:
        data=BookSerializer(b)
        li.append(data.data)
    import json
    return HttpResponse(json.dumps(li));    


def deleteBook(request):
    try:
        record=Book.objects.get(bookId=int(request.GET['bookId']))
        record.delete()
        return HttpResponse(True)
    except:
        return HttpResponse(False)

