# Use official Node.js 18 image with Alpine for small size
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of the application
COPY . .

# Build the Next.js app (with src/app support)
RUN npm run build

# Start with a smaller runtime-only image
FROM node:18-alpine AS runner

WORKDIR /app

# Copy build output and node_modules from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose Next.js port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
