from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        exclude = [
            # "password",
            "last_login",
            "date_joined",
            "groups",
            "user_permissions",
        ]

    def validate(self, attrs):
        from django.contrib.auth.password_validation import validate_password # doğrulama
        from django.contrib.auth.hashers import make_password # şifreleme
        password = attrs["password"] # password al
        validate_password("password") # validationdan geçir
        attrs.update(
            {
                "password": make_password(password) # Password Şirele ve Güncelle
            }
        )
        return super().validate(attrs) # Orjinal methou çalıştır