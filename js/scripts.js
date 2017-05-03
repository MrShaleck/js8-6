var a = 2,
	b = 3,
	value = (a*a)+(2*a*b)-(b*b);
console.log('Wynik dzia³ania wynosi: ' + value);

if (value >= 1) {
	console.log('Wynik dodatni');
} else if (value <= -1) {
	console.log('Wynik ujemny');
}

if (value == 0) {
	console.log('Wynik równy 0!');
} else if (value != 0) {
	console.log('Wynik ró¿ny od 0!');
}