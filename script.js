let googleMapsAPIKey = "AIzaSyAKeud47fDrKKEOtY9UDxjp4tcM5qx9ZVE";
// let geoDataSourceAPI = "";
let geoCodioAPIKey = "11f688a2bb8200b2fa8768d2a051d225fd56868";
let exchangeRateAPIKey = "3d1b0462d3f12a057c13eb57";
let destination = "Tucson, AZ";
let geoCodioURL = "https://api.geocod.io/v1.6/geocode?q=" + destination + "&api_key=" + geoCodioAPIKey;
let exchangeURL = "https://v6.exchangerate-api.com/v6/" + exchangeRateAPIKey + "/latest/USD"
let userSearch = "";
let latitude = 0;
let longitude = 0;
// exchange rate AJAX call consoles out repsonse
$.ajax({
    url: exchangeURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});
// this consoles out the response for the location searched
$.ajax({
    url: geoCodioURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});
// based on the call I made just using Tucson, AZ we may be able to reference the lat and long by going results.input.results.0.location[0] for the lat and for the long results.input.results.0.location[1](this may require more digging and checking for consistency to the same results but geoCod.io says that they always list the closest result to the search query at the top of the response.)




// When the user starts they will enter in the name of their destination. (Might want to use the search box we are using for hw6 for this part) 




// After they enter in the destination we will use their input to request information from GeoCod.io to get the coordinates of their destination. (if response consistently returns the same pathing to the lat and long then we are golden and will just need to change the variables for latitude and longitude to equal the response.)




// Using the coordinates of their destination as search criteria for GoogleMaps' API we will request the map of the destination.
let map = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&key=" + googleMapsAPIKey;

// (https://www.google.com/maps/embed/v1/MODE?key=YOUR_API_KEY&parameters) this should generate a map based on the information in googles API key. (information on MODE and parameters can be found at this link https://developers.google.com/maps/documentation/embed/get-started#optional_parameters)



// Using the name of the destination we will also send a request to the Currency Exchange API for the current exchange rate assuming US dollars(maybe have option to choose original currency.)






// The exchange rate of 1USD to local currency will be displayed.







// Time providing we will then also provide the user with an idea of what they can expect to spend on common goods, such as gallon of gas/milk, A big Mac, and maybe something else entertainment based(can only think of movies of the top but thats not terribly relevant rightnow).


// Paris, France|| Rome, Italy|| Cancun, Mexico|| Montego Bay, Jamaica|| Amsterdam, Netherlands|| Kyoto, Japan|| Ushuaia, Argentina|| Cairo, Egypt|| Dubai, United Arab Emirates|| Singapore, Singapore

