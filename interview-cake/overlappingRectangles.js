function findOverlap(range1, range2) {
    let start = Math.max(range1.start, range2.start)
    let end = Math.min(range1.end, range2.end)
    return start < end ? {start, end} : null
  }
  
  function makeRanges(rect) //takes rect, return [xRange, yRange]
  {
    return [
      {
        start:rect.leftX, 
        end: rect.leftX+rect.width
      },
      {
        start:rect.bottomY, 
        end: rect.bottomY+rect.height
      }]  
  } 
  
  function findRectangularOverlap(rect1, rect2) {
    
    // Calculate the overlap between the two rectangles
    // calculate yRange and xRange for each {start:, end:}
    // find the overlap (returns a range)
    
    const rect1Ranges = makeRanges(rect1)
    const rect2Ranges = makeRanges(rect2)
    const xOverlap = findOverlap(rect1Ranges[0], rect2Ranges[0])
    const yOverlap = findOverlap(rect1Ranges[1], rect2Ranges[1])
  
    if (!(xOverlap && yOverlap)) return { leftX: null, bottomY: null, width: null, height: null }
    return { 
      leftX: xOverlap.start, 
      bottomY: yOverlap.start, 
      width: xOverlap.end-xOverlap.start, 
      height: yOverlap.end - yOverlap.start
    };
  }
  