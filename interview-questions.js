class AirMap {
    visitRecursive(start, finish, visited, pathSoFar){
        visited.add(start)
        pathSoFar.add(start)
        if (start===finish) {
            console.log(pathSoFar)
            visted.remove(start)
            return
        }
        obj[start].forEach(node => {
            if (!visited.has(node)) visitRecursive(node, finish, visited, pathSoFar)
        })
        visited.remove(start)
        pathSoFar.remove(start)
    }
}


function getOriginalParent(inputDataSet)
{
    let processObj = {}, allChildren = []
    inputDataSet.forEach(node => {
        processObj[node.id]=false
        allChildren.concat(node.children)
    })
    allChildren.forEach(child => {
        processObj[child]=true
    })
    processObj.keys.forEach(key => {
        if (processObj[key]===false) return key
    })
    
}