# Use an official Node.js runtime as a parent image
FROM node:22.13.0-alpine

# Install pnpm globally
RUN npm install -g pnpm@9.15.3

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Start the application using Vite
CMD ["pnpm", "run", "dev"]
