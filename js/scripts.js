var a = 2,
	b = 3,
	value = (a*a)+(2*a*b)-(b*b);
console.log('Wynik dzia�ania wynosi: ' + value);

if (value >= 1) {
	console.log('Wynik dodatni');
} else if (value <= -1) {
	console.log('Wynik ujemny');
}

if (value == 0) {
	console.log('Wynik r�wny 0!');
} else if (value != 0) {
	console.log('Wynik r�ny od 0!');
}