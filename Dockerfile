# Use Node.js version 20.9.0 as the base image
FROM node:20.9.0

# Set the working directory within the container
# WORKDIR /app
WORKDIR /usr/src/app

# Install pnpm globally (uncomment if needed)
RUN npm install -g pnpm

# Copy only package.json and pnpm-lock.yaml (or pnpm-lock.json) files
COPY package*.json pnpm-lock.* ./


# Run pnpm install to install dependencies
RUN npx pnpm install

# COPY stack.env .env

# Copy the rest of the application code
COPY . .

# Run pnpm build to build the application
# RUN pnpm build

# Expose port 4321 (optional, depending on your use case)
# EXPOSE 80

# Set the default command to run the application
CMD ["node", "./dist/server/entry.mjs"]
# CMD ["node", "run-server.mjs"]
# CMD ["pnpm", "start"]
