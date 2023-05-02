import { getCurSemester } from "../utils"

test("Should do this", async () =>{
    const currentSummester = await getCurSemester();
    expect(currentSummester).toEqual("spring2023");    
})