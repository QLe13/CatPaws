import React, { useState } from 'react';
import { auth, db } from './firebase';
import { getDoc, collection, getDocs, orderBy, query, doc } from 'firebase/firestore/lite';
import { getRedirectResult } from 'firebase/auth';

export const curDate = new Date()
/** Today for comparison without year */
export const curDateYearly = new Date(curDate).setUTCFullYear(1970)
export const weekdays = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
export const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
export const getCurClasses = (classes: string[], curSemester: string) => classes.filter((cid) => cid.slice(8).startsWith(curSemester))
export const getCurSemester = async () => {
    const seasons = (await getDocs(query(collection(db, 'seasons'), orderBy('end')))).docs.map((doc) => ({ name: doc.id, end: doc.get('end') }))
    for (const { name, end } of seasons) {
        if (end > curDateYearly) return name + curDate.getUTCFullYear()
    }
    return 'fall' + curDate.getUTCFullYear()
}

export const getNextSemester = async () => {
    const seasons = (await getDocs(query(collection(db, 'seasons'), orderBy('end')))).docs.map((doc) => ({ name: doc.id, end: doc.get('end') }))
    let found = false
    for (const { name, end } of seasons) {
        if (found) return name + curDate.getUTCFullYear()
        found = end > curDateYearly
    }
    return seasons[0].name + curDate.getUTCFullYear()
}
/** Get the current firebase auth user even after a redirect, see https://firebase.google.com/docs/reference/js/firebase.User */
export const getAuthUser = () => getRedirectResult(auth).then((result) => {
    if (result) {
        // If result is not null, we have been redirected

        // This is the signed-in user
        return result.user;

        // This gives you a Google Access Token.
        // credential = GoogleAuthProvider.credentialFromResult(result);
        // token = credential.accessToken;
    } else if (auth.currentUser) {
        // if the user is signed in, get the user

        return auth.currentUser;
    }
    return null;
});
/** Get the current user from the database and current authed user */
export const getCurUser = async () => {
    const authUser = await getAuthUser();
    if (authUser) {
        const dbUser: UserData | undefined = (await getDoc(doc(db, "users", authUser.uid))).data() as UserData;
        return Object.assign(dbUser, {
            uid: authUser.uid,
            email: authUser.email,
            username: authUser.displayName,
        }) as User
    } else {
        return null;
    }
}


/**
 * This is a function that returns a tuple containing the current state, a function to
 * update the state, and a function to handle changes to form inputs with names that match the keys
 * @param {T} init - The initial state of the form, which is of type T (a generic type that extends
 * Record<string, any>).
 * @returns The function `useFormState` returns an array with three elements:
 * 1. The first element is the current state of type `T`.
 * 2. The second element is a function of type `React.Dispatch<React.SetStateAction<T>>` that can be
 * used to update the state.
 * 3. The third element is a function of type `(e: React.ChangeEvent<HTMLInputElement |
 * HTMLSelectElement | HTMLTextAreaElement>) => void` that can be used to handle changes to form inputs.
 */
export function useFormState<T extends Record<string, any>>(init: T): [T, React.Dispatch<React.SetStateAction<T>>, React.ChangeEventHandler<
    HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
>] {
    const [state, setState] = useState(init)
    return [state, setState, (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        (state as Record<string, any>)[e.target.name] = e.target.value
        setState({ ...state })
    }]
}
