# TriwebAPI Internship
This folder consist my project - User Registration(Basic_NodeJS_Project), using Node.js, Express.js, Sequelize.

[![Status](https://img.shields.io/badge/status-active-success.svg)](https://github.com/krish3742/TriwebAPI-Learning/) [![GitHub Issues](https://img.shields.io/github/issues/krish3742/TriwebAPI-Learning.svg)](https://github.com/krish3742/TriwebAPI-Learning/issues) [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/krish3742/TriwebAPI-Learning.svg)](https://github.com/krish3742/TriwebAPI-Learning/pulls) [![CCO License](https://img.shields.io/badge/license-CCO-yellow.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

## Table of Contents

 - Features
 - How to use
 - Acknowledgements
 - Authors

## Features

In this project, I have made a User Registration Project. 

It's working is:
1. Add the user to the database
2. Find the user from the database
3. Update the users in the database
4. Delete any user from the database

## How to use

1. Clone the project
```bash
  git clone <link>
```
2. Install the packages
```bash
  npm install --save
```
3. Create the database (MYSQL Workbench)
```bash
  Create database userdata;
```
4. Use the database
```bash
  Use database userdata;
```
5. Create the table
```bash
  Create table users(
    id integer primary key auto_increment,
    name varchar(20),
    email varchar(20),
    password varchar(20),
    remarks varchar(20),
    createdAt timestamp default current_timestamp,
    updatedAt timestamp default current_timestamp
);
```
6. Run the app.js
```bash
  node app.js
```
7. Using Postman app, perform CRUD operation (Endpoints are given below)

- Create
```bash
  localhost:3000/user/register
```
   - Read
```bash
  localhost:3000/user/get
```
  - Update
```bash
  localhost:3000/user/update
```
   - Delete
```bash
  localhost:3000/user/delete
```

## Acknowledgements

A big thanks to the TriwebAPI team for helping me in this project.

## Authors
- Kshitij Agrawal
