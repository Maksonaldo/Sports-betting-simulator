$(document).ready(function(){
$('ul.catalog3_tabs3').on('click', 'li:not(.catalog3_tab3_activ3)', function() {
		$(this)
		.addClass('catalog3_tab3_activ3').siblings().removeClass('catalog3_tab3_activ3')
		.closest('div.container').find('div.catalog3_content3').removeClass('catalog3_content3_active3').eq($(this).index()).addClass('catalog3_content3_active3');
	});

	$('.catalog-item_link').each(function(i){
		$(this).on('click', function(e){
			e.preventDefault();
			$('.catalog-item_content').toggleClass()
		})
	})

});


function your_coefficient(){
			var arr = new Array();
			var brr = new Array();
			var grr =new Array();
			var ratio = Number(document.getElementById("ratio").value);//коэффицет
			var bank = Number(document.getElementById("bank_ratio").value);

			var month = Number(document.getElementById("month_ratio").value); //rjk-cnfdjr
				/*var bet = bank / 100; //ставка
				var bookmaker = bet / 100 * 10; //забирает брокер 10%
				var bank = (bet - bookmaker) * number_str * month + bank;*/
			var percent = Number(document.getElementById("percent_ratio").value);	//процент нашей ставки

			var forecast = Number(document.getElementById("forecast_ratio").value); //наш прогноз
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
							
							gold = bet  * ratio  + gold;
						}else{
							
							gold=gold-bet;
						}
						arr[i]=gold;
						console.log("stat_flet=");

						console.log(gold);



						if(win==1){
							bet2 = gold2 / 100 * percent ;   
							gold2 = bet2  * ratio  + gold2;
						}else{
							bet2 = gold2 / 100 * percent ; 
							gold2=gold2-bet2;
						}
						brr[i]=gold2;
						console.log("den_flet=");
						console.log(gold2);
						bet3=(ratio * forecast - 1)/(ratio-1); //коэфицент келли
						bank_interest = bet3 * 100; //Процент который нужно поставить
						if(win==1){
						 
						bet_b=gold3/100 * bank_interest ; //ставка
						gold3=bet_b * ratio + gold3; //выйгрышь
						
						
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
		document.getElementById("gold_3").innerHTML = gold_str;
		 document.getElementById("gold2_3").innerHTML = gold2_str;
		  document.getElementById("gold3_3").innerHTML = gold3_str;
		///
		//document.getElementById("kel").innerHTML = gold3_str;

}
	/*document.getElementById("fix_flet").innerHTML = gold_str;

	document.getElementById("fix_flet").innerHTML = gold2_str;*/
	var i=month-1;
Highcharts.chart('grafix_your_coefficient', {
    title: {
        text: 'График всех стратегий'
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
function your_coefficient_fix_flet(){
			var arr = new Array();
			var ratio = Number(document.getElementById("ratio_fix_flet").value);//коэффицет
			var bank = Number(document.getElementById("ratio_bank_fix_flet").value);

			var month = Number(document.getElementById("ratio_mouth_fix_flet").value); //rjk-cnfdjr
				/*var bet = bank / 100; //ставка
				var bookmaker = bet / 100 * 10; //забирает брокер 10%
				var bank = (bet - bookmaker) * number_str * month + bank;*/
			var percent = Number(document.getElementById("ratio_percent_fix_flet").value);	//процент нашей ставки
		//
			var bookmaker=0;
			var gold = bank;
			bet = bank / 100 * percent ; //фиксированная ставка
			for (var i = 0; i <month; i++) {
						var win=random(0,2);
						console.log(win);
						
						if(win==1){
							
							gold = bet  * ratio  + gold;
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
			document.getElementById("your_coefficient_fix_flet").innerHTML = gold_str;

		var i=month-1;
		Highcharts.chart('grafix_your_coefficient_fix_flet', {
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
function your_coefficient_den_flet(){
	var brr = new Array();
	var ratio = Number(document.getElementById("ratio_den_flet").value);//коэффицет
	var bank = Number(document.getElementById("ratio_bank_den_flet").value);

	var month = Number(document.getElementById("ratio_mouth_den_flet").value); //rjk-cnfdjr
		/*var bet = bank / 100; //ставка
		var bookmaker = bet / 100 * 10; //забирает брокер 10%
		var bank = (bet - bookmaker) * number_str * month + bank;*/
	var percent = Number(document.getElementById("ratio_percent_den_flet").value);	//процент нашей ставки

	var bookmaker=0;
	var bet = 0; //динамическая ставка постоянно меняется


	for (var i = 0; i <month; i++) {
		var win=random(0,2);
		console.log(win);

		if(win==1){
			bet = bank / 100 * percent ;   
			bank = bet  * ratio  + bank;
		}else{
			bet = bank / 100 * percent ; 
			bank=bank-bet;
		}
		brr[i]=bank;
		console.log("den_flet=");
		console.log(bank);
					if (bank<=0) {
						bank=0;
						break;
					}
	}
	for (var i = 0; i <month; i++) {
		console.log(brr[i]);
	}
	
	bank_str=Math.floor(bank);

	document.getElementById("your_coefficient_den_flet").innerHTML = bank_str;
	
	var i=month-1;
		Highcharts.chart('grafix_your_coefficient_den_flet', {
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
function your_coefficient_kel(){
	var grr = new Array();
	var ratio = Number(document.getElementById("ratio_kel").value);//коэффицет
	var bank = Number(document.getElementById("bank_ratio_kel").value); //банк
		
		var month = Number(document.getElementById("month_ratio_kel").value); //число ставок
		var forecast = Number(document.getElementById("forecast_ratio_kel").value); //процент

		var bet3=0;
		var gold3=bank;

		for (var i = 0; i <month; i++) {
			var win=random(0,2);
			console.log(win);

			 bet3=(ratio * forecast - 1)/(ratio-1); //коэфицент келли
						bank_interest = bet3 * 100; //Процент который нужно поставить
						if(win==1){
						 
						bet_b=gold3/100 * bank_interest ; //ставка
						gold3=bet_b * ratio + gold3; //выйгрышь
						
						
					}else{
						bet_b=gold3/100 * bank_interest ;
						gold3=gold3-bet_b;
					}
					grr[i]=gold3;
					console.log("cel=");
					console.log(gold3);
					if (gold3<=0) {
						gold3=0;
						break;
					}
				}
			
				for (var i = 0; i <month; i++) {
				console.log(grr[i]);
			}	

			
	//gold3_p = Math.abs(gold3); 
	gold3_str=Math.floor(gold3);
	document.getElementById("your_coefficient_kel").innerHTML = gold3_str;
	var i=month-1;
		Highcharts.chart('your_coefficient_kel_the_kelly_criterion', {
		    title: {
		        text: 'Критерий Келли'
		    },

		 

		    yAxis: {
		        title: {
		            text: 'Выигрыш'
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