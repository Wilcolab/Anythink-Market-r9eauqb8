# Anythink Market Servers

This project contains two servers: a FastAPI server implemented in Python and a Node.js server. Both provide routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: Implementation of the FastAPI server with two routes for managing tasks.
- `simple-node-server/src/server.js`: Implementation of the Node.js server with the same endpoints as the Python server.
- `python-server/src/__init__.py`: Marks the `src` directory as a Python package.
- `python-server/requirements.txt`: Lists dependencies for the FastAPI server.
- `python-server/Dockerfile`: Builds the Docker image for the FastAPI server.
- `simple-node-server/package.json`: Node.js server configuration and dependencies.
- `simple-node-server/Dockerfile`: Builds the Docker image for the Node.js server.
- `docker-compose.yml`: Defines and runs both servers as Docker services.

## Migration Details

The API endpoints originally implemented in [`python-server/src/main.py`](python-server/src/main.py) have been migrated to the Node.js server in [`simple-node-server/src/server.js`](simple-node-server/src/server.js). Both servers now provide identical endpoints for managing tasks.

## Getting Started

To run both servers using Docker, follow these steps:

- Build and start the Docker containers by running:

  ```shell
  docker compose up
  ```

  This command will build the Docker images and start both containers as defined in [`docker-compose.yml`](docker-compose.yml).

- The FastAPI server will be running on port `8000`.
- The Node.js server will be running on port `8001`.

## API Routes

Both servers provide the following API routes:

- `GET /`: Returns "Hello World".
- `POST /tasks`: Adds a task to the task list. The request body should contain `{ "text": "..." }`.
- `GET /tasks`: Retrieves the task list.
