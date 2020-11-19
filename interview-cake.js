// const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants")

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

// quadratic solution
// function hiCal(meetings) {
//     const combinedMeetings = []
//     for (let i=0; i < meetings.length; i++) {
//         let combinedMeeting = meetings[i]
//         if (meetings[i].done){continue}
//         for (let j=i+1; j<meetings.length; j++) {
//             if (meetings[j].done){continue}
//             if (((contained(combinedMeeting, meetings[j].startTime))
//              && (!contained(combinedMeeting, meetings[j].endTime)))
//              || ((contained(combinedMeeting, meetings[j].endTime))
//              && (!contained(combinedMeeting, meetings[j].startTime)))){
//                 combinedMeeting = combineBlock(combinedMeeting, meetings[j])
//                 meetings[j].done = true
//              }
//         }
//         combinedMeetings.push(combinedMeeting)
//     }
//     return combinedMeetings
// }

//refactor for nlogn

// function hiCal(meetings) {
//     if (meetings.length < 2) {
//         return meetings[0]
//     }
//     if (meetings.length === 2) {
//         if (((contained(meetings[0], meetings[1].startTime))
//              && (!contained(meetings[0], meetings[1].endTime)))
//              || ((contained(meetings[0], meetings[1].endTime))
//              && (!contained(meetings[0], meetings[1].startTime)))){
//                 combinedMeeting = combineBlock(combinedMeeting, meetings[j])
//                 meetings[j].done = true
//              }
//     }
//     const combinedMeetings = []
//     for (let i=0; i < meetings.length; i++) {
        
            
//         }
//         combinedMeetings.push(combinedMeeting)
//     }
//     return combinedMeetings
// }
// nlogn solution - trick is to sort first

const hiCal = (meetings) => {
    meetings.sort ( (meetingA, meetingB) => {
        return meetingA.startTime - meetingB.startTime
    })
    let condensedMeetings = [meetings[0]], j=0
    for (let i=1; i<meetings.length; i++){
        if ((meetings[i].endTime > condensedMeetings[j].endTime) &&
        (meetings[i].startTime <= condensedMeetings[j].endTime)) {
            condensedMeetings[j].endTime = meetings[i].endTime
        }
        else {
            condensedMeetings.push(meetings[i])
            j++
        }
    }
    return condensedMeetings
}

const reverseStringInPlace = (str) => {
    let strar = str.split('')
    let temp
    for (let i=0; i < strar.length/2; i++) {
        temp = strar[i]
        strar[i] = strar[strar.length-1-i]
        strar[strar.length-1-i] = temp
    }
    return strar.join('')
}

const reverseWordInPlace = (str) => {
    let strar = str.split('')
    let startIndex = 0, endIndex
    while (startIndex < strar.length) {
        //find the endIndex of this word
        endIndex = startIndex
        while ((endIndex < strar.length) &&
        (strar[endIndex+1]!==' ')) {
            endIndex++
        }
        // reverse word
        let i=startIndex, j=endIndex
        while (i < j) {
            let temp = strar[i]
            strar[i] = strar[j]
            strar[j] = temp
            j--, i++
        }
        //advance startIndex and endIndex
        if (endIndex+2 >= strar.length){break}
        startIndex=endIndex+2
    }
    return strar.join('')
}


module.exports = { hiCal, reverseStringInPlace, reverseWordInPlace }

// let test =   [
//     { startTime: 0,  endTime: 1 },
//     { startTime: 3,  endTime: 5 },
//     { startTime: 4,  endTime: 8 },
//     { startTime: 10, endTime: 12 },
//     { startTime: 9,  endTime: 10 },
// ]

// console.log(hiCal(test))