class QueueTwoStacks {
    constructor() {
      this.stackOne=[];
      this.stackTwo=[];
      this.leftStack=true
    }
    enqueue(item) {
      if (this.leftStack) {
        while (this.stackOne.length) {
          this.stackTwo.push(this.stackOne.pop())
        }
      }
      this.stackTwo.push(item)
      this.leftStack=false
    }
  
    dequeue() {
      if (!this.leftStack) {
        while (this.stackTwo.length) {
          this.stackOne.push(this.stackTwo.pop())
        }
      }
      this.leftStack=true
      if (this.stackOne.length) return this.stackOne.pop();
      else throw new Error
    }
      
      
  }