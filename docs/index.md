# CSpace

## Project Description

The objective of this project is to develop a user-friendly and efficient software solution for class registration in a higher education environment. Our focus is to deliver a lightweight and reliable service that fulfills our client's specific requirements without adding unnecessary features that can complicate the user experience.

We will draw inspiration from existing registration services such as TigerPaws from Trinity University and Skyward from Texas public schools. However, we will avoid common issues identified in these applications, such as unintuitive interfaces, feature bloat, and frustrating quirks that slow down or confuse users.

Our main goal is to create a straightforward software that simplifies the registration process and helps students navigate through their course selection with ease. We aim to reduce stress and frustration during the hectic time of class registration by providing a seamless and intuitive user experience.

## Tech Stack

- React - Dynamic user interface - [React Docs](https://react.dev/blog/2023/03/16/introducing-react-dev)
- NodeJS - Server hosting, maintenance, and advanced administration
- Firebase - Authorization, database management, and administration - [Firebase Docs](https://firebase.google.com/docs)

## Guide for Intitutions and Organizations

First, you have to create a firebase project and enable the following services:

- Authentication: Email/Password, Google
- Firestore

If you want to host the application on firebase, you also need to enable:

- Hosting

### Host with Your Own Server

- Open a terminal in the server environment you wish to use
- Install [node.js](https://nodejs.org/en/) on your server if you haven't already.
- Clone the repository to your server, i.e. `git clone https://github.com/QLe13/CatPaws.git`
- Navigate to the root directory of the project, i.e. `cd CatPaws`
- Navigate to the 'client' directory of the project, i.e. `cd client`
- Run `npm install` to install dependencies.
- Run `npm build` to build the production application.
- Use a static server of your choice to serve the application

for example, to serve with with npm `serve` on port 8580 with HTTPS:

- `npm install -g serve`
- `serve -s dist --listen 8580 --ssl-cert "/etc/ssl/certs/mycert.crt" --ssl-key "/etc/ssl/private/mykey.key"`

### Host with Firebase

- Install [node.js](https://nodejs.org/en/) if you haven't already.
- Run `npm install` in the root directory of the project
- Run `npm install -g firebase-tools` to install the firebase client.
- Run `firebase login` to login to firebase.
- Navigate to the `cspace-firebase` directory, i.e. `cd cspace-firebase`
- Replace `cspace-51bd4` in the `.firebaserc` file with your firebase project id.
- Run `npm run deploy` to deploy firebase project.

## Developer Guide

If you are developing this project for your own institution or organization, follow the same steps as above to setup your own firebase project.

If you are developing this project to make public upstream changes, you may use the pre-configured firebase project to test your changes. Please contact the project owner for necessary access to the firebase project. Once any changes are merged into the main branch, your changes will be in the next firebase deployment.

### Develop UI & Client

- Install [node.js](https://nodejs.org/en/) if you haven't already.
- Clone this repository and navigate to the root directory of the project.
- Navigate to the 'client' directory of the project, i.e. `cd client`
- Run `npm install` to install dependencies.
- Run `npm run dev` to start a local hot-reload development server.

### Deploy to Firebase

- Run `npm install` in the root directory of the project
- Run `npm install -g firebase-tools` to install the firebase client.
- Run `firebase login` to login to firebase.
- Navigate to the `cspace-firebase` directory, i.e. `cd cspace-firebase`
- Replace `cspace-51bd4` in the `.firebaserc` file with your firebase project id if you are not using the pre-configured firebase project.
- Run `npm run deploy` to deploy firebase project.

## User Guide

Upon opening the application, a user will see a login window. After submiting their username and password, or signing in via a google account, the user will be brought to either the student interface or teacher interface. See guides for each below.

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

## Administration and Management

For advanced usage, once you have made all of the changes to the files you wish to make, you can deploy the changes to firebase by following the steps below.

- Make sure you are in the `cspace-firebase` directory
- Make sure you have NodeJS and firebase-tools installed and configured
- Run `npm start` to make the changes to your firebase project

### Managing Users

- (Recommended) Add a user to firebase authentication via the firebase console, and if you do not wish to use the default user data, create an entry for the user in firestore `users` collection with the same uid.
- Advanced Usage
  - Navigate to the `cspace-firebase` directory
  - Edit the `students.json` file to manage student users, following the examples provided in the file.
  - Edit the `teachers.json` file to manage student users, following the examples provided in the file.

### Managing Semesters

- (Recommended) Add a semester to firestore `seasons` collection via the firebase console, or edit the existing semesters.
- Advanced Usage
  - Follow the example in the `seasons.json` file.
  - Note: The current semester that is displayed in the web app is determined by the `end` date in the `seasons.json` file.

### Managing Classes

- (Recommended) Add a class to firestore `classes` collection via the firebase console, or edit the existing classes.
- Advanced Usage
  - Follow the example in the `classes.json` file.
  - Edit the `main.ts` file in to manage which semesters are populated with the classes.

## Testing

[CSpace Navigation Guide and UI Testing](https://docs.google.com/document/d/112cDOXjSEEQH53L2FZ-bB3xaDKEE_CuiTwiG8daQkQ4/edit?usp=sharing)

## Frequently Encountered Issues

1. Firebase install sometimes returns authorization issues. This seems to be a MacOS issue. Running `sudo install` for the package helps.

## Project Requirements

### Original Client Requirements

A website that allows students to search and register for classes, administrators to add/delete classes, and students to view their current classes.

### Functional Requirements

1. Student Registration: The system should allow students to register for classes, view their class schedules, and drop or add courses.
2. Faculty Registration: The system should allow faculty members to view their schedules, access/add/delete course information.
3. Course Management: The system should allow faculty to add classes and manage course details such as course information, location, schedule.

### Non-functional Requirements

1. Security: The system should be secure, with authentication and authorization measures in place to prevent unauthorized access and protect sensitive data.
2. Performance: The system should be able to handle a large number of simultaneous users without performance degradation.
3. Reliability: The system should be reliable and available 24/7, with a minimum of downtime for maintenance.
4. Usability: The system should be easy to use and intuitive, with clear instructions and help resources available for users.
5. Scalability: The system should be scalable, able to handle a growing number of users and courses.

## Modifications from the Client

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

## Project Timeline

Week 1: Feb 20 - Feb 24

- Intro planning phase
- Decide on tech stack and assign team roles

Week 2: Feb 27 - March 3

- Complete login and landing page
- Differentiate student and admin users
- Specialize and split into subgroups to handle different tasks

Week 3: March 6 - 10

- Create all pages and make them navigable
- Complete the basic 'Skeleton' (pages, connections, UI) of web pages
- Develop the database

Week 4: March 13 - 17

- Finalize all pages to standards with nearly completed UI
- Clean data and populate the database with classes and user accounts

Week 5: March 20 - 24

- Focus on back end
- Implement class registration and removal
- Catch-up time for completion of prior features

Week 6: March 27 - 31

- Complete back end functionality
- Technical documentation for maintenance team, end users, and customers

Week 7: April 3 - Apr 7

- Add additional features requested during development or seen as necessary
- Final week to add features
- Begin hardcore QA testing and bug fixing as soon as features are complete

Week 8: April 17 - 21

- Polishing week
- Continue QA testing and bug fixing
- Focus on making the product the best version possible with minimal bugs and hazards
- Complete technical documentation for customer, users, and maintenance team

Week 9: April 24

- Project Deadline. Project must be completed.
- Present and handoff to maintenance team.

## Project Team

- Derian Mowen - Frontend Team
- Joshua Gammon - Documentation and UI Edits
- Lance Warden - Backend and Database
- Matvey Popov - Backend and Database
- Quang Le - Frontend and Project Functionality
- Trevor Roddy - Frontend Team
- Ty Jarrett - Teacher User Version
- Vaughan Schulte - Note Taker
