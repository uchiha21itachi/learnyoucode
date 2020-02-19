var arr_size = process.argv.length
var sum = 0
for (x in process.argv){
	if (x > 1){
		sum = sum + Number(process.argv[x])
	}
}
console.log(sum)
