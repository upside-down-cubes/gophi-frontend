# gophi-frontend

## Note to Gophi Team when running this

### Running for the first time

1. Install Docker
2. Open Docker
3. Open the Terminal (search for `terminal` in Mac)
4. Paste the following commands in the Terminal
```bash
docker pull alpine
docker run --name gophi -p 8080:8080 -it alpine
```
5. Now, you will see `/ #`. Type `exit` into the Terminal
7. Download `setup.sh` and `run.sh` files (from LINE)
8. Go to the same directory (folder) that `setup.sh` and `run.sh` are in (type `cd [path to file]` into the Terminal)
9. Paste the following commands in the Terminal
```bash
docker cp setup.sh gophi:/setup.sh
docker cp run.sh gophi:/run.sh
docker start -i gophi
```
10. Type `chmod -R 777 ./`
11. Type `./setup.sh` into the Terminal

### Running for every other time

1. Open the Terminal 
2. Paste the following command in the Terminal
```bash
docker start -i gophi
```
2. Type `./run.sh` into the Terminal

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
