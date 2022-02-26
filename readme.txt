docker network create example-net


if having error in cache 
https://www.codegrepper.com/code-examples/shell/how+to+clear+docker+build+cache

# Rebuild the image
docker build --no-cache

# Pull the base images again and rebuild
docker build --no-cache --pull

# Also works with docker-compose
docker-compose build --no-cache

# If nothing from the above works for you, you could also prune everything
docker system to prune


to delete all container/image
docker container prune
docker image prune

rebuild
docker-compose build

run horizontal scaled
docker-compose up --scale node_service=5