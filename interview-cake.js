const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants")

function combineBlock(blockA, blockB) {
    startTime = Math.min(blockA.startTime, blockB.startTime)
    endTime = Math.max(blockA.endTime, blockB.endTime)
    return {startTime, endTime}
}

// function hiCal(meetings) {
//     let condensedMeetings = []
//     for (let i=0; i<meetings.length; i++) {
//         let condensedMeeting = meetings[i]
//         if (!meetings[i].done)
//         {
//             for (let j=i+1; j < meetings.length; j++) {
//                 console.log(j)
//                 if ((meetings[j].startTime >= condensedMeeting.startTime) &&
//                 (meetings[j].startTime <= condensedMeeting.endTime)) {
//                     if (meetings[j].endTime > condensedMeeting.endTime) {
//                         condensedMeeting.endTime = meetings[j].endTime
//                     }
//                     meetings[j].done=true
//                 }
//                 if ((meetings[j].endTime <= condensedMeeting.endTime) &&
//                 (meetings[j].endTime >= condensedMeeting.endTime)) {
//                     if (meetings[j].startTime < condensedMeeting.startTime) {
//                         condensedMeeting.startTime = meetings[j].startTime
//                     }
//                     meetings[j].done=true
//                 }
//             }
//             condensedMeetings.push(condensedMeeting)
//         }
//     }
//     return condensedMeetings
// }

function contained(meeting, time) {
    return (time >= meeting.startTime && time <= meeting.endTime)
}

function hiCal(meetings) {
    const combinedMeetings = []
    for (let i=0; i < meetings.length; i++) {
        let combinedMeeting = meetings[i]
        if (meetings[i].done){continue}
        for (let j=i+1; j<meetings.length; j++) {
            if (meetings[j].done){continue}
            if (((contained(combinedMeeting, meetings[j].startTime))
             && (!contained(combinedMeeting, meetings[j].endTime)))
             || ((contained(combinedMeeting, meetings[j].endTime))
             && (!contained(combinedMeeting, meetings[j].startTime)))){
                combinedMeeting = combineBlock(combinedMeeting, meetings[j])
                meetings[j].done = true
             }
        }
        combinedMeetings.push(combinedMeeting)
    }
    return combinedMeetings
}

module.exports = hiCal

// let test =   [
//     { startTime: 0,  endTime: 1 },
//     { startTime: 3,  endTime: 5 },
//     { startTime: 4,  endTime: 8 },
//     { startTime: 10, endTime: 12 },
//     { startTime: 9,  endTime: 10 },
// ]

// console.log(hiCal(test))