call createnetwork.bat
docker-compose build
docker-compose up --build --remove-orphans -d --scale node_service=2