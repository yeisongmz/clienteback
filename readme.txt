
## para ejecutar mongo con docker antes instalar docker engine

# descargar la imagen oficial de mongo
docker pull mongo

# instalar mongo con docker
docker run -d -p 27017:27017 --name mydatabase mongo



# en desarrollo para compilar la nueva imagen con los cambios
sudo docker build -t clienteback . 

# bajar la imagen actual

docker stop clienteback

# subir nueva imagen 
docker run --rm -d  -p 5000:5000/tcp --name clienteback clienteback:latest 

