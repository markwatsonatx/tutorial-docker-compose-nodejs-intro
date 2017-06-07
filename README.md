### Tutorials using Docker Compose

This repository contains a simple Node.js app and a Docker Compose file.
The intent of this project is to show you how to use Docker Compose to make it super easy to download, run, and experiment with tutorials.
The Docker Compose configuration maps a Docker volume to the local src folder.
This allows you to make changes in your local src folder and have them reflected in your Docker container.  

Follow these simple instructions and you'll be up and running:

```
git clone https://github.com/markwatsonatx/tutorial-docker-compose-nodejs-intro
cd tutorial-docker-compose-nodejs-intro
docker-compose up -d
```

After running `docker-compose up -d` you can access the sample application at [http://DOCKER-HOST-IP:33000/](http://localhost:33000).

You can learn more by watching the YouTube video [here](https://youtu.be/6fyKSu1cxGc).
