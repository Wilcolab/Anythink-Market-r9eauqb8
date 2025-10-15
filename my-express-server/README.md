# My Express Server

This is a simple Express server project that listens on port 8001. It is set up to use `nodemon` for automatic code reloading during development.

## Project Structure

```
my-express-server
├── src
│   └── app.js          # Entry point of the application
├── package.json        # Project configuration and dependencies
├── yarn.lock           # Dependency version locking
├── Dockerfile          # Instructions to build the Docker image
├── .dockerignore       # Files to ignore when building the Docker image
├── .gitignore          # Files to ignore in Git
└── README.md           # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-express-server
   ```

2. Install dependencies using Yarn:
   ```
   yarn install
   ```

3. Start the server with automatic reloading:
   ```
   yarn start
   ```

The server will be running on `http://localhost:8001`.

## Docker

To build and run the Docker container, use the following commands:

1. Build the Docker image:
   ```
   docker build -t my-express-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 my-express-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.