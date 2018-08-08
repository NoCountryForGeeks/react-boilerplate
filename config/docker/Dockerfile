# build environment
FROM node:10.8.0-alpine as builder
RUN apk --no-cache update \
&& apk --no-cache add g++ make bash zlib-dev libpng-dev git \
&&  rm -fr /var/cache/apk/*

RUN wget -qO- "https://github.com/dustinblackman/phantomized/releases/download/2.1.1a/dockerized-phantomjs.tar.gz" | tar xz -C /

RUN yarn global add phantomjs-prebuilt

RUN mkdir -p /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN yarn
RUN yarn build

# production environment
FROM ekino/nginx-brotli:nightly-1.13.9-bfd2885
COPY ./config/docker/nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
