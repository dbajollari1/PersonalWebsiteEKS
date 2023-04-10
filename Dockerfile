# Stage 1: Compile and Build angular codebase
# Use official node image as the base image
FROM node:16 as build
# Set the working directory
WORKDIR /usr/local/app
# Add the source code to app
COPY ./ /usr/local/app/
# Install all the dependencies
RUN npm install
# Generate the build of the application
RUN npm run build
ENV Mail_API_URL = "a18db8acf06f6470b81d777e99a7454d-1885751604.us-east-1.elb.amazonaws.com"
# Stage 2: Serve app with nginx server


# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
#Copy ci-dashboard-dist
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
#Copy default nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf  

# Expose port 80
EXPOSE 80