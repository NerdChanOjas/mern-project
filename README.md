# social media application
also includes messaging feature

# Server 
1. Controllers:
The "controllers" folder is responsible for handling the logic and behavior of your application. It contains files that define functions or methods to handle specific requests from the client-side. These functions are typically referred to as "controllers" or "handler functions" and are responsible for processing incoming requests, interacting with the models or services, and sending back appropriate responses. Controllers act as a bridge between the routes (which receive requests) and the models (which interact with the database).

2. Middleware:
The "middleware" folder contains files that define functions or pieces of middleware. Middleware functions are used to modify or enhance the behavior of requests and responses in the application. They sit between the routes and the controllers, allowing you to perform tasks such as authentication, data validation, logging, error handling, or any custom processing needed for each request. Middleware functions can be applied globally to all routes or specific to certain routes or groups of routes.

3. Models:
The "models" folder holds files that define the structure and behavior of the data entities in your application. These files typically include database schemas and models, representing the data structure and defining how data is stored, retrieved, and manipulated in the database. Models may define relationships between different entities, validation rules, and methods for performing common database operations like querying, updating, or deleting data.

4. Routes:
The "routes" folder contains files that define the API endpoints or routes for your application. Each file in this folder represents a specific resource or a group of related resources and defines the routes (URL paths) that clients can use to interact with the server. These route files typically define the HTTP methods (GET, POST, PUT, DELETE, etc.) and associate them with the corresponding controller functions. Routes handle incoming requests, validate data, and pass the requests to the appropriate controller functions to process the requests and send back responses.
