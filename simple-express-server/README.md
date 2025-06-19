# Simple Express Server

This project is a simple Express server that listens on port 8001. It is designed to demonstrate the basic setup of an Express application with Docker support.

## Project Structure

```
simple-express-server
├── src
│   └── server.js        # Entry point of the application
├── Dockerfile           # Dockerfile to build the application image
├── package.json         # NPM configuration file
├── yarn.lock            # Dependency lock file
└── README.md            # Project documentation
```

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have the following installed:

- Node.js
- Yarn
- Docker

### Running the Server Locally

1. Install the dependencies:

   ```
   yarn install
   ```

2. Start the server using nodemon:

   ```
   yarn start
   ```

The server will be running on `http://localhost:8001`.

### Building and Running with Docker

1. Build the Docker image:

   ```
   docker build -t simple-express-server .
   ```

2. Run the Docker container:

   ```
   docker run -p 8001:8001 simple-express-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

## License

This project is licensed under the MIT License.