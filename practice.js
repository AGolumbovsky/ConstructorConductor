var total = 0;
var sum = function(arr, cb){
	for (var i = 0; i < arr.length; i++){
		total += arr[i];
	}
}
sum ([1,2,3,4,5], function(total){
	return "the total is " + total;

});