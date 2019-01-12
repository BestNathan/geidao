FROM node

ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN mkdir /app
WORKDIR /app

COPY ./package*.json /app/

RUN npm install

COPY . /app/

CMD [ "node", "index" ]