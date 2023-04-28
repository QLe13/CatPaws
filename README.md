# CSpace

## Development

### Client

- Install [node.js](https://nodejs.org/en/)
- Clone the "CatPaws" Repository and navigate to the root directory
- Run `cd client` to navigate to the client directory of the project
- Run `npm install` to install dependencies
- Run `npm run dev` to start a local development server

### firebase

- Run `npm install` in the root directory of this project
- Run `npm install -g firebase-tools` to install the Firebase cli
- Run `firebase login` to login to Firebase
- Navigate to the directory by running `cd cspace-firebase`
- Replace `cspace-51bd2` in the `.firebaserc` file with your firebase project file ID if you are not using the pre-configured Firebase project
- Run `npm run deploy` to deploy Firebase project
