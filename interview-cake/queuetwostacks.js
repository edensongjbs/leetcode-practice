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


  /*

  class QueueTwoStacks {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(item) {
    this.inStack.push(item);
  }

  dequeue() {
    if (this.outStack.length === 0) {

      // Move items from inStack to outStack, reversing order
      while (this.inStack.length > 0) {
        const newestInStackItem = this.inStack.pop();
        this.outStack.push(newestInStackItem);
      }

      // If outStack is still empty, raise an error
      if (this.outStack.length === 0) {
        throw new Error("Can't dequeue from empty queue!");
      }
    }
    return this.outStack.pop();
  }
}

  */
