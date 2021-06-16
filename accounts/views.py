from django.shortcuts import render,redirect
# importing the UserForm from forms.py
from .forms import UserForm
# importing messages to display after successful form submission
from django.contrib import messages
# importing the UserData model 
from .models import UserData

def index(request):
	if request.method == "POST":
		form = UserForm(request.POST,request.FILES)
		#checking validity of data entered by user
		if form.is_valid():
			form.save()
			messages.success(request,f'Congratulations, your form has been submitted successfully!')
			return redirect('index')
	else:
		form = UserForm()
	context={'form':form,
			 'users':UserData.objects.all()
			 }
	return render(request,'index.html',context)