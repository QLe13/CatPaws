# CSpace

# Project Description

The objective of this project is to develop a user-friendly and efficient software solution for class registration in a higher education environment. Our focus is to deliver a lightweight and reliable service that fulfills our client's specific requirements without adding unnecessary features that can complicate the user experience.

We will draw inspiration from existing registration services such as TigerPaws from Trinity University and Skyward from Texas public schools. However, we will avoid common issues identified in these applications, such as unintuitive interfaces, feature bloat, and frustrating quirks that slow down or confuse users.

Our main goal is to create a straightforward software that simplifies the registration process and helps students navigate through their course selection with ease. We aim to reduce stress and frustration during the hectic time of class registration by providing a seamless and intuitive user experience.

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

Upon logging in, students will be directed to their landing page, which displays the classes they are currently enrolled in. They can navigate between classes for the current semester and classes for the next semester by clicking on the buttons located above the table.

There are two additional pages available for student use: "FIND CLASSES" and "REGISTRATION." From the "REGISTRATION" page, students can search for specific classes or groups of classes by using the drop-down and data entry fields. Once they have found a class or classes they want to register for, they must check the "Register" field and hit "Add to Registration List" located at the bottom of the page. This will add the selected classes to their registration list.

Once all desired classes have been added to the registration list, students can navigate to the "REGISTRATION" page to complete the registration process. To register for the classes on the list, they must check the "Register" field next to each class and hit the "Register" button at the bottom of the page.

**It's important to note that students should review their registration list carefully to ensure that the classes they have selected do not conflict with each other. Additionally, students must meet any prerequisites or eligibility requirements for the classes they wish to register for. CSpace does not have active checking for conflicts.

- For more information please see: [CSpace Navigation Guide and UI Testing](https://docs.google.com/document/d/112cDOXjSEEQH53L2FZ-bB3xaDKEE_CuiTwiG8daQkQ4/edit?usp=sharing)

### Teacher User

Upon logging in, teachers will be directed to their landing page, which displays the classes they are currently teaching and the classes they will teach next semester. To add or edit classes, teachers can navigate to the "CREATE CLASSES" and "EDIT CLASSES" pages.

On the "CREATE CLASSES" page, teachers can create a new class by interacting with the drop-down and data entry fields. They can provide all the relevant information, such as course name, course code, class schedule, and any other required details. Similarly, on the "EDIT CLASSES" page, teachers can make changes to an existing class by selecting the class they want to edit.

**Please note that teachers should double-check all the information entered before submitting it. Currently, CSpace does not offer data validation or checking, so it's crucial to ensure that all the information provided is accurate and complete.

# Adding Users to the System

At the moment, all users need to be manually added to the system. See guides below for adding student and teacher users.

### Adding Student User

To add a student user, navigate to the `users.json` file. Here you can manually create a new user by follow the below template:
```
{
  "uid": "[the user's id]",
  "username": "[the user's username]",
  "password": "[the user's password]",
  "classes": [
  ],
  "waitlisted": [
  ],
  "saved": [
  ]
},
```

### Adding Teacher User

To add a teacher user, navigate to the `faculty.json` file. Here you can manually create a new user by follow the below template:
```
{
  "uid": "[the user's id]",
  "username": "[the user's username]",
  "password": "[the user's password]",
  "classes": [
  ]
},
```

# Editing Semesters

If you would like to adjust the start and end times of your semesters, you will have to manually do so in `seasons.json` file. The current semester that is displayed in the web app is determined by the `~/client/utils.ts` function `getCurSemester` uses the `end` data in the `seasons.json` file. 

# Testing

[CSpace Navigation Guide and UI Testing](https://docs.google.com/document/d/112cDOXjSEEQH53L2FZ-bB3xaDKEE_CuiTwiG8daQkQ4/edit?usp=sharing)

# Frequently Encountered Issues

1. Firebase install sometimes returns authorization issues. This seems to be a MacOS issue. Running `sudo install` for the package helps.
2. There seems to be conversion issues from typescript to React. This is a typescript version issue (usually affecting MacOS). It can be fixed by ensuring the correct typescript version is added to the `package.json` files in both the root and client directories. See below:
```
"devDependencies": {
  "typescript": "^4.0.0"
}
```

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

# Modifications from the Client

### Client Meeting One
1. Could we change the color of the buttons? The greyed out buttons make them look unclickable.
2. How do you define and achieve efficiency?
3. Will you do a search bar? If so, how?
4. How will students "favorite" classes before registering?

### Client Meeting Two
1. UI looks good. Still concerned about the clarity of the buttons.
2. Why did you decide to remove waitlisting?
3. Are you still on schedule? What have you fallen behind on?

### Client Meeting Three
1. Will you be implementing a search bar when searching for classes?
2. It is a little unclear which tab you are currently on. Could you opt for a third color instead of blue and grey?
3. When/how does the semester change (ie current and future semester)?
4. Why have static drop down for course level? Why not just type in exact course number?
5. Can teachers enroll in classes other than their own?
6. Do teachers have entirely separate accounts?
7. Are teachers able to enroll students in their classes? Where would that happen?
8. Are there any other requirements that will need to be edited?

### Requirements Added by Client
1. Each modification to classes or schedules needs to be auditable. This should include a timestamp for anytime that a class is created or modified, a student is registered or unregistered from a class, and a user identification for who performed the change.
2. The current semester shall have a defined end (whether by date or manual), and any courses that a student is "currently" enrolled in should be moved to a history and the next semester shall start.

# Project Team
- Derian Mowen - Frontend Team
- Joshua Gammon - Documentation and UI Edits
- Lance Warden - Backend and Database
- Matvey Popov - Backend and Database
- Quang Le - Frontend and Project Functionality
- Trevor Roddy - Frontend Team
- Ty Jarrett - Teacher User Version
- Vaughan Schulte - Note Taker
