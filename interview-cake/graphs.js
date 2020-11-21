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
    console.log(links, node)
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

  module.exports = { getPath, Queue }