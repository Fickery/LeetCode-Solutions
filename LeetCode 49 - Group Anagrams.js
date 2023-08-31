function groupAnagrams(arr) {
    const groups = {};
    const sort = arr.map(str => str.split('').sort().join(''));
    for (let i = 0; i < arr.length; i++) {
    	  const sortedArr = sort[i]=
    	  const ogArr = arr[i];

    	  if (groups[sortedArr]) {
    	  	  groups[sortedArr].push(ogArr)
    	  } else {
    	  	  groups[sortedArr] = [ogArr]
    	  }
    }
    return Object.values(groups)
}
