# Node Server

This project contains an Express.js server implemented in Node.js and a Python server. The Node server provides two routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `node-server/src/server.js`: Implementation of the Express.js server with two routes for adding and retrieving tasks.
- `node-server/src/`: Server source code directory.
- `node-server/package.json`: Lists dependencies and project metadata for the Node server.
- `node-server/Dockerfile`: Builds a Docker image for the Node server.
- `docker-compose.yml`: Defines and runs multi-container Docker applications, including both Node and Python servers.

## Getting Started

To run the servers using Docker:

- Build and start the Docker containers:

  ```shell
  docker compose up
  ```

  This command builds the Docker images and starts the containers defined in `docker-compose.yml`.

- The Express.js server will be running on port `8001`.
- The Python server will be running on port `8000`.

## API Routes

The Express.js server provides the following API routes (on port `8001`):

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.
- `GET /tasks`: Retrieves the task list.
- `/` : Hello World!