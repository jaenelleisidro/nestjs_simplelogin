docker-compose -f docker-compose.prod.yml build
docker-compose -f docker-compose.prod.yml up -d --scale node_service=10