const max = process.argv[2]
let FizzBuzz = {           
	[Symbol.iterator]() { 
  		let i = 0;
		return {
			next() {
				i++;
				if(i <= max) {
					if(i % 3 === 0 && i % 5 === 0) {
						return {value: "FizzBuzz", done: false};
					} else if(i % 5 === 0) {
						return {value: "Buzz", done: false};
					} else if(i % 3 === 0) {
						return {value: "Fizz", done: false};
					} else {
						return {value: i, done: false};
					}
				} else {
					return {done: true}
				}
		}
	  }
    // here belongs the Fiz
    // Hint：：              
    // When it's finished y
    // with the property `d
    // have to set `done: f
  }                        
}                          
                           
for (var n of FizzBuzz) {  
  console.log(n); 
}