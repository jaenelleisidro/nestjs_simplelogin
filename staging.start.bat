docker-compose -f docker-compose.staging.yml build
docker-compose -f docker-compose.staging.yml up -d --scale node_service=5