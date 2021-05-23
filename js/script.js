$(document).ready(function(){
$('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_activ)', function() {
		$(this)
		.addClass('catalog_tab_activ').siblings().removeClass('catalog_tab_activ')
		.closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
	});

	$('.catalog-item_link').each(function(i){
		$(this).on('click', function(e){
			e.preventDefault();
			$('.catalog-item_content').toggleClass()
		})
	})

});

$(document).ready(function(){
$('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
		$(this)
		.addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
		.closest('div.container').find('div.catalog_content').removeClass('catalog_content_activ').eq($(this).index()).addClass('catalog_content_activ');
	});	

});


$(document).ready(function(){
$('ul.catalog2_tabs2').on('click', 'li:not(.catalog2_tab2_activ2)', function() {
		$(this)
		.addClass('catalog2_tab2_activ2').siblings().removeClass('catalog2_tab2_activ2')
		.closest('div.container').find('div.catalog2_content2').removeClass('catalog2_content2_active2').eq($(this).index()).addClass('catalog2_content2_active2');
	});

	$('.catalog-item_link').each(function(i){
		$(this).on('click', function(e){
			e.preventDefault();
			$('.catalog-item_content').toggleClass()
		})
	})

});

/*function random(min,max) {
	return Math.random() * (max - min) + min;
}*/
function random(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

/*const A=
function randomInteger(min, max) {
	document.querySelector('.sum').innerHTML = Math.random() * (max - min) + min;
	
}
function rund(){

	document.getElementById("rund").innerHTML = number;
}
*/

//фиксируемый флет

function all_bet(){
			var arr = new Array();
			var brr = new Array();
			var grr =new Array();
			var bank = Number(document.getElementById("Z").value);

			var month = Number(document.getElementById("X").value); //rjk-cnfdjr
				/*var bet = bank / 100; //ставка
				var bookmaker = bet / 100 * 10; //забирает брокер 10%
				var bank = (bet - bookmaker) * number_str * month + bank;*/
			var percent = Number(document.getElementById("V").value);	//процент нашей ставки

			var forecast = Number(document.getElementById("W").value); //наш прогноз
		//
			var bookmaker=0;
			var gold = bank;
			var gold2 = bank;
			var gold3 = bank;
			bet = bank / 100 * percent ; //фиксированная ставка
			var bet2 = 0; //динамическая ставка постоянно меняется
			var bet3 = 0; 
			for (var i = 0; i <month; i++) {
						var win=random(0,2);
						console.log(win);
						
						if(win==1){
							
							gold = bet  * number_str  + gold;
						}else{
							
							gold=gold-bet;
						}
						arr[i]=gold;
						console.log("stat_flet=");

						console.log(gold);



						if(win==1){
							bet2 = gold2 / 100 * percent ;   
							gold2 = bet2  * number_str  + gold2;
						}else{
							bet2 = gold2 / 100 * percent ; 
							gold2=gold2-bet2;
						}
						brr[i]=gold2;
						console.log("den_flet=");
						console.log(gold2);
						bet3=(number_str * forecast - 1)/(number_str-1); //коэфицент келли
						bank_interest = bet3 * 100; //Процент который нужно поставить
						if(win==1){
						 
						bet_b=gold3/100 * bank_interest ; //ставка
						gold3=bet_b * number_str + gold3; //выйгрышь
						
						
					}else{
						bet_b=gold3/100 * bank_interest ;
						gold3=gold3-bet_b;
					}
					grr[i]=gold3;
					console.log("cel=");
					console.log(gold3);

						if (gold3<=0){
						gold3=0;

					}
					if (gold2<=0){
						gold2=0;
					}
					if (gold<=0){
						gold=0;
						bet=0;
					}


			}
			

			for (var i = 0; i <month; i++) {
				console.log(arr[i]);
			}
			for (var i = 0; i <month; i++) {
				console.log(brr[i]);
			
			for (var i = 0; i <month; i++) {
				console.log(grr[i]);
			}	
			gold_str=Math.floor(gold);
			gold2_str=Math.floor(gold2);

			
		/*	for (var i = 0; i <month; i++) {
				var win=random(0,2);
				console.log(win);

				if(win==1){
					bet2 = gold2 / 100 * percent ;   
					gold2 = bet2  * number_str  + gold2;
				}else{
					bet2 = gold2 / 100 * percent ; 
					gold2=gold2-bet;
				}
				brr[i]=gold2;
				console.log(gold2);
			}
			for (var i = 0; i <month; i++) {
				console.log(brr[i]);
			}*/
			
			

			
				////
				
				
				

				/*for (var i = 0; i <month; i++) {
					var win=random(0,2);
					console.log(win);
					
					if(win==1){
				 bet3=(number_str * forecast - 1)/(number_str-1); //коэфицент келли
				bank_interest = bet3 * 100; //Процент который нужно поставить
				bet_b=gold3/100 * bank_interest ; //ставка
				gold3=bet_b + gold3; //выйгрышь
				
				
			}else{
				
				gold3=gold3-bet_b;
			}
			grr[i]=gold3;
			console.log(gold3);
			
		}
		for (var i = 0; i <month; i++) {
				console.log(grr[i]);
			}*/

	 
		gold3_str=Math.floor(gold3);
		document.getElementById("gold").innerHTML = gold_str;
		 document.getElementById("gold2").innerHTML = gold2_str;
		  document.getElementById("gold3").innerHTML = gold3_str;
		///
		//document.getElementById("kel").innerHTML = gold3_str;

}
	/*document.getElementById("fix_flet").innerHTML = gold_str;

	document.getElementById("fix_flet").innerHTML = gold2_str;*/
	var i=month-1;
Highcharts.chart('con', {
    title: {
        text: 'График всех сратегий'
    },

 

    yAxis: {
        title: {
            text: 'Выигрыш '
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 1
        }
    },

    series: [{
        name: 'Статичный флэт',
        data: [arr[0],arr[1], arr[2],arr[3], arr[i-15], arr[i-10], arr[i-5], arr[i]]
    }, {
        name: 'Динамичный флет',
        data: [brr[0],brr[1], brr[2],brr[3], brr[i-15], brr[i-10], brr[i-5], brr[i]]
    }, {
        name: 'Критерий Келли',
        data: [grr[0],grr[1], grr[2],grr[3], grr[i-15], grr[i-10], grr[i-5], grr[i]]
    }]

});
	
}




//фиксируемый флет
function fix_flet(){
			var arr = new Array();
			var bank = Number(document.getElementById("A").value);

			var month = Number(document.getElementById("B").value); //rjk-cnfdjr
				/*var bet = bank / 100; //ставка
				var bookmaker = bet / 100 * 10; //забирает брокер 10%
				var bank = (bet - bookmaker) * number_str * month + bank;*/
			var percent = Number(document.getElementById("D").value);	//процент нашей ставки
		//
			var bookmaker=0;
			var gold = bank;
			bet = bank / 100 * percent ; //фиксированная ставка
			for (var i = 0; i <month; i++) {
						var win=random(0,2);
						console.log(win);
						
						if(win==1){
							
							gold = bet  * number_str  + gold;
						}else{
							
							gold=gold-bet;
						}

						arr[i]=gold;
						console.log("stat_flet=");
						console.log(gold);
						if (gold<=0) {
							gold=0;
						break;
						}
			}

			for (var i = 0; i <month; i++) {
				console.log(arr[i]);
			}
			gold_str=Math.floor(gold);	
			document.getElementById("gold_fix_flet").innerHTML = gold_str;

		var i=month-1;
		Highcharts.chart('con_fix_flet', {
		    title: {
		        text: 'Статичный флет'
		    },

		 

		    yAxis: {
		        title: {
		            text: 'Выигрыш '
		        }
		    },
		    legend: {
		        layout: 'vertical',
		        align: 'right',
		        verticalAlign: 'middle'
		    },

		    plotOptions: {
		        series: {
		            pointStart: 1
		        }
		    },

		    series: [{
		        name: 'Статичный флет',
		        data: [arr[0],arr[1], arr[2],arr[3], arr[i-15], arr[i-10], arr[i-5], arr[i]]
		    }]

		});
}	
		
//диномический флет
function den_flet(){
	var brr = new Array();
	var bank = Number(document.getElementById("P").value);

	var month = Number(document.getElementById("O").value); //rjk-cnfdjr
		/*var bet = bank / 100; //ставка
		var bookmaker = bet / 100 * 10; //забирает брокер 10%
		var bank = (bet - bookmaker) * number_str * month + bank;*/
	var percent = Number(document.getElementById("I").value);	//процент нашей ставки

	var bookmaker=0;
	var bet = 0; //динамическая ставка постоянно меняется


	for (var i = 0; i <month; i++) {
		var win=random(0,2);
		console.log(win);

		if(win==1){
			bet = bank / 100 * percent ;   
			bank = bet  * number_str  + bank;
		}else{
			bet = bank / 100 * percent ; 
			bank=bank-bet;
		}
		brr[i]=bank;
		console.log("den_flet=");
		console.log(bank);
						if (bank<=0) {
							gold=0;
							break;
						}
	}
	for (var i = 0; i <month; i++) {
		console.log(brr[i]);
	}
	
	bank_str=Math.floor(bank);

	document.getElementById("den_flet").innerHTML = bank_str;
	
	var i=month-1;
		Highcharts.chart('con_den_flet', {
		    title: {
		        text: 'Динамичный флет'
		    },

		 

		    yAxis: {
		        title: {
		            text: 'Выигрыш '
		        }
		    },
		    legend: {
		        layout: 'vertical',
		        align: 'right',
		        verticalAlign: 'middle'
		    },

		    plotOptions: {
		        series: {
		            pointStart: 1
		        }
		    },

		    series: [{
		        name: 'Динамичный флет',
		        data: [brr[0],brr[1], brr[2],brr[3], brr[i-15], brr[i-10], brr[i-5], brr[i]]
		    }]

		});
	
}

	


//критерий келли
function kel(){
	var grr = new Array();
	var bank = Number(document.getElementById("bank").value); //банк
		
		var month = Number(document.getElementById("month").value); //число ставок
		var forecast = Number(document.getElementById("forecast").value); //процент

		var bet3=0;
		var gold3=bank;

		for (var i = 0; i <month; i++) {
			var win=random(0,2);
			console.log(win);

			 bet3=(number_str * forecast - 1)/(number_str-1); //коэфицент келли
						bank_interest = bet3 * 100; //Процент который нужно поставить
						if(win==1){
						 
						bet_b=gold3/100 * bank_interest ; //ставка
						gold3=bet_b * number_str + gold3; //выйгрышь
						
						
					}else{
						bet_b=gold3/100 * bank_interest ;
						gold3=gold3-bet_b;
					}
					grr[i]=gold3;
					console.log("cel=");
					console.log(gold3);
					if (gold3<=0){
						gold3=0;
						break;
					}
				}
			
				for (var i = 0; i <month; i++) {
				console.log(grr[i]);
			}	

			
	//gold3_p = Math.abs(gold3); 
	gold3_str=Math.floor(gold3);
	document.getElementById("kel").innerHTML = gold3_str;
	var i=month-1;
		Highcharts.chart('the_kelly_criterion', {
		    title: {
		        text: 'Критерий Келли'
		    },

		 

		    yAxis: {
		        title: {
		            text: 'Выигрыш '
		        }
		    },
		    legend: {
		        layout: 'vertical',
		        align: 'right',
		        verticalAlign: 'middle'
		    },

		    plotOptions: {
		        series: {
		            pointStart: 1
		        }
		    },

		    series: [{
		        name: 'Критерий Келли',
		        data: [grr[0],grr[1], grr[2],grr[3], grr[i-15], grr[i-10], grr[i-5], grr[i]]
		    }]

		});


		
	}
/////////////
//коэфицент 2//
//////////////
function all_bet_2(){
			var arr = new Array();
			var brr = new Array();
			var grr =new Array();
			var bank = Number(document.getElementById("bank_all").value);

			var month = Number(document.getElementById("month_all").value); //rjk-cnfdjr
				/*var bet = bank / 100; //ставка
				var bookmaker = bet / 100 * 10; //забирает брокер 10%
				var bank = (bet - bookmaker) * number_str * month + bank;*/
			var percent = Number(document.getElementById("percent_all").value);	//процент нашей ставки

			var forecast = Number(document.getElementById("forecast_all").value); //наш прогноз
		//
			var bookmaker=0;
			var gold = bank;
			var gold2 = bank;
			var gold3 = bank;
			bet = bank / 100 * percent ; //фиксированная ставка
			var bet2 = 0; //динамическая ставка постоянно меняется
			var bet3 = 0; 
			for (var i = 0; i <month; i++) {
						var win=random(0,2);
						console.log(win);
						
						if(win==1){
							
							gold = bet  * number2_str  + gold;
						}else{
							
							gold=gold-bet;
						}
						arr[i]=gold;
						console.log("stat_flet=");

						console.log(gold);



						if(win==1){
							bet2 = gold2 / 100 * percent ;   
							gold2 = bet2  * number2_str  + gold2;
						}else{
							bet2 = gold2 / 100 * percent ; 
							gold2=gold2-bet2;
						}
						brr[i]=gold2;
						console.log("den_flet=");
						console.log(gold2);
						bet3=(number2_str * forecast - 1)/(number2_str-1); //коэфицент келли
						bank_interest = bet3 * 100; //Процент который нужно поставить
						if(win==1){
						 
						bet_b=gold3/100 * bank_interest ; //ставка
						gold3=bet_b * number2_str + gold3; //выйгрышь
						
						
					}else{
						bet_b=gold3/100 * bank_interest ;
						gold3=gold3-bet_b;
					}
					grr[i]=gold3;
					console.log("cel=");
					console.log(gold3);
					if (gold3<=0){
						gold3=0;
					}

			}
			

			for (var i = 0; i <month; i++) {
				console.log(arr[i]);
			}
			for (var i = 0; i <month; i++) {
				console.log(brr[i]);
			
			for (var i = 0; i <month; i++) {
				console.log(grr[i]);
			}	
			gold_str=Math.floor(gold);
			gold2_str=Math.floor(gold2);

			
		/*	for (var i = 0; i <month; i++) {
				var win=random(0,2);
				console.log(win);

				if(win==1){
					bet2 = gold2 / 100 * percent ;   
					gold2 = bet2  * number_str  + gold2;
				}else{
					bet2 = gold2 / 100 * percent ; 
					gold2=gold2-bet;
				}
				brr[i]=gold2;
				console.log(gold2);
			}
			for (var i = 0; i <month; i++) {
				console.log(brr[i]);
			}*/
			
			

			
				////
				
				
				

				/*for (var i = 0; i <month; i++) {
					var win=random(0,2);
					console.log(win);
					
					if(win==1){
				 bet3=(number_str * forecast - 1)/(number_str-1); //коэфицент келли
				bank_interest = bet3 * 100; //Процент который нужно поставить
				bet_b=gold3/100 * bank_interest ; //ставка
				gold3=bet_b + gold3; //выйгрышь
				
				
			}else{
				
				gold3=gold3-bet_b;
			}
			grr[i]=gold3;
			console.log(gold3);
			
		}
		for (var i = 0; i <month; i++) {
				console.log(grr[i]);
			}*/

		
		gold3_str=Math.floor(gold3);
		document.getElementById("gold_2").innerHTML = gold_str;
		 document.getElementById("gold2_2").innerHTML = gold2_str;
		  document.getElementById("gold3_2").innerHTML = gold3_str;
		///
		//document.getElementById("kel").innerHTML = gold3_str;

}
	/*document.getElementById("fix_flet").innerHTML = gold_str;

	document.getElementById("fix_flet").innerHTML = gold2_str;*/
	var i=month-1;
Highcharts.chart('grafix_all_bet_2', {
    title: {
        text: 'Все стратегии'
    },

 

    yAxis: {
        title: {
            text: 'Выигрыш '
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 1
        }
    },

    series: [{
        name: 'Статичный флэт',
        data: [arr[0],arr[1], arr[2],arr[3], arr[i-15], arr[i-10], arr[i-5], arr[i]]
    }, {
        name: 'Динамичный флет',
        data: [brr[0],brr[1], brr[2],brr[3], brr[i-15], brr[i-10], brr[i-5], brr[i]]
    }, {
        name: 'Критерий Келли',
        data: [grr[0],grr[1], grr[2],grr[3], grr[i-15], grr[i-10], grr[i-5], grr[i]]
    }]

});
	
}




//фиксируемый флет
function fix_flet_2(){
			var arr = new Array();
			var bank = Number(document.getElementById("bank_fix_flet_2").value);

			var month = Number(document.getElementById("month_fix_flet_2").value); //rjk-cnfdjr
				/*var bet = bank / 100; //ставка
				var bookmaker = bet / 100 * 10; //забирает брокер 10%
				var bank = (bet - bookmaker) * number_str * month + bank;*/
			var percent = Number(document.getElementById("percet_fix_flet_2").value);	//процент нашей ставки
		//
			var bookmaker=0;
			var gold = bank;
			bet = bank / 100 * percent ; //фиксированная ставка
			for (var i = 0; i <month; i++) {
						var win=random(0,2);
						console.log(win);
						
						if(win==1){
							
							gold = bet  * number2_str  + gold;
						}else{
							
							gold=gold-bet;
						}

						arr[i]=gold;
						console.log("stat_flet=");
						console.log(gold);
						if (gold<=0){
							gold=0;
							break;
						}
			}

			for (var i = 0; i <month; i++) {
				console.log(arr[i]);
			}
			gold_str=Math.floor(gold);	
			document.getElementById("gold_fix_flet_2").innerHTML = gold_str;

		var i=month-1;
		Highcharts.chart('grafix_fix_flet_2', {
		    title: {
		        text: 'Статичный флэт'
		    },

		 

		    yAxis: {
		        title: {
		            text: 'Выигрыш '
		        }
		    },
		    legend: {
		        layout: 'vertical',
		        align: 'right',
		        verticalAlign: 'middle'
		    },

		    plotOptions: {
		        series: {
		            pointStart: 1
		        }
		    },

		    series: [{
		        name: 'Статичный флэт',
		        data: [arr[0],arr[1], arr[2],arr[3], arr[i-15], arr[i-10], arr[i-5], arr[i]]
		    }]

		});
}	
		
//диномический флет
function den_flet_2(){
	var brr = new Array();
	var bank = Number(document.getElementById("bank_den_flet_2").value);

	var month = Number(document.getElementById("month_den_flet_2").value); //rjk-cnfdjr
		/*var bet = bank / 100; //ставка
		var bookmaker = bet / 100 * 10; //забирает брокер 10%
		var bank = (bet - bookmaker) * number_str * month + bank;*/
	var percent = Number(document.getElementById("percent_den_flet_2").value);	//процент нашей ставки

	var bookmaker=0;
	var bet = 0; //динамическая ставка постоянно меняется


	for (var i = 0; i <month; i++) {
		var win=random(0,2);
		console.log(win);

		if(win==1){
			bet = bank / 100 * percent ;   
			bank = bet  * number2_str  + bank;
		}else{
			bet = bank / 100 * percent ; 
			bank=bank-bet;
		}
		brr[i]=bank;
		console.log("den_flet=");
		console.log(bank);
		if (bank<=0){
				bank=0;
				break;
			}
	}
	for (var i = 0; i <month; i++) {
		console.log(brr[i]);
	}
	
	bank_str=Math.floor(bank);

	document.getElementById("den_flet_2").innerHTML = bank_str;
	
	var i=month-1;
		Highcharts.chart('grafix_con_den_flet', {
		    title: {
		        text: 'Динамичный флет'
		    },

		 

		    yAxis: {
		        title: {
		            text: 'Выигрыш '
		        }
		    },
		    legend: {
		        layout: 'vertical',
		        align: 'right',
		        verticalAlign: 'middle'
		    },

		    plotOptions: {
		        series: {
		            pointStart: 1
		        }
		    },

		    series: [{
		        name: 'Динамичный флет',
		        data: [brr[0],brr[1], brr[2],brr[3], brr[i-15], brr[i-10], brr[i-5], brr[i]]
		    }]

		});
	
}

	


//критерий келли
function kel_2(){
	var grr = new Array();
	var bank = Number(document.getElementById("bank_kel_2").value); //банк
		
		var month = Number(document.getElementById("month_kel_2").value); //число ставок
		var forecast = Number(document.getElementById("forecast_kel_2").value); //процент

		var bet3=0;
		var gold3=bank;

		for (var i = 0; i <month; i++) {
			var win=random(0,2);
			console.log(win);

			 bet3=(number2_str * forecast - 1)/(number2_str-1); //коэфицент келли
						bank_interest = bet3 * 100; //Процент который нужно поставить
						if(win==1){
						 
						bet_b=gold3/100 * bank_interest ; //ставка
						gold3=bet_b * number2_str + gold3; //выйгрышь
						
						
					}else{
						bet_b=gold3/100 * bank_interest ;
						gold3=gold3-bet_b;
					}
					grr[i]=gold3;
					console.log("cel=");
					console.log(gold3);
					if (gold3<=0){
					gold3=0;
					break;
				}
				}
			
				for (var i = 0; i <month; i++) {
				console.log(grr[i]);
			}	

			
	//gold3_p = Math.abs(gold3); 
	gold3_str=Math.floor(gold3);
	document.getElementById("kel_2").innerHTML = gold3_str;
	var i=month-1;
		Highcharts.chart('grafix_the_kelly_criterion_2', {
		    title: {
		        text: 'Критерий Келли'
		    },

		 

		    yAxis: {
		        title: {
		            text: 'Выигрыш '
		        }
		    },
		    legend: {
		        layout: 'vertical',
		        align: 'right',
		        verticalAlign: 'middle'
		    },

		    plotOptions: {
		        series: {
		            pointStart: 1
		        }
		    },

		    series: [{
		        name: 'Критерий Келли',
		        data: [grr[0],grr[1], grr[2],grr[3], grr[i-15], grr[i-10], grr[i-5], grr[i]]
		    }]

		});


		
	}
	
function alerted(){
	//высчитывание коэфицента
	var number=random(0,100);
	var number2=random(0,100);
	if ((number + number2) ==100){
	//букмекер берет 5%
	number= 100 / (number+2.5);
	number2= 100 / (number2 +2.5);
	number_str=number.toPrecision(2);
	number2_str=number2.toPrecision(2);

	document.querySelector('.sum').innerHTML = number_str;
	document.querySelector('.sum2').innerHTML = number2_str;


} else {
	return alerted();
}

}







function viewDiv(){
  document.getElementById("container").style.display = "block";
};

