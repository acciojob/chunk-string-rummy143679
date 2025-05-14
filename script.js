function stringChop(str, size) {
  // your code here

	if(str.length > size){
		arr.push(str.slice(0,size));
		return stringChop(str.slice(size), size);
	}else{
		arr.push(str.slice(0));
	}
	return arr.length > 0 ? arr : "";
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
let arr = [];
alert(stringChop(str, size));
