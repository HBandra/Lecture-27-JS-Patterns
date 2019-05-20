function makeIterator(array) {
	let index = 0;
	let fib = array;

	return {

		current: function () {
			return fib[index];
		},

		next: function () {
			let length = fib.length;
			index++;
			fib.push(fib[length - 1] + fib[length - 2]);

			return {
				value: fib[index],
				done: false
			};
		},

		rewind: function () {
			index = 0;
		},
		
		key: function () {
			return index;
		},

		prev: function () {
			return index --;
		}
	};
}

let it = makeIterator([0, 1]);

while (it.current() < 8) {
	console.log(it.current());
	it.next();
}
console.log('key', it.key());