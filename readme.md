# MongoDB Database Connection Lab

## Description

This project is a simple Node.js and Express application that connects to a MongoDB Atlas database.

The purpose of this lab was to practice setting up a MongoDB Atlas cluster and connecting it to a Node.js/Express application. The connection string is stored in an environment variable so it is not included directly in the code.

## What I Used

* Node.js
* Express
* MongoDB Atlas
* MongoDB Node.js Driver
* dotenv

## Packages Needed

Install the required packages with:

```bash
npm install express mongodb dotenv
```

If Express is already installed, you can use:

```bash
npm install mongodb dotenv
```

## Environment Setup

Create a `.env` file in the main project folder.

Add the MongoDB Atlas connection string:

```env
MONGO_URI="your_mongodb_connection_string"
```

Replace the example connection string with the connection string from your own MongoDB Atlas database.

The `.env` file should not be uploaded to GitHub because it contains the database connection information.

## .gitignore

The `.gitignore` file should contain:

```text
node_modules/
.env
```

This keeps the installed packages and private environment variables out of the GitHub repository.

## How to Run the Project

First, install the packages:

```bash
npm install
```

Then start the server:

```bash
node server.js
```

The server runs on:

```text
http://localhost:3001
```

When the database connection is successful, visiting the URL should display:

```json
{
  "message": "Successfully connected to the database!"
}
```

## Required MongoDB Setup

For this lab, MongoDB Atlas needs:

* A MongoDB Atlas project
* An M0 free cluster
* A database user with read and write permissions
* A MongoDB Atlas connection string

## Reflection Questions

### 1. Why is it important to whitelist IP addresses in a real-world production environment? What are the risks of allowing connections from anywhere (`0.0.0.0/0`)?

Whitelisting IP addresses helps control which computers or networks are allowed to connect to the database. Allowing connections from anywhere means anyone who gets the database credentials could potentially try to connect to the database. In a real production application, restricting access to known IP addresses adds another layer of security.

### 2. What is the purpose of the `dotenv` package? What other methods could you use to manage environment variables in a production environment?

The `dotenv` package loads values from a `.env` file into the application's environment variables. This allows sensitive information, such as a database connection string, to stay out of the main code. It is also good pratice to put it in a `.gitignore` file so no one else can see it and thus avoid a vulnerability.

### 3. If your application failed to connect, what are the first few steps you would take to debug the issue?

First, I would check the error message in the terminal to see what is causing the connection to fail. Then I would check that the MongoDB connection string in the `.env` file is correct, including the username and password. I would also check that the MongoDB Atlas cluster is running and that the network access settings allow my connection. Finally, I would make sure the required packages are installed and restart the server with `node server.js`.

## What I Learned

In this lab, I learned how to create a MongoDB Atlas database, create a database user, and connect a Node.js/Express application to MongoDB. 
