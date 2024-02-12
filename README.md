# nodejs-demo
Using Node.js, write a command line tool that consumes the first 20 even numbered TODO's in most performant way and output the title and whether it is completed or not.

# Docker build command
Navigate to the directory containing your index.js script and the Dockerfile and run the following command:

```docker build -t nodejs-demo .```

# Run the Docker container:
Run the following command to execute your index.js script within a Docker container

```docker run todo-tool```

Default it will take 20 count but you can specify your desire count by passing it with the command.

```docker run todo-tool 10```

# OR 
# Direct run the command on termial

1. clone the project to your working directory

``` git clone https://github.com/pringal/nodejs-demo.git```

2. Install npm

```npm install```

3. Run the Command

```node index.js 10```