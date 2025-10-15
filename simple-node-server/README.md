# Simple Node.js Server

This project is a simple Node.js server that listens on port 8001. It uses `nodemon` for automatic code reloading during development and can be run inside a Docker container.

## Getting Started

### Prerequisites

- Node.js and Yarn installed on your machine.
- Docker installed on your machine (if you want to run the server in a container).

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd simple-node-server
   ```

2. Install the dependencies:

   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use the following command:

```
yarn start
```

The server will be running at `http://localhost:8001`.

### Running with Docker

To build and run the Docker container, use the following commands:

1. Build the Docker image:

   ```
   docker build -t simple-node-server .
   ```

2. Run the Docker container:

   ```
   docker run -p 8001:8001 simple-node-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

### License

This project is licensed under the MIT License.