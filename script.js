$(document).ready(function(){
	alert('Tic Tac Toe Games');
	var player1 = prompt("Nom du joueur 1 :", "Joueur 1");
	var player2 = prompt("Nom du joueur 2 :", "Joueur 2");
	$('#p1').append("<em>"+player1+"</em>");
	$('#p2faistournerleoinjfdp').append("<em>"+player2+"</em>");
	$('#p1.0').replaceWith("<h2>"+player1+"</h2>");
	$('#p2.0').replaceWith("<h2>"+player2+"</h2>");
	var tourdejeux = 0;
	var case1 = 0;
	var case2 = 0;
	var case3 = 0;
	var case4 = 0;
	var case5 = 0;
	var case6 = 0;
	var case7 = 0;
	var case8 = 0;
	var case9 = 0;




	function winornot() {
		if (case1==8 && case2==8 && case3==8) {
			alert('Cest ' + player1 + ' qui a gagné !')
			restart()
		} else if (case4==8 && case5==8 && case6==8) {
			alert('Cest ' + player1 + ' qui a gagné !')
			restart()
		} else if (case7==8 && case8==8 && case9==8) {
			alert('Cest ' + player1 + ' qui a gagné !')
			restart()
		} else if (case1==8 && case4==8 && case7==8) {
			alert('Cest ' + player1 + ' qui a gagné !')
			restart()
		} else if (case2==8 && case5==8 && case8==8) {
			alert('Cest ' + player1 + ' qui a gagné !')
			restart()
		} else if (case3==8 && case6==8 && case9==8) {
			alert('Cest ' + player1 + ' qui a gagné !')
			restart()
		} else if (case1==8 && case5==8 && case9==8) {
			alert('Cest ' + player1 + ' qui a gagné !')
			restart()
		} else if (case3==8 && case5==8 && case7==8) {
			alert('Cest ' + player1 + ' qui a gagné !')
			restart()
		}

		if (case1==9 && case2==9 && case3==9) {
			alert('Cest ' + player2 + ' qui a gagné !')
			restart()
		} else if (case4==9 && case5==9 && case6==9) {
			alert('Cest ' + player2 + ' qui a gagné !')
			restart()
		} else if (case7==9 && case8==9 && case9==9) {
			alert('Cest ' + player2 + ' qui a gagné !')
			restart()
		} else if (case1==9 && case4==9 && case7==9) {
			alert('Cest ' + player2 + ' qui a gagné !')
			restart()
		} else if (case2==9 && case5==9 && case8==9) {
			alert('Cest ' + player2 + ' qui a gagné !')
			restart()
		} else if (case3==9 && case6==9 && case9==9) {
			alert('Cest ' + player2 + ' qui a gagné !')
			restart()
		} else if (case1==9 && case5==9 && case9==9) {
			alert('Cest ' + player2 + ' qui a gagné !')
			restart()
		} else if (case3==9 && case5==9 && case7==9) {
			alert('Cest ' + player2 + ' qui a gagné !')
			restart()
		}
	}

	function restart(){
		$('#case1').attr('src','carre.png');
		case1 = 0
		$('#case2').attr('src','carre.png');
		case2 = 0
		$('#case3').attr('src','carre.png');
		case3 = 0
		$('#case4').attr('src','carre.png');
		case4 = 0
		$('#case5').attr('src','carre.png');
		case5 = 0
		$('#case6').attr('src','carre.png');
		case6 = 0
		$('#case7').attr('src','carre.png');
		case7 = 0
		$('#case8').attr('src','carre.png');
		case8 = 0
		$('#case9').attr('src','carre.png');
		case9 = 0
	}

	$('#restart').click( function(){
		restart()
	});


	$('#case1').click( function(){
		tourdejeux ++;
		if (case1 == 8 || case1 == 9) {
			alert('Case déja prise COGNO !')
		} else {
			if (tourdejeux == 1 || tourdejeux == 3 || tourdejeux == 5 || tourdejeux == 7 || tourdejeux == 9 || tourdejeux == 11) {
				$('#case1').attr('src','croix.png');
				case1 = 8
			} else {
				$('#case1').attr("src",'rond.png');
				case1 = 9
				}
		}
		winornot()
	});

	$('#case2').click( function(){
		tourdejeux ++;
		if (case2 == 8 || case2 == 9) {
			alert('Case déja prise COGNO !')
		} else {
			if (tourdejeux == 1 || tourdejeux == 3 || tourdejeux == 5 || tourdejeux == 7 || tourdejeux == 9 || tourdejeux == 11) {
				$('#case2').attr('src','croix.png');
				case2 = 8
			} else {
				$('#case2').attr("src",'rond.png');
				case2 = 9
				}
		}
		winornot()
	});


	$('#case3').click( function(){
		tourdejeux ++;
		if (case3 == 8 || case3 == 9) {
			alert('Case déja prise COGNO !')
		} else {
			if (tourdejeux == 1 || tourdejeux == 3 || tourdejeux == 5 || tourdejeux == 7 || tourdejeux == 9 || tourdejeux == 11) {
				$('#case3').attr('src','croix.png');
				case3 = 8
			} else {
				$('#case3').attr("src",'rond.png');
				case3 = 9
				}
		}
		winornot()
	});


	$('#case4').click( function(){
		tourdejeux ++;
		if (case4 == 8 || case4 == 9) {
			alert('Case déja prise COGNO !')
		} else {
			if (tourdejeux == 1 || tourdejeux == 3 || tourdejeux == 5 || tourdejeux == 7 || tourdejeux == 9 || tourdejeux == 11) {
				$('#case4').attr('src','croix.png');
				case4 = 8
			} else {
				$('#case4').attr("src",'rond.png');
				case4 = 9
				}
		}
		winornot()
	});


	$('#case5').click( function(){
		tourdejeux ++;
		if (case5 == 8 || case5 == 9) {
			alert('Case déja prise COGNO !')
		} else {
			if (tourdejeux == 1 || tourdejeux == 3 || tourdejeux == 5 || tourdejeux == 7 || tourdejeux == 9 || tourdejeux == 11) {
				$('#case5').attr('src','croix.png');
				case5 = 8
			} else {
				$('#case5').attr("src",'rond.png');
				case5 = 9
				}
		}
		winornot()
	});


	$('#case6').click( function(){
		tourdejeux ++;
		if (case6 == 8 || case6 == 9) {
			alert('Case déja prise COGNO !')
		} else {
			if (tourdejeux == 1 || tourdejeux == 3 || tourdejeux == 5 || tourdejeux == 7 || tourdejeux == 9 || tourdejeux == 11) {
				$('#case6').attr('src','croix.png');
				case6 = 8
			} else {
				$('#case6').attr("src",'rond.png');
				case6 = 9
				}
		}
		winornot()
	});


	$('#case7').click( function(){
		tourdejeux ++;
		if (case7 == 8 || case7 == 9) {
			alert('Case déja prise COGNO !')
		} else {
			if (tourdejeux == 1 || tourdejeux == 3 || tourdejeux == 5 || tourdejeux == 7 || tourdejeux == 9 || tourdejeux == 11) {
				$('#case7').attr('src','croix.png');
				case7 = 8
			} else {
				$('#case7').attr("src",'rond.png');
				case7 = 9
				}
		}
		winornot()
	});


	$('#case8').click( function(){
		tourdejeux ++;
		if (case8 == 8 || case8 == 9) {
			alert('Case déja prise COGNO !')
		} else {
			if (tourdejeux == 1 || tourdejeux == 3 || tourdejeux == 5 || tourdejeux == 7 || tourdejeux == 9 || tourdejeux == 11) {
				$('#case8').attr('src','croix.png');
				case8 = 8
			} else {
				$('#case8').attr("src",'rond.png');
				case8 = 9
				}
		}
		winornot()
	});


	$('#case9').click( function(){
		tourdejeux ++;
		if (case9 == 8 || case9 == 9) {
			alert('Case déja prise COGNO !')
		} else {
			if (tourdejeux == 1 || tourdejeux == 3 || tourdejeux == 5 || tourdejeux == 7 || tourdejeux == 9 || tourdejeux == 11) {
				$('#case9').attr('src','croix.png');
				case9 = 8
			} else {
				$('#case9').attr("src",'rond.png');
				case9 = 9
				}
		}
		winornot()
	});
	
});