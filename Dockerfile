# Stage 1: Compile and Build angular codebase
# Use official node image as the base image
FROM node:16 as build
# Set the working directory
WORKDIR /usr/src/app
# Add the source code to app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
# Generate the build of the application
RUN npm run build
ENV Mail_API_URL = "a18db8acf06f6470b81d777e99a7454d-1885751604.us-east-1.elb.amazonaws.com"

# Stage 2: Serve app with nginx server
FROM nginx:1.23.2-alpine
#Copy default nginx configuration
COPY ./nginx.conf /etc/nginx/nginx.conf
# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/src/app/dist /usr/share/nginx/html 

# Expose port 80
EXPOSE 80