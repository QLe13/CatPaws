# CSpace

# Project Description

The goal of this project is to create a lightweight and easy to use software for class registration in a higher education setting. By restricting the scope to our client's requirements, we can create a reliable service that avoids unnecessary feature bloating. 

There are a number of existing services that we will take positive and negative inspiration from. Examples include Trinity University's TigerPaws and the Texas public-school service Skyward. However, these applications contain a number of issues that we will seek to avoid. These include:
1. Unintuitive or unattractive user interfaces.
2. Unnecessary features that either slow down the software or confuse users.
3. Other frustrating quirks like multiple navigation pages, frequently opening new tabs, and restrictive pre-requisite checking.

We are aiming to create a simple software that supports student registration instead of adding stress to an already chaotic time.

# Requirements

### Original Client Requirements:
A website that allows students to search and register for classes, administrators to add/delete classes, and students to view their current classes.

### Functional Requirements:
1. Student Registration: The system should allow students to register for classes, view their class schedules, and drop or add courses.
2. Faculty Registration: The system should allow faculty members to view their schedules, access/add/delete course information.
3. Course Management: The system should allow faculty to add classes and manage course details such as course information, location, schedule.

### Non-functional Requirements:
1. Security: The system should be secure, with authentication and authorization measures in place to prevent unauthorized access and protect sensitive data.
2. Performance: The system should be able to handle a large number of simultaneous users without performance degradation.
3. Reliability: The system should be reliable and available 24/7, with a minimum of downtime for maintenance.
4. Usability: The system should be easy to use and intuitive, with clear instructions and help resources available for users.
6. Scalability: The system should be scalable, able to handle a growing number of users and courses.

# Tech Stack

- React - Frontend for dynamic pages - [React Docs](https://react.dev/blog/2023/03/16/introducing-react-dev)
- ExpressJS - Web application framework 
- NodeJS - Server functionality
- Firebase - Backend / database management - [Firebase Docs](https://firebase.google.com/docs)

# Installation Guide

### Client

- Install [node.js](https://nodejs.org/en/)
- `cd client`
- Run `npm install` to install dependencies.
- Run `npm start` to start a local development server.

### Firebase

- Run `npm install` in the root directory of the project
- Run `npm install -g firebase-tools` to install the firebase client.
- Run `firebase login` to login to firebase.
- Run `npm run deploy` to deploy firebase project.

# User Guide

Upon opening the application, a user will see a login window. After submiting their username and password, the user will be brought to either the student interface or teacher interface. See guides for each below.

### Student User

A student user will be brought to their landing page, where they will see the classes that they are currently taking. By clicking the buttons above the table, they will be able to switch between classes for the current semester and classes for the next semester.

### Teacher User

Either Vaughan or Ty is supposed to be working on this.

# Adding Users to the System

At the moment, all users need to be manually added to the system. See guides below for adding student and teacher users.

### Adding Student User

To add a student user, navigate to the `users.json` file. Here you can manually create a new user by follow the below template:
```
{
  "uid": "[the user's id]",
  "username": "[the user's username]",
  "password": "[the user's password]",
  "classes": [ [this can be left empty. do not remove the brackets]
  ],
  "waitlisted": [
  ],
  "saved": [
  ]
},
```

# Issues We Encountered

1. Firebase install sometimes returns authorization issues. This seems to be a MacOS issue. Running `sudo install` for the package helps.
2. There seems to be conversion issues from typescript to React. This is either a Firebase or MacOS issue. Trevor Roddy knows the fix.
3. Couldn't do drop downs to hide large text blocks in our documentation. Seems to be an issue where either Github Pages or Cayman Jekyll theme doesn't translate the html formatting well.

# FAQ

1. Do we actually have anything to put here? Are there frequent situations we ran into that we could help people with?


# Modifications from the Client

### Client Meeting One
1. Could we change the color of the buttons? The greyed out buttons make them look unclickable.
2. There were others. I have them written down somewhere.

### Client Meeting Two
1. Was not present. Will have to ask Derian if he knows what questions we were asked (or feedback we received).

### Client Meeting Three
1. Will you be implementing a search bar when searching for classes?
2. It is a little unclear which tab you are currently on. Could you opt for a third color instead of blue and grey?
3. When/how does the semester change (ie current and future semester)?
4. Why have static drop down for course level? Why not just type in exact course number?
5. Can teachers enroll in classes other than their own?
6. Do teachers have entirely separate accounts?
7. Are teachers able to enroll students in their classes? Where would that happen?
8. Are there any other requirements that will need to be edited?
