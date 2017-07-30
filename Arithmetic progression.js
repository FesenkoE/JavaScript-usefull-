'use strict'
/*function sumTo(n) {
	var sum = 0;
	for (var i = 1; i <= n; i++) {
		sum += i; 
	} console.log(sum);
}
 sumTo(100);*/

function sumTo(n) {
	return  (n != 0) ? n + sumTo(n-1) : n;
}

var sum = sumTo(3);
console.log(sum);

/*function sumTo(n) {
	var sum = (1 + n) * n / 2;
	alert('Итоговое число арифметической прогресси составляет: ' + sum);
}

sumTo(+prompt('Введите число', ''));*/