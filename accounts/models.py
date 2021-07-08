from django.db import models
#importing validators
from django.core.validators import RegexValidator
from django.core.exceptions import ValidationError

# Create your models here.
class UserData(models.Model):
	#validators for alphanumeric fields
	alphanumeric = RegexValidator(r'^[0-9a-zA-Z]*$', 'Only alphanumeric characters are allowed.')
	#validator method for image file size
	def validate_image(fieldfile_obj):
		filesize = fieldfile_obj.file.size
		if filesize > 1024:
			raise ValidationError("Max file size is 1KB")

	#Fields defined with validators
	username=models.CharField(max_length=100,validators=[alphanumeric],unique=True)
	first_name=models.CharField(max_length=100,validators=[alphanumeric])
	last_name=models.CharField(max_length=100,validators=[alphanumeric])
	email=models.EmailField(max_length=100,unique=True)
	ROLE=[
		('','Role'),
		('Admin','Admin'),
		('Developer','Developer'),
		('Manager','Manager'),
		('QA','QA')
	]
	role = models.CharField(choices=ROLE,max_length=20,blank=False)
	profile_pic = models.ImageField(upload_to="profile_pictures",default='avatar.png',blank=False,validators=[validate_image])
	notif=models.BooleanField(default=True)

	def __str__(self):
		return self.email