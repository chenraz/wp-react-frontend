# Wordpress React Frontend

Based on https://github.com/postlight/headless-wp-starter/tree/master/frontend

## Install

The docker wordpress container must be running first.

### For development:
    sudo yarn
    sudo yarn dev

### For production:
    sudo yarn
    sudo yarn build
    sudo yarn start

The app will be running at http://localhost:3000

## Stop the server

Check which process is listenning:

    sudo lsof -i:3000

Kill that process:

    sudo kill -9 $(sudo lsof -t -i:3000)




