FROM nginx:alpine

ENV PORT=80 \
    APP_NAME="Digital Signature App"

COPY . /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
