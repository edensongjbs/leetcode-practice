// INPUT ( book )
// 1: “the cat likes to play with string”,
// 2: “the dog likes to play with the ball”

// OUTPUT 
// Return an index of your design 

function createIndex ( book ) {
    let index={}
    Object.keys(book).forEach(pageNum => {
        const pageAr = book[pageNum].split(' ')
        for (let i=0; i<pageAr.length; i++) {
            if (index.hasOwnProperty(pageAr[i])) {
                // inc
                index[pageAr[i]].numTimes++
                index[pageAr[i]].pageAppearances.add(pageNum)
            }
            else {
                //add
                const wordSet = new Set()
                wordSet.add(pageNum)
                index[pageAr[i]] = {numTimes:1, pageAppearances:wordSet}
            }
        }
    })
    return index
}

/*
{
    the: {numTimes:3, pageAppearances:{1, 2, 2}}
}
*/

// OUTPUT
// Index of what pages each word appears on (no specific order of words)
// the: [1, 2]
// cat: [1]
// dog: [2]
// likes: [1, 2]
// to: [1, 2]
// play: [1, 2]
// with: [1, 2]
// string: [1]
// ball: [2]

function printIndex ( book ) {
    let index = createIndex(book)
    Object.keys(index).forEach(word => {
        console.log(index[word].pageAppearances)
    })
}


// OUTPUT
// Popularity index of words (no specific order within group)
// the: [1, 2]      (3 times)
// likes: [1, 2]    (2 times)
// play: [1, 2]    (2 times)
// with: [1, 2]    (2 times)
// to: [1, 2]        (2 times)
// cat: [1]          (1 time)
// dog: [2]         (1 time)
// string: [1]      (1 time)
// ball: [2]         (1 time)

//O()
function printInOrderOfPopularity ( book ) {
    let index = createIndex(book)
    let sortedWords = Object.keys(index).sort((wordA, wordB) => {
        index[wordA].numTimes-index[wordB].numTimes
    }
    sortedWords.forEach(word => {
        console.log(index[word],": ", index[word].numTimes+" times")
    })
    
    // .map(word => {
    //     index[word].pageAppearances)
    // })
}
