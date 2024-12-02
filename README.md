# Full Cycle Node.js Application with Nginx and MySQL

This project is a demonstration of using **Docker** to set up a Node.js application with Nginx as a reverse proxy and MySQL as the database. The main goal is to practice the use of Nginx as a reverse proxy, where requests to Nginx are forwarded to a Node.js application. The Node.js application adds a record to a MySQL database, registering a name in the `users` table. The response from the Node.js application to Nginx should be:

```
<h1>Full Cycle Rocks!</h1>
```

Along with a list of names registered in the database.

## Project Structure

- **docker-compose.yml**: The primary configuration file for setting up the **Docker** environment and orchestrating the application's services.
- **mysql**: Contains the `init.sql` file for initializing the MySQL database.
- **nginx**: Contains the `nginx.conf` file for configuring the Nginx web server.
- **node**: Contains the Node.js application, including the `Dockerfile` for building the application's **Docker** image, `package.json` for dependencies, and the `src` directory for source code.

## Getting Started

To run the application, ensure you have **Docker** and **Docker Compose** installed on your machine. Then, execute the following command in the root directory of the project:

```bash
docker-compose up -d
```

This command will build and start all the services defined in the `docker-compose.yml` file. The application will be available on port `8080`.

## Development Environment

For development purposes, ensure that a volume is set up for the Node.js application to allow for live code updates without rebuilding the **Docker** image.

## Accessing the Application

Once the services are up and running, you can access the application by navigating to `http://localhost:8080` in your web browser. You should see the message "Full Cycle Rocks!" along with the list of names from the database.

## Technologies Used

- **Docker**: For containerization and orchestration of services.
- **Node.js**: The main programming language for the application.
- **Nginx**: Used as a reverse proxy to forward requests to the Node.js application.
- **MySQL**: The database used to store registered names.

## Conclusion

This project demonstrates the integration of **Docker**, Node.js, Nginx, and MySQL to create a simple web application. It highlights the use of Nginx as a reverse proxy and the ease of setting up a development environment using **Docker Compose**.