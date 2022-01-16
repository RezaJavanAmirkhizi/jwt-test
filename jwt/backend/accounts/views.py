
from rest_framework.generics import CreateAPIView, ListAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated

from .serializers import UserSerializer, PostSerializer
from django.contrib.auth import get_user_model
from .models import Post


User = get_user_model()


class UserRegisterationView(CreateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer
    queryset = User.objects.all()

class HomeView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = PostSerializer
    queryset = Post.objects.all()
