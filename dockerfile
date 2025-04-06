# Step 1: Build the React app
FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Step 2: Serve with `serve`
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
ENV PORT=8080
EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]
