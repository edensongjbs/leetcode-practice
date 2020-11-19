function combineBlock(blockA, blockB) {
    startTime = Math.min(blockA.startTime, blockB.startTime)
    endTime = Math.max(blockA.endTime, blockB.endTime)
}

function hiCal(meetings) {
    let condensedMeetings = []
    for (let i=0; i<meetings.length; i++) {
        let condensedMeeting = meetings[i]
        if (!meetings[i].done) 
        {
            for (let j=i+1; j < meetings.length; j++) {
                console.log(j)
                if ((meetings[j].startTime >= condensedMeeting.startTime) &&
                (meetings[j].startTime <= condensedMeeting.endTime)) {
                    if (meetings[j].endTime > condensedMeeting.endTime) {
                        condensedMeeting.endTime = meetings[j].endTime
                    }
                    meetings[j].done=true
                }
                if ((meetings[j].endTime <= condensedMeeting.endTime) &&
                (meetings[j].endTime >= condensedMeeting.endTime)) {
                    if (meetings[j].startTime < condensedMeeting.startTime) {
                        condensedMeeting.startTime = meetings[j].startTime
                    }
                    meetings[j].done=true
                }
            }
            condensedMeetings.push(condensedMeeting)
        }
    }
    return condensedMeetings
}

let test =   [
    { startTime: 0,  endTime: 1 },
    { startTime: 3,  endTime: 5 },
    { startTime: 4,  endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9,  endTime: 10 },
]

console.log(hiCal(test))