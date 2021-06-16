from django import forms
from .models import UserData

#Fields passed from model and from here will be passed to the view
class UserForm(forms.ModelForm):
    class Meta:
        model = UserData
        fields = ("username","first_name","role","notif","email","last_name","profile_pic")
    pass