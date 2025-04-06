# Use an official Node.js image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Serve with a static server
RUN npm install -g serve
CMD ["serve", "-s", "dist"]

# Expose port
EXPOSE 3000
