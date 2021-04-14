//For iterator
function print_with_for(num){
	let lienzo = document.getElementById("for_iterator");
	lienzo.innerHTML = "";
	let numero = parseInt(num);
   	for(let i = 1; i<=10; i++) {
       lienzo.innerHTML += `${numero} * ${i} = ${numero*i} <br />`;
    }
    return 1;
}

function print_with_while(num){
	let lienzo = document.getElementById("while_iterator");
	lienzo.innerHTML = "";
	let numero = parseInt(num);
	let contador = 0;
	while(contador<=10){
		lienzo.innerHTML += `${numero} * ${contador} = ${numero*contador} <br />`
		contador++;
	}
	return 1;
}

function print_with_do_while(num){
	let lienzo = document.getElementById("do_while_iterator");
	lienzo.innerHTML = "";
	let numero = parseInt(num);
	let contador = 0;
	do{
		lienzo.innerHTML += `${numero} * ${contador} = ${numero*contador} <br />`
		contador++;
	}
	while(contador<=10);
	return 1;
}



      
 