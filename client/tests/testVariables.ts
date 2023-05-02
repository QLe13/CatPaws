export const seasonPayload = [
    {
        name: 'fall',
        end: new Date('1970-11-19').setUTCFullYear(1970)
    },
    {
        name: 'spring',
        end: new Date('1970-04-15').setUTCFullYear(1970)
    }
]

export const userPayload = {
    canRegister: true,
    classes: [],
    isTeacher: true,
    saved: [],
    specialRegister: true,
    waitlisted: []
}

export const authUserPayload = {
    uid: '1234',
    email: 'janedoe@email.com',
    displayName: 'Jane Doe'
}