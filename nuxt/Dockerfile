FROM node:10.15.3-alpine
ENV NODE_ENV=production
ENV HOST 0.0.0.0
WORKDIR /usr/src/nuxt-blog
ADD . /usr/src/nuxt-blog
EXPOSE 5000
#此为cnpm淘宝镜像
#RUN npm config set registry https://registry.npm.taobao.org
RUN npm install
RUN npm run build
CMD ["npm", "start"]
