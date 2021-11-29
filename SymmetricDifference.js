function sym() {
    let args = [];
    for(let i=0; i < arguments.length; i++){
      args.push(arguments[i])
    }
  
    function symDif(arr1, arr2) {
      let result = [];
      arr1.forEach(function(item) {
        if(arr2.indexOf(item) < 0 && result.indexOf(item) < 0){
          result.push(item);
        }
      })
      arr2.forEach(function(item) {
        if(arr1.indexOf(item) < 0 && result.indexOf(item) < 0){
          result.push(item);
        }
      })
      return result;
    }
  
    return args.reduce(symDif);
  }

  //sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5].
  //sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
  
  /* The reduce() method executes a user-supplied “reducer” callback function on each element of the array,
  in order, passing in the return value from the calculation on the preceding element. The final result of
  running the reducer across all elements of the array is a single value. */

  /* A “reducer” ("callback") function that takes four arguments:
  1.previousValue: the value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].
  2.currentValue: the value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].
  3.currentIndex: the index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.
  4.array: the array to traverse. */