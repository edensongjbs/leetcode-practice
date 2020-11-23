class Queue {
    constructor() {
      this.queue = [];
      this.size = 0;
    }
  
    enqueue(item) {
      this.queue.unshift(item);
      this.size += 1;
    }
  
    dequeue() {
      this.size -= 1;
      return this.queue.pop();
    }
  }

  function tracePath(links, node) {
    // console.log(links, node)
    let ar = []
    while (links[node]) {
          console.log(ar)
          ar.unshift(node)
          node = links[node]
    }
    ar.unshift(node)
    return ar
}
  
const getPath = (graph, startNode, endNode) => {
  let queue = new Queue() 
  let links = {}
  if (!graph.hasOwnProperty(endNode)){throw new Error('End Node not in graph')}
  queue.enqueue(startNode)
  links[startNode]=null
  while (queue.size > 0) {
      let currentNode = queue.dequeue()
      if (currentNode===endNode) { return tracePath(links, endNode)}
      graph[currentNode].forEach(node => {
          // console.log(links)
          if (!links.hasOwnProperty(node)) {
              links[node]=currentNode
              queue.enqueue(node)
          }
      })
  }
  return null;
  }

  function findDuplicate(intArray) {

    // Find a number that appears more than once ... in O(n) time
    let i = intArray[0]
    while (intArray[i]!==null) {
      const temp = intArray[i]
      intArray[i]=null
      i = temp
    }
    return i;
  }

  function findDuplicate(intArray) {

    // Find a number that appears more than once ... in O(n) time
    let i = intArray[intArray.length-1]
    console.log(intArray)
    for (let ct=0; ct<intArray.length; ct++) {
      i=intArray[i-1]
    }
    console.log('inside loop', i)
    let knownLoop = i, ct2=1
    while (intArray[i-1]!==knownLoop) {
      console.log(intArray[i-1])
      i = intArray[i-1]
      ct2++
    }
    console.log('loop length', ct2)
    let farPointer = intArray[intArray.length-1], closePointer = intArray[intArray.length-1]
    for (let ct3=0; ct3<ct2; ct3++) {
      console.log(farPointer)
      farPointer = intArray[farPointer-1]
    }
    console.log('farPointer assigned:', farPointer)
    while (closePointer!==farPointer) {
      closePointer = intArray[closePointer-1]
      farPointer = intArray[farPointer-1]
    }
    return farPointer;
  }
  



  module.exports = { getPath, Queue }