from rest_framework import authentication
from rest_framework import exceptions
from rest_framework_simplejwt.tokens import UntypedToken
from django.contrib.auth import get_user_model

class CookieJWTAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        token = request.COOKIES.get("access_token")
        if not token:
            return None

        try:
            UntypedToken(token)  # validate token
        except Exception as e:
            raise exceptions.AuthenticationFailed("Invalid token")

        User = get_user_model()
        user_id = UntypedToken(token)["user_id"]
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            raise exceptions.AuthenticationFailed("No such user")

        return (user, None)