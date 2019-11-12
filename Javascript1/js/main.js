
let knygos =
[
	{
			'Grožinė':[{

				isbn: 52648,
				kaina: 13.59,
				leidimoMetai: 2018,
				pavadinimas: "Pasakų šaly",
				puslapiuSkaicius: 236
		},
		{
				isbn: 59231,
				kaina: 15.69,	
				leidimoMetai: 2015,
				pavadinimas: "Žaidimų aikštelė",
				puslapiuSkaicius: 365
		},
		{
				isbn: 69853,
				kaina: 6.95,
				leidimoMetai: 1997,
				pavadinimas: "Nežinomasis",
				puslapiuSkaicius: 302
		},
		{
				isbn: 89564,
				kaina: 12.09,
				leidimoMetai: 2005,
				pavadinimas: "Oras",
				puslapiuSkaicius: 400
		}
		]
	},
	{
			'Romanas':[{

				isbn: 54812,
				kaina: 13.55,
				leidimoMetai: 2019,
				pavadinimas: "Dviračių karalius",
				puslapiuSkaicius: 569
		},
		{
				isbn: 69853,
				kaina: 7.77,
				leidimoMetai: 2016,
				pavadinimas: "Tarp dviejų pasaulių",
				puslapiuSkaicius: 453
		},
		{
				isbn: 69852,
				kaina: 6.66,
				leidimoMetai: 2009,
				pavadinimas: "Melo pradžiamokslis",
				puslapiuSkaicius: 598
		},
		{
				isbn: 69420,
				kaina: 5.55,
				leidimoMetai: 2018,
				pavadinimas: "Laukiniai arkliai",
				puslapiuSkaicius: 689
		}
		]
	},
	{
			'Drama':[{

				isbn: 78512,
				kaina: 8.60,
				leidimoMetai: 1999,
				pavadinimas: "Nuobodulys",
				puslapiuSkaicius: 780
		},
		{
				isbn: 84562,
				kaina: 5.99,
				leidimoMetai: 2001,
				pavadinimas: "Toliau nuo čia",
				puslapiuSkaicius: 326
		},
		{
				isbn: 25461,
				kaina: 10.99,
				leidimoMetai: 2018,
				pavadinimas: "Pabaigos pradžia",
				puslapiuSkaicius: 245
		},
		{
				isbn: 35629,
				kaina: 12.50,
				leidimoMetai: 2017,
				pavadinimas: "Obuolys",
				puslapiuSkaicius: 560
		}
		]
	}
]

//------------------------1.1------------------------------------------------------------------
for(kategorija of knygos){
	for(duomenys in kategorija){
		for(apie in duomenys){
			for(savybe in kategorija[duomenys][apie]){
				if(savybe == 'leidimoMetai'){
					if(kategorija[duomenys][apie][savybe] == 2018){
						for(atsakymas in kategorija[duomenys][apie]){
							console.log(atsakymas + " : " + kategorija[duomenys][apie][atsakymas])
						}
					}
				}
			}
		}
	}
}	
//-------------------------1.2-------------------------------------------------------------------