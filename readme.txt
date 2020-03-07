pip3 install pipenv
pipenv install django djangorestframework django-rest-knox
django-admin startproject djangoproject

python manage.py runserver

pipenv install mysqlclient

mysql -u root -p
create database restaurant;

python manage.py makemigration
python manage.py migrate

python manage.py createsuperuser --username=jack --email=jackwneng@gmail.com
(password: abc123)

python manage.py startapp users

python manage.py startapp frontend
mkdir -p ./frontend/src/components
mkdir -p ./frontend/{static,templates}/frontend

npm init -y
npm i -D webpack webpack-cli
npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react babel-plugin-transform-class-properties
npm i react react-dom prop-types

npm i redux react-redux redux-thunk redux-devtools-extension
npm i axios

npm i react-alert react-alert-template-basic react-transition-group

npm i react-router-dom