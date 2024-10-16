# Step 1: Build the app
FROM node:18-alpine AS build
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files and build the Next.js app
COPY . .
RUN npm run build

# Step 2: Serve the built app with a lightweight server
FROM node:18-alpine AS runner
WORKDIR /app

# Copy the built files from the previous stage
COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

# Expose port 3000
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]