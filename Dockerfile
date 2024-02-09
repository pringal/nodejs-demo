# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application to the working directory
COPY . .

# Specify the command to run your script when the container starts
CMD ["node", "index.js"]
