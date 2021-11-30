test('add10', assert => {
    const msg = 'partialApply() should partially apply functions'
  
    const add = (a, b) => a + b;
  
    const add10 = partialApply(add, 10);
  
  
    const actual = add10(5);
    const expected = 15;
  
    assert.equal(actual, expected, msg);
});

/*   Currying   */
    //  Currying is a technique of evaluating a function with multiple arguments, 
    //  into sequence of function with single/multiple argument.

function add(x){
    return function (y){
        return x+y;
    }
}

const add = x => y => x+y;          // this is ES6, arrow function

    // in above problem, it simply turn up add(2,3) into add(2)(3)


/*  add(2)(3)(4) or for endless number of parameters   */
function add(x){
    let sum = x;
    return function resultFn(y){                        //add(3)(4)(5).result //output: 12
        sum += y;                                       //var t = add(3)(4);
        resultFn.result = sum;                          //t.result //output: 7
        return resultFn;                                //t(5).result //output: 12
    }
}

or 

function add(x){
    let sum = x;
    return function resultFn(y){
        if(arguments.length){               //not relying on falsy value
            sum += y;
            return resultFn;
        }
        return sum;
    }
}