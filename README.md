## Setup
Run `npm install -g webpack`, then run `npm install` inside this directory.

## Server
The server is the backend for the application. Users usually do not interact with the server directly, but the client talks to the
server to fetch and store data.

I'm using a lightweight JSON database, so you don't have to install a real database or anything. The database is located at `server/database.json`.
When the server is **stopped**, you can edit this file manually to add changes.

The entry point for the server is at `server/server.js`.

## Client
The client is what the user sees in their browser. This is where all the fancy UI should go.

The entry point for the client is at `client/main.js`.

Webpack compiles all the files used in the client into something called a "bundle", and places it in the directory called "dist".
Do not modify anything in `dist`, since webpack will override your changes.

## Libraries
- Vue: A MVVM framework. MVVM is similar to MVC, but uses data-binding instead of controllers. We're using it because it is stupidly simple to set up.
- Bootstrap: A CSS framework. Bootstrap is made by Twitter, and it's pretty popular.
- Axios is a JavaScript HTTP client that will help us make these REST API calls.

## Core concepts
### REST API and HTTP Verbs
The server defines something that is called a "REST API", which basically means you access data using HTTP verbs.
There are 4 main HTTP verbs: `GET`, `POST`, `PUT`, and `DELETE`. `GET` is used to retrieve a resource, and is what your browser uses when you type in a URL.
For example, `GET http://google.com` gets you the front page of Google. `POST` is used to create a new resource, `PUT` updates a resource, and `DELETE` deletes a resource.

Here are all the REST API endpoints defined by the server:

- Get all study spots
  - `GET /api/studyspot`
- Get a study spot by ID
  - `GET /api/studyspot/:id`
- Create new study spot
  - `POST /api/studyspot`
- Update study spot by ID
  - PUT /api/studyspot/:id
- Delete study spot by ID
  - `DELETE /api/studyspot/:id`

### Promises, async, await
