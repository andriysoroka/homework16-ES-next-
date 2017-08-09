const max = process.argv[2];
let FizzBuzz = function*(){           
	let i = 0;
	while (i <= max) {
		i++;
		if(i % 3 === 0 && i % 5 === 0) {
			i = "FizzBuzz";
			yield i;
		} else if(i % 5 === 0) {
			i = "Buzz";
			yield i;
		} else if(i % 3 === 0) {
			i = "Fizz";
			yield i;
		} else {
			yield i;
		}
	}
}                          
                           
for (var n of FizzBuzz) {  
  console.log(n); 
}
//[Symbol.iterator]() { 
//  		let i = 0;
//		return {
//			next() {
//				i++;
//				if(i <= max) {
//					if(i % 3 === 0 && i % 5 === 0) {
//						return {value: "FizzBuzz", done: false};
//					} else if(i % 5 === 0) {
//						return {value: "Buzz", done: false};
//					} else if(i % 3 === 0) {
//						return {value: "Fizz", done: false};
//					} else {
//						return {value: i, done: false};
//					}
//				} else {
//					return {done: true}
//				}
//		}
//	  }
//const max = process.argv[2];      
//let FizzBuzz = function* (){      
//  let num = 1;                    
//  while (num <= max) {            
//    let value = num;              
//    num++;                        
//    if (value % 15 === 0) {       
//      value = 'FizzBuzz';         
//    } else if (value % 3 === 0) { 
//      value = 'Fizz';             
//    } else if (value % 5 === 0) { 
//      value = 'Buzz';             
//    }                             
//    yield value;                  
//  }                               
//}();                              
//                                  
//for (var n of FizzBuzz) {         
//  console.log(n);                 
//}                                 
             