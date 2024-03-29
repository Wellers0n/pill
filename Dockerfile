FROM node:18

EXPOSE 3000

EXPOSE 3001

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY yarn*.lock ./

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Install app dependencies
RUN yarn

CMD [ "yarn", "dev" ]