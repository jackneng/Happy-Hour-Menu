from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from restaccs.models import Restacc

# User Serializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

# Restacc Serializer


class RestaccSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restacc
        fields = ('user', 'restaurant', 'address', 'phone', 'website', 'pic')


# Register Serializer


class RegisterSerializer(serializers.ModelSerializer):
    restacc = RestaccSerializer()

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'restacc')
        extra_kwargs = {'passward': {'write_only': True}}

    def create(self, validated_data):
        restacc_data = validated_data.pop('restacc')
        user = User.objects.create_user(
            validated_data['username'], validated_data['email'], validated_data['password'])
        Restacc.objects.create(user=user, **restacc_data)

        return user

# Login Serializer


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")