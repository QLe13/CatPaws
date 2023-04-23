const admin = require('firebase-admin');
const { initializeApp } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const { getFirestore } = require('firebase-admin/firestore');
// service account key
const serviceAccount = require("../cspace-51bd4-9c0a63be7d7f.json");
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
        /* await auth.createUser({ uid, email: username + '@example.com', password, displayName: username }).catch((error) => {
            console.error('Error creating new user: ', error);
            throw error;
        }); */
        await users.doc(uid).set({
            isTeacher: false,
            canRegister: true,
            specialRegister: false,
            classes,
            waitlisted,
            saved
        }).catch((error) => {
            console.error('Error creating new user: ', error);
            throw error;
        });
    }
    for (const teacher of teachers_json) {
        const { uid, username, password, classes } = teacher;
        /* await auth.createUser({ uid, email: username + '@example.com', password, displayName: username }).catch((error) => {
            console.error('Error creating new user: ', error);
            throw error;
        }); */
        await users.doc(uid).set({
            isTeacher: true,
            canRegister: false,
            specialRegister: false,
            classes,
            waitlisted: [],
            saved: [],
        }).catch((error) => {
            console.error('Error creating new user: ', error);
            throw error;
        });
    }

    // setup seasons
    const seasons = db.collection('seasons');
    const seasons_json = require('./seasons.json');
    for (const [name, data] of Object.entries(seasons_json)) {
        await seasons.doc(name).set(data).catch((error) => {
            console.error('Error creating new semester: ', error);
            throw error;
        });
    }

    // setup classes
    const classes_json = require("./classes.json");
    const classes_fall2022 = db.collection("fall2022");
    const classes_spring2023 = db.collection("spring2023");
    const classes_fall2023 = db.collection("fall2023");
    for (const {
        name,
        class_id,
        instructor,
        enrolled,
        waitlisted,
        time,
        location,
        credits
    } of classes_json) {
        for (const collection of [classes_fall2022, classes_spring2023, classes_fall2023]) {
            await collection.doc(class_id).set({
                name,
                class_id,
                instructor,
                enrolled,
                waitlisted,
                time,
                location,
                credits
            }).catch((error) => {
                console.error('Error creating new class: ', error);
                throw error;
            });
        }
    }
}

main();
