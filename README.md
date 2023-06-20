# Projects SIMPLE EXAMPLE POSTGRES REST API

This project is a REST API that provides functionality to manage projects and tasks data. It utilizes Postgres as the database with Sequelize.

The `/src` folder contains the main files and folders of the project:

## Scaffold

- `/controllers` stores the application controllers, which handle client requests and perform necessary operations.
- `/models` defines data models using Sequelize, representing the structure and behavior of the objects used in the application.
- `/routes` defines the API routes and establishes the connection between controllers and client requests.

Other important files in the project include:

- `index.js` The main entry point of the application.
- `app.js` It initializes the server and sets up the initial configuration.
- `/database/database.js` handles the database connection using Mongoose.

## Installation

1. Clone this repository on your local machine.
2. Open a terminal in the project directory.
3. Run the following command to install the dependencies:

```shell
npm install
```

Available Scripts
In the package.json file, the following scripts are defined:

- `dev`: Starts the server using Nodemon and Babel to run the src/index.js file. It's useful during development as it automatically restarts the server when changes are detected in the files.
- `start`: Starts the server using the transpiled code in the dist directory.

You can execute these scripts using the following command:

```shell
npm run <script-name>
```

## Methods

- `/projects` (GET): Retrieve a list of all projects.
- `/projects/:id` (GET): Retrieve a specific project by ID.
- `/projects/:id/tasks` (GET): Retrieve all tasks from specific project by ID.
- `/projects` (POST): Create a new project.
- `/projects/:id` (PUT): Update a project.
- `/projects/:id` (DELETE): Delete a project.

- `tasks` (GET): Retrieve all tasks for a specific project.
- `tasks/:id` (GET): Retrieve a specific task by ID for a project.
- `tasks` (POST): Create a new task for a project.
- `tasks/:id` (PUT): Update a task for a project.
- `tasks/:is` (DELETE): Delete a task

## Contributions

Contributions to this project are welcome. If you find any issues or have any suggestions, feel free to open an issue or submit a pull request on the repository.

## License

This project is licensed under the MIT License.

## Author

[ Manuel Paiva ](https://github.com/manupaiva)
