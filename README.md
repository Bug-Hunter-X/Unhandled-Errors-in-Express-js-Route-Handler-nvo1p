# Unhandled Errors in Express.js Route Handler

This repository demonstrates a common error in Express.js applications: inadequate error handling in route handlers.  The `bug.js` file shows a route that fails to handle database query errors and cases where a requested user ID is not found.  This can lead to server crashes or unexpected responses to clients.

The `bugSolution.js` file provides a corrected version of the route handler, demonstrating best practices for handling errors gracefully. This includes explicit error handling and appropriate HTTP status codes.

## How to reproduce
1. Clone this repository.
2. Navigate to the repository in your terminal.
3. Run `npm install express` to install the required dependency.
4. Run `node bug.js`.  You will observe that there is no proper response when a user id doesn't exist or when there is a database error. 
5. Run `node bugSolution.js`. You will see that this version handles errors gracefully and returns proper responses.