function updateInventory(arr1, arr2) {
    let combineInv = arr1;

    arr2.forEach(function(arr) {
        let count = 0;
        for(let i = 0; i < combineInv.length; i++){
            if(combineInv[i][1] === arr[1]){
                combineInv[i][0] += arr[0];
                count ++;
            } 
        }
        if(count === 0) {
            combineInv.push(arr);
            count = 0;
        } else { count = 0; }
    })

    let result = combineInv.sort(function(currItem, nextItem) {         // sorting array by alphabetical 
        return currItem[1] > nextItem[1] ? 1 : -1;
    });
    return result();
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
console.log(updateInventory(curInv, newInv))