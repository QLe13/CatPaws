declare type User = {
    uid: string;
    email: string;
    username: string;
    isTeacher: boolean;
    canRegister: boolean;
    specialRegister: boolean;
    classes: string[];
    waitlisted: string[];
    saved: string[];
}
declare type UserData = {
    isTeacher: boolean;
    canRegister: boolean;
    specialRegister: boolean;
    classes: string[];
    waitlisted: string[];
    saved: string[];
}
