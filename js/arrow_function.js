 var inputs = process.argv.slice(2);
    var result = inputs.map((a)=>{a.charAt(0)})
   		.reduce((acc, cur)=> {acc += cur});
    console.log(result);
//var inputs = process.argv.slice(2);
//    var result = inputs.map((x) => x[0]).reduce((result, x) => result += x);
//
//    console.log(result);