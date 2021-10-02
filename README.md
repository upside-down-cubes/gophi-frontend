# gophi-frontend

## Note to Gophi Team when running this

### Set up the environment (before running for the first time)

1. Install Docker
2. Open Docker
3. Open the Terminal (search for `terminal` in Mac)
4. Paste the following commands in the Terminal
```bash
docker pull alpine
docker run --name gophi -p 8080:8080 -it alpine
```
5. Now, you will see `/ #`. Type `exit` into the Terminal
6. Download `setup.sh` and `run.sh` files (from LINE)
7. Move `run.sh` and `setup.sh` into the Downloads folder
8. Paste the following commands in the Terminal:
```bash
cd Downloads
docker cp setup.sh gophi:/setup.sh
docker cp run.sh gophi:/run.sh
docker start -i gophi
```
9. You will see `/ #` again. Now paste the following command into your terminal:
```bash
chmod -R 777 ./
```
10. Type `./setup.sh` into the Terminal
11. You can type `exit` to exit   **OR**   type `./run.sh` to start the frontend
12. If you choose to do the latter, type in `localhost:8080` into your browser (**Note:** do not close the Terminal while the app is running)

### Running the the frontend

1. Open Docker
2. Open the Terminal 
3. Paste the following command in the Terminal
```bash
docker start -i gophi
```
4. Type `./run.sh` into the Terminal
5. Type in `localhost:8080` into your web browser (Note: do not close the Terminal while the app is running)

### Stopping the frontend

1. To stop the running webapp, press `Ctrl + C` in the Terminal (**Note:** Not `Command + C`)
2. You will see the `/ #` prompt again. You can then type exit


<hr/>

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
