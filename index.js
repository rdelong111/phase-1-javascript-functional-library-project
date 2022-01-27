function myEach(collection, alert) {
	if (typeof collection === 'object') {
		iterator(Object.values(collection));
	}
	else {
		iterator(collection);
	}
	return collection;

	function iterator(array) {
		for (let thing of array) {
			alert(thing)
		}
	}
}

function myMap(collection, callback) {
	if (typeof collection === 'object') {
		return iterator(Object.values(collection));
	}
	else {
		return iterator(collection);
	}

	function iterator(array) {
		let newarray = []
		for (let i of array) {
			newarray.push(callback(i));
		}
		return newarray;
	}
}

function myReduce(collection, callback, acc = -2) {
	if (typeof collection === 'object') {
		return iterator(Object.values(collection), acc);
	}
	else {
		return iterator(collection, acc);
	}

	function iterator(array, start) {
		let ans = start;
		for (let i of array) {
			ans = callback(ans, i, collection);
		}
		return ans;
	}
}

function myFind(collection, callback) {
	if (typeof collection === 'object') {
		return iterator(Object.values(collection));
	}
	else {
		return iterator(collection);
	}

	function iterator(array) {
		for (let num of array) {
			if (callback(num)) {
				return num;
			}
		}
	}
}

function myFilter(collection, callback) {
	if (typeof collection === 'object') {
		return iterator(Object.values(collection));
	}
	else {
		return iterator(collection);
	}

	function iterator(array) {
		let newarray = [];
		for (let num of array) {
			if (callback(num)) {
				newarray.push(num);
			}
		}
		return newarray;
	}
}

function mySize(collection) {
	if (typeof collection === 'object') {
		return Object.values(collection).length;
	}
	else {
		return collection.length;
	}
}

function myFirst(array, n = 0) {
	if (n === 0) {
		return array[0];
	}
	else {
		let ans = [];
		for (let i = 0; i < n; i++) {
			ans.push(array[i]);
		}
		return ans;
	}
}

function myLast(array, n = 0){
	if (n === 0) {
		return array[array.length - 1];
	}
	else {
		let ans = [];
		for (let i = array.length - n; i < array.length; i++) {
			ans.push(array[i]);
		}
		return ans;
	}
}

function myKeys(object) {
	let ans = [];
	for (let thekeys of Object.keys(object)) {
		ans.push(thekeys);
	}
	return ans;
}

function myValues(object) {
	let ans = [];
	for (let thevalues of Object.values(object)) {
		ans.push(thevalues);
	}
	return ans;
}

function mySortBy(array, callback) {
	let newarray = [...array];

	newarray.sort((a, b) => {
		if (typeof a === 'string') {
			return a.localeCompare(b);
		}
		else {
			return callback(a) - callback(b);
		}
	})
	return newarray;
}

function myFlatten(array, single = false, newArr = []) {
	let counter;
	do {
		counter = 0;
		for (let i of array) {
			if (Array.isArray(i)) {
				for (let j of i) {
					if (!(Array.isArray(j))) {
						counter++;
					}
					newArr.push(j);
				}
			}
			else {
				newArr.push(i);
				counter++;
			}
		}
		array = [...newArr];
		newArr = [];
		if (array.length === counter) {
			single = true;
		}
	}
	while (!single);

	return array;
}