let currency = new Object{
mexico : "MXN",
jamaica : "JMD",
italy : "EUR",
france : "EUR",
netherlands : "EUR",
japan : "JPY",
argentina :	"ARS",
egypt : "EGP",
unitedArabEmirates : "AED",
singapore :"SGD",
)
let currency = new Object{
    // Afghanistan	AFN	؋
    // Armenia		AMD	դր
	// Azerbaijan	AZN	₼
    // Bahrain		BHD	.د.ب
	// Bangladesh	BDT	৳
    // Bhutan		BTN	Nu.
    // Brunei		BND	$
	// Cambodia	KHR	៛
    // China	    CNY	¥
    // Cyprus		CYP	£
    // Georgia		GEL	ლ
 	// India		INR	₹
    // Indonesia	IDR	Rp
 	// Iran		IRR	﷼
    // Iraq		IQD	ع.د
	// Israel		ILS	₪
    // Japan		JPY	¥
    // Jordan		JOD	د.ا
	// Kazakhstan	KZT	лв
   	// Kuwait	    KWD	د.ك
   	// Kyrgyzstan	KGS	лв
   	// Laos		LAK	₭
    // Lebanon		LBP	£
    // Malaysia	MYR	RM
   	// Maldives	MVR	Rf
   	// Mongolia	MNT	₮
    // Myanmar 	MMK	K
    // Nepal		NPR	₨
    // North Korea	KPW	₩
    // Oman		OMR	﷼
    // Pakistan	PKR	₨
    // Palestine	JOD	د.ا
    // Philippines	PHP	₱
    // Qatar		QAR	﷼
    // Russia	    RUB	₽
    // Saudi Arabia	SAR	﷼
    // Singapore		SGD	$
    // South Korea		KRW	₩
    // Sri Lanka		LKR	₨
    // Syria		SYP	£
    // Taiwan		TWD	NT$
    // Tajikistan		TJS	ЅM
    // Thailand	THB	฿
    // Timor - Leste	USD	$
    // Turkey		TRY	₺
    // Turkmenistan	TMM	T
    // United Arab Emirates	AED	د.إ
    // Uzbekistan	UZS	лв
    // Vietnam		VND	₫
    // Yemen	Yemeni Rial	YER	﷼
    // Algeria	Algerian Dinar	DZD	دج
    // Angola	Angolan Kwanza	AOA	Kz
    // Benin	West African CFA	XOF	CFA
    // Botswana	Botswana Pula	BWP	P
    // Burkina Faso	West African CFA	XOF	CFA
    // Burundi	Burundian Franc	BIF	FBu
    // Cabo Verde	Cape Verde Escudo	CVE	$
    // Cameroon	Central African CFA	XAF	FCFA
    // Central African Republic(CAR)	Central African CFA	XAF	FCFA
    // Chad	Central African CFA	XAF	FCFA
    // Comoros	Comorian Franc	KMF	CF
    // Democratic Republic of the Congo	Congolese franc	CDF	FC
    // Republic of the Congo	Central African CFA	XAF	FCFA
    // Cote d'Ivoire	West African CFA	XOF	CFA
    // Djibouti	Djiboutian Franc	DJF	Fdj
    // Egypt	Egyptian Pound	EGP	£
    // Equatorial Guinea	Central African CFA	XAF	FCFA
    // Eritrea	Eritrean Nakfa	ERN	ናቕፋ
    // Ethiopia	Ethiopian Birr	ETB	ብር
    // Gabon	Central African CFA	XAF	FCFA
    // Gambia	Gambian Dalasi	GMD	D
    // Ghana	Ghanaian Cedi	GHC	GH₵
    // Guinea	Guinean Franc	GNF	FG
    // Guinea - Bissau	West African CFA	XOF	CFA
    // Kenya	Kenyan Shilling	KES	KSh,
    // Lesotho	Lesotho Loti	LSL	L
    // Liberia	Liberian Dollar	LRD	$
    // Libya	Libyan Dinar	LYD	ل.د
    // Madagascar	Malagasy Ariary	MGA	Ar
    // Malawi	Malawian Kwacha	MWK	MK
    // Mali	West African CFA	XOF	CFA
    // Mauritania	Mauritanian Ouguiya	MRO	UM
    // Mauritius	Mauritian Rupee	MUR	₨
    // Morocco	Moroccan Dirham	MAD	DH
    // Mozambique	Mozambican Metical	MZN	MT
    // Namibia	Namibian Dollar	NAD	$
    // Niger	West African CFA	XOF	CFA
    // Nigeria	Nigerian Naira	NGN	₦
    // Rwanda	Rwandan Franc	RWF	FRw
    // Sao Tome and Principe
    // Sao Tome Dobra	STD	Db
    // Senegal West African CFA	XOF	CFA
    // Seychelles Seychelles Rupee	SCR	₨
    // Sierra Leone Sierra Leonean Leone	SLL	Le
    // Somalia Somali Shilling	SOS	S
	// South Africa South African Rand	ZAR	R
    // South Sudan South Sudanese pound	SSP	£
    // Sudan Sudanese pound	SDG	SD
    // Swaziland Swazi Lilangeni	SZL	E
    // Tanzania Tanzanian Shilling	TZS	TSh
    // Togo West African CFA	XOF	CFA
	// Tunisia Tunisian Dinar	TND	د.ت
	// Uganda Ugandan Shilling	UGX	USh
	// Zambia Zambian Kwacha	ZMK	ZK
	// Zimbabwe Zimbabwean Dollar	ZWD	$
	// Albania	Albanian Lek	ALL	Lek
    // Andorra	European Euro	EUR	€
    // Armenia Armenian Dram	AMD	դր.
    // Austria European Euro	EUR	€
    // Azerbaijan Azerbaijani Manat	AZN	₼
    // Belarus Belarusian Ruble	BYR	Br
    // Belgium European Euro	EUR	€
    // Bosnia and Herzegovina Bosnia - Herzegovina Convertible Mark	BAM	KM
    // Bulgaria Bulgarian Lev	BGN	лв
    // Croatia Croatian Kuna	HRK	kn
    // Cyprus Cypriot Pound	CYP	£
    // Czech Republic Czech Koruna	CZK	Kč
    // Denmark Danish Krone	DKK	kr.
    // Estonia Estonian Kroon	EEK	EEK
    // Finland European Euro	EUR	€
    // France European Euro	EUR	€
    // Georgia Georgian Lari	GEL	ლ
    // Germany European Euro	EUR	€
    // Greece European Euro	EUR	€
    // Hungary Hungarian Forint	HUF	Ft
    // Iceland	Icelandic Krona	ISK	kr
    // Ireland European Euro	EUR	€
    // Italy European Euro	EUR	€
    // Kazakhstan	Kazakhstani Tenge	KZT	лв
    // Kosovo Euro	EUR	€
    // Latvia Latvian Lats	LVL	Ls
    // Liechtenstein Swiss Franc	CHF	CHF
    // Lithuania Lithuanian Litas	LTL	Lt
    // Luxembourg European Euro	EUR	€
    // Macedonia Macedonian Denar	MKD	ден
    // Malta Maltese Lira	MTL	₤
    // Moldova Moldovan Leu	MDL	L
    // Monaco European Euro	EUR	€
    // Montenegro European Euro	EUR	€
    // Netherlands European Euro	EUR	€
    // Norway Norwegian Krone	NOK	kr
    // Poland Polish Zloty	PLN	zł
    // Portugal European Euro	EUR	€
    // Romania Romanian Leu	RON	lei
    // Russia Russian Ruble	RUB	₽
    // San Marino European Euro	EUR	€
    // Serbia Serbian Dinar	RSD	Дин.
    // Slovakia Slovak Koruna	SKK	Sk
    // Slovenia European Euro	EUR	€
    // Spain European Euro	EUR	€
    // Sweden Swedish Krona	SEK	kr
    // Switzerland Swiss Franc	CHF	CHF
    // Turkey Turkish New Lira	TRY	₺
    // Ukraine Ukrainian Hryvnia	UAH	₴
    // United Kingdom United Kingdom Pound Sterling	GBP	£
    // Vatican City European Euro	EUR	€
    // Antigua and Barbuda East Caribbean Dollar	XCD	$
    // Bahamas Bahamian Dollar	BSD	$
    // Barbados Barbados Dollar	BBD	$
    // Belize Belize Dollar	BZD	BZ$
    // Canada Canadian Dollar	CAD	$
    // Costa Rica Costa Rican Colon	CRC	₡
    // Cuba Cuban Convertible Peso	CUC	$
    // Dominica East Caribbean Dollar	XCD	$
    // Dominican Republic Dominican Peso	DOP	RD$
    // El Salvador United States Dollar	USD	$
	// Grenada East Caribbean Dollar	XCD	$
	// Guatemala Guatemalan Quetzal	GTQ	Q
	// Haiti Haitian Gourde	HTG	G
	// Honduras Honduran Lempira	HNL	L
	// Jamaica Jamaican Dollar	JMD	J$
	// Mexico Mexican Peso	MXN	$
	// Nicaragua Nicaraguan Córdoba	NIO	C$
	// Panama Panamanian Balboa	PAB	B /.
	// Saint Kitts and Nevis East Caribbean Dollar	XCD	$
	// Saint Lucia East Caribbean Dollar	XCD	$
	// Saint Vincent and the Grenadines East Caribbean Dollar	XCD	$
	// Trinidad and Tobago Trinidad and Tobago Dollar	TTD	TT$
	// United States of America United States Dollar	USD	$
    // Argentina	Argentine Peso	ARS	$
    // Bolivia Bolivian Boliviano	BOB	$b
    // Brazil Brazilian Real	BRL	R$
    // Chile	Chilean Peso	CLP	$
	// Colombia Colombian Peso	COP	$
    // Ecuador United States Dollar	USD	$
    // Guyana	Guyanese Dollar	GYD	$
	// Paraguay Paraguay Guarani	PYG	Gs
    // Peru Peruvian Nuevo Sol	PEN	S /.
    // Suriname Suriname Dollar	SRD	$
    // Uruguay Uruguayan peso	UYU	$U
    // Venezuela Venezuelan Bolivar	VEF	Bs
    // Australia Australian Dollar	AUD	$
    // Fiji Fiji Dollar	FJD	$
    // Kiribati Australian Dollar	AUD	$
    // Marshall Islands United States Dollar	USD	$
    // Micronesia United States Dollar	USD	$
    // Nauru Australian Dollar	AUD	$
    // New Zealand New Zealand Dollar	NZD	$
    // Palau United States Dollar	USD	$
    // Papua New Guinea
    // Papua New Guinea Kina	PGK	K
	// Samoa Samoan Tala	WST	WS$
    // Solomon Islands Solomon Islands Dollar	SBD	$
    // Tonga Tongan Pa'Anga	TOP	T$
    // Tuvalu Australian Dollar	AUD	$
    // Vanuatu Vanuatu Vatu	VUV	VT
  };