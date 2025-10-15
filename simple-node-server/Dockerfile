FROM node:14

# Set the working directory
WORKDIR /app

COPY package*.json /app
RUN yarn install
EXPOSE 8001

# Command to run the server
CMD ["yarn", "start"]