const getUniqueId = (() => {
    let nextGeneratedId = 0;
    return element => {
      if (!element.id) {
        element.id = `generated-uid-${nextGeneratedId}`;
        nextGeneratedId++;
      }
      return element.id;
    };
  })();

console.log(getUniqueId({}))
console.log(getUniqueId({}))