FROM python:3
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1
WORKDIR /repo
COPY . /repo
RUN pip install --upgrade pip 
RUN pip install -r requirements.txt

EXPOSE 8000
