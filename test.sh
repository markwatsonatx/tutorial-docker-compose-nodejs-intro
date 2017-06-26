if [ ! -f ./docker-compose.yml ]; then
    if [ -f ./docker-compose.yaml ]; then
        mv ./docker-compose.yaml ./docker-compose.yml
    fi
fi
