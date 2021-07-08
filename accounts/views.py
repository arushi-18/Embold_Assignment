from django.shortcuts import render,redirect
# importing the UserForm from forms.py
from .forms import UserForm
# importing messages to display after successful form submission
from django.contrib import messages
# importing the UserData model 
from .models import UserData
import json

def index(request):
	if request.method == "POST":
		form = UserForm(request.POST,request.FILES)
		#checking validity of data entered by user
		if form.is_valid():
			'''with open('static/js/users.json', mode='r', encoding='utf-8') as feedsjson:
				feeds = json.load(feedsjson)
			with open('static/js/users.json', mode='w', encoding='utf-8') as feedsjson:
				un=form.cleaned_data.get('username')
				fn=form.cleaned_data.get('first_name')
				ln=form.cleaned_data.get('last_name')
				em=form.cleaned_data.get('email')
				rl=form.cleaned_data.get('role')
				pp=form.cleaned_data.get('profile_pic')
				entry = {'username':un,'first_name': fn, 'role': rl,'email':em,'last_name':ln,'image':pp}
				feeds.append(entry)
				json.dump(feeds, feedsjson)
			form.save()'''
			messages.success(request,f'Congratulations, your form has been submitted successfully!')
			return redirect('index')
	else:
		form = UserForm()
	context={'form':form,
			 'users':UserData.objects.all()
			 }
	return render(request,'index.html',context)