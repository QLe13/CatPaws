const admin = require('firebase-admin');
const { initializeApp } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const { getFirestore } = require('firebase-admin/firestore');


// service account key, replace with your own
const serviceAccount = require("../../cspace-51bd4-9c0a63be7d7f.json");


const app = initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = getFirestore(app);
const auth = getAuth(app);


async function createUsers(students: {[uid: string]: any}, teachers: {[uid: string]: any}) {
    const users = db.collection('users');

    // create student users
    for (const [uid, data] of Object.entries(students)) {
        // create auth user
        await auth.createUser({ uid, email: data.username + '@example.com', password: data.password, displayName: data.username }).catch((error) => {
            console.error('Error creating new auth user: ', error);
            throw error;
        });

        data.username = undefined;
        data.password = undefined;
        data.isTeacher = false;
        data.canRegister = true;
        data.specialRegister = false;
        // create firestore user
        await users.doc(uid).set(data).catch((error) => {
            console.error('Error creating new db user: ', error);
            throw error;
        });
    }

    // create teacher users
    for (const [uid, data] of Object.entries(teachers)) {
        // create auth user
        await auth.createUser({ uid, email: data.username + '@example.com', password: data.password, displayName: data.username }).catch((error) => {
            console.error('Error creating new auth user: ', error);
            throw error;
        });

        data.username = undefined;
        data.password = undefined;
        data.isTeacher = true;
        data.canRegister = false;
        data.specialRegister = false;
        data.waitlisted = [];
        data.saved = [];
        // create firestore user
        await users.doc(uid).set(data).catch((error) => {
            console.error('Error creating new db user: ', error);
            throw error;
        });
    }
}

async function main() {
    const teachers_json = require('./teachers.json');
    const students_json = require('./students.json');
    const seasons_json = require('./seasons.json');
    const classes_json = require("./classes.json");

    // create users
    createUsers(students_json, teachers_json);

    // create seasons
    const seasons = db.collection('seasons');
    for (const [name, data] of Object.entries(seasons_json)) {
        await seasons.doc(name).set(data).catch((error) => {
            console.error('Error creating new season: ', error);
            throw error;
        });
    }

    // create classes
    const classes_fall2022 = db.collection("fall2022");
    const classes_spring2023 = db.collection("spring2023");
    const classes_fall2023 = db.collection("fall2023");
    for (const [uid, data] of Object.entries(classes_json)) {
        for (const collection of [classes_fall2022, classes_spring2023, classes_fall2023]) {
            await collection.doc(uid).set(data).catch((error) => {
                console.error('Error creating new class: ', error);
                throw error;
            });
        }
    }
}

main();
