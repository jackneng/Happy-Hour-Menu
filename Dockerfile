FROM alpine:latest

RUN apk add --no-cache python3-dev && py3-pip install --upgrade pip

RUN apk add --update npm

RUN apk add --no-cache mariadb-dev build-base openssl-dev libffi-dev

WORKDIR /app
COPY . /app

RUN pip3 --no-cache-dir install -r requirements.txt

EXPOSE 8000

# ENTRYPOINT ["python3"]
# CMD ["./happyhourmenu/manage.py runserver 0.0.0.0:8000"]