var a = 2,
	b = 3,
	value = (a*a)+(2*a*b)-(b*b);
console.log('Wynik działania wynosi: ' + value);

if(value == 0){
    console.log('Wynik równy zero'); // zero
}
else if(value > 0){
    console.log('Wynik dodatni');// dodatnie
}
else {
    console.log('Wynik ujemny');// ujemne
}