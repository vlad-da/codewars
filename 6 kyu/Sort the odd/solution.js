function sortArray(array) {
    const arr = [];
    let count = 0;
    array.forEach((el, index) => {
        if(el % 2 !== 0) {
            arr.push(el);
            array[index] = null
        }
    })

    const nArr = arr.sort((a, b) => a - b);
    array.forEach((el, index) => {
        
        if(el === null) {
            array[index] = nArr[count];
            count++;
        }
    })
        console.log(array);
        return array;
  }

sortArray([5, 3, 1, 8, 0])