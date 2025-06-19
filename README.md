# Python Server

This project contains both a FastAPI server implemented in Python and an Express server implemented in Node.js. Both servers provide routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: Implementation of the FastAPI server with two routes for adding and retrieving tasks.
- `python-server/src/__init__.py`: Marks the `src` directory as a Python package.
- `python-server/requirements.txt`: Lists dependencies required for the FastAPI server.
- `python-server/Dockerfile`: Builds a Docker image for the FastAPI server.
- `./server.js`: Implementation of the Express server with similar routes for managing tasks.
- `./package.json`: Lists dependencies required for the Express server.
- `python-server/Dockerfile`: Builds a Docker image for the Express server.
- `docker-compose.yml`: Defines and runs multi-container Docker applications, including both servers.

## Getting Started

To run both the FastAPI and Express servers using Docker, follow these steps:

- Build and start the Docker containers by running:

  ```shell
  docker compose up
  ```

  This command will build the Docker images for both servers and start the containers defined in the `docker-compose.yml` file.

- The FastAPI server will be accessible at port `8000`.
- The Express server will be accessible at port `3000`.

## API Routes

Both servers provide the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.
- `GET /tasks`: Retrieves the task list.

You can use either server depending on your preference or requirements.
