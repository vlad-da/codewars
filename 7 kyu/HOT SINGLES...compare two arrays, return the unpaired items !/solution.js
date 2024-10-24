const hotSingles = (arr1, arr2) =>  Array.from(new Set(arr1.filter(value=> !arr2.includes(value))
                                    .concat(arr2.filter(value=> !arr1.includes(value)))))