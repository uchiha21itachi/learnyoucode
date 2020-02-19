var dt = require('./mymodule.js')

dt(process.argv[2], process.argv[3], (err, data) =>{
	if(err)
		console.log(err);
	else{
		for (x in data){
			console.log(data[x])
		}
	}
})