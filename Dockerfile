FROM nginx:alpine

ENV PORT=80 \
    APP_NAME="Digital Signature App"

COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
