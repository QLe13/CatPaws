const admin = require('firebase-admin');
const { initializeApp } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const { getFirestore } = require('firebase-admin/firestore');
// service account key
const serviceAccount = require("../cspace-51bd4-9fa84e8e1f8a.json");
const app = initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = getFirestore(app);
const auth = getAuth(app);

async function main() {
    // setup users
    const teachers_json = require('./faculty.json');
    const students_json = require('./users.json');
    const users = db.collection('users');
    for (const student of students_json) {
        const { uid, username, password, classes, waitlisted, saved } = student;
        await auth.createUser({ uid, email: username + '@example.com', password, displayName: username }).catch((error) => {
            console.error('Error creating new user: ', error);
        });
        await users.doc(uid).set({
            isTeacher: false,
            canRegister: true,
            specialRegister: false,
            classes,
            waitlisted,
            saved
        }).catch((error) => {
            console.error('Error creating new user: ', error);
        });
    }
    for (const teacher of teachers_json) {
        const { uid, username, password, classes } = teacher;
        await auth.createUser({ uid, email: username + '@example.com', password, displayName: username }).catch((error) => {
            console.error('Error creating new user: ', error);
        });
        await users.doc(uid).set({
            isTeacher: true,
            canRegister: false,
            specialRegister: false,
            classes,
            waitlisted: [],
            saved: [],
        }).catch((error) => {
            console.error('Error creating new user: ', error);
        });
    }

    // setup seasons
    const seasons = db.collection('seasons');
    const seasons_json = require('./seasons.json');
    for (const [name, data] of Object.entries(seasons_json)) {
        await seasons.doc(name).set(data).catch((error) => {
            console.error('Error creating new semester: ', error);
        });
    }

    // setup courses
    // TODO

    // setup classes
    // TODO
}

main();
