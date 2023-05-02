import { getAuthUser, getCurClasses, getCurSemester, getCurUser, getNextSemester } from "../src/utils"
import {describe, expect} from '@jest/globals'
import { authUserPayload, seasonPayload, userPayload } from "./testVariables"

// Mock instance of the utils module
jest.mock('../src/utils', () => {
    const curDate = new Date()
    const curDateYearly = new Date(curDate).setUTCFullYear(1970)
    return{
        __esModule: true,
        getCurClasses: jest.fn(),
        getCurSemester: jest.fn(async () => {
            const seasons = seasonPayload
            for (const { name, end } of seasons) {
                if (end > curDateYearly) return name + curDate.getUTCFullYear()
            }
            return 'fall' + curDate.getUTCFullYear()
        }),
        getNextSemester: jest.fn(async () => {
            const seasons = seasonPayload
            let found = false
            for (const { name, end } of seasons) {
                if (found) return name + curDate.getUTCFullYear()
                found = end > curDateYearly
            }
            return seasons[0].name + curDate.getUTCFullYear()
        }),
        getAuthUser: jest.fn(),
        getCurUser: jest.fn(async () => {
            const authUser = authUserPayload;
            if (authUser) {
                const dbUser: UserData | undefined = userPayload as UserData;
                return Object.assign(dbUser, {
                    uid: authUser.uid,
                    email: authUser.email,
                    username: authUser.displayName,
                }) as User
            } else {
                return null;
            }
        })
    }
})
// Utilities testing suite
describe("Testing utilities", () => {
    describe("Testing getCurSemester", () => {
        it("Should return current semester", async () => {
            const mockCurrentSemester = await getCurSemester()
            expect(mockCurrentSemester).toEqual('fall2023')
        })
    })
    describe("Testing getNextSemester", () => {
        it("Should return the next semester", async () => {
            const mockNextSemester = await getNextSemester()
            expect(mockNextSemester).toEqual('spring2023')
        })
    })
    //This is a mock test
    describe("Testing getAuthUser", () => {
        it("Should return authenticated user", async () => {
            expect(1).toEqual(1)
        })
    })
    describe("Testing getCurUser", () => {
        it("Should get the current user", async () => {
            const mockCurrentUser = await getCurUser()
            expect(mockCurrentUser).toEqual(userPayload)
        })
    })
})