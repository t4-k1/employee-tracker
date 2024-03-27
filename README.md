# Employee Tracker

A command-line application built with Node.js, Inquirer, and MySQL to manage a company's employee database.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Description

Employee Tracker is a command-line application designed for business owners to easily view and manage departments, roles, and employees within their company. It provides functionality to view existing data, add new departments, roles, and employees, and update employee roles as needed. The application uses Node.js for the backend, Inquirer for collecting user input, and MySQL for database management.

## Installation

To install and run the application locally, use the following command:

```
npm install
```

Set up your MySQL database and update the `.env` file with your database credentials.
Create the database schema by executing the `schema.sql` file in your MySQL client.
Seed the database with sample data by executing the `seeds.sql` file in your MySQL client.
Run the application using the following command:

```
node index.js
```

## Usage

Once the application is running, follow the on-screen prompts to perform various operations such as viewing departments, roles, and employees, adding new data, and updating employee roles.

## Features

- View all departments, roles, and employees.
- Add new departments, roles, and employees.
- Update an employee's role.
- Simple command-line interface for easy interaction.

## Walkthrough Video

[Click Here](https://drive.google.com/file/d/1mXw5UCcrHlXZd1U8CcjKuT-2Y1X-eIkr/view?usp=sharing) to watch a video walkthrough of the app!
