
class QueueTwoStacks {
    constructor() {
      this.stackOne=[];
      this.stackTwo=[];
    }
    enqueue(item) {
      while (this.stackOne.length) {
        this.stackTwo.push(this.stackOne.pop())
      }
      this.stackOne.push(item)
      while (this.stackTwo.length) {
        this.stackOne.push(this.stackTwo.pop())
      }
    }
  
    dequeue() {
      if (this.stackOne.length) return this.stackOne.pop();
      else throw new Error
    }
  }