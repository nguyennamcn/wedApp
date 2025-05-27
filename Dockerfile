FROM node:18-alpine

# Tạo thư mục app
WORKDIR /app

# Cài serve (serve static files)
RUN npm install -g serve

# Copy build files
COPY build /app/build

# Expose cổng 3000
EXPOSE 3000

# Chạy app
CMD ["serve", "-s", "build", "-l", "3000"]
