var People = 7000000000
var Money = 2000;
var VaccinesMade = 0;
var VaccinesGiven = 0;
var TotalVaccines = 0;
var AutoVaccine = 0;

var endGame = 0;

//Support 
var VMachineBought = 0;
var VFacBought = 0;
var VDisBought = 0;
var VMassBought = 0;
var VCompanyBought = 0;
var Ve1emBought = 0;
var VPortalBought = 0;

////////////////////
//// Awareness /////
////////////////////

var Awareness = 0;

////////////////////
////// Timer ///////
////////////////////

var CountdownToe1em = 120000;
function e1emTimer() {
    document.getElementById('timer').innerHTML = CountdownToe1em + " minutes | Vaccines currently in store: " +  VaccinesMade + " | Vaccines Given out: " + VaccinesGiven + " | Money: $" + Money;
    if (CountdownToe1em == 0) {
        clearInterval(countdownTimer);
    } else {
        CountdownToe1em--;
    }
}
var countdownTimer = setInterval('e1emTimer()', 10);
window.onload = e1emTimer;



////////////////////
// Basic Functions//
////////////////////

function Vaccine() {

VaccinesMade = VaccinesMade + 1;

}
function GiveVaccine() {

if (Money >= 10) {
var addup = VaccinesMade;
VaccinesGiven = addup + VaccinesGiven;
VaccinesMade = 0;
Money = Money + (addup*0.05);
Money = Money - 10;
}

}


////////////////////
// Buying Support///
////////////////////

function VaccineMachine() {

	if (Money >= 5) {
	
	VMachineBought = VMachineBought + 1;
		Money = Money - 5;
	}
}
function VaccineFactory() {

	if (Money >= 50) {
	
	VFacBought = VFacBought + 1;
		Money = Money - 50;
	}
}
function VaccineDispenser() {

	if (Money >= 200) {
	
	VDisBought = VDisBought + 1;
		Money = Money - 200;
	}
}
function VaccineMMS() {

	if (Money >= 10000) {
	VMassBought = VMassBought + 1;
	Money = Money - 10000;
	}
}
function VaccineCompany() {

	if (Money >= 50000) {
	VCompanyBought = VCompanyBought + 1;
	Money = Money - 50000;
	}
}
function Vaccinee1emMine() {

	if (Money >= 1000000) {
	Ve1emBought = Ve1emBought + 1;
	Money = Money - 1000000;
	}
}
function VaccinePortal() {

	if (Money >= 30000000) {
	VPortalBought = VPortalBought + 1;
	Money = Money - 30000000;
	}
}

////////////////////
// Support Timer////
////////////////////

function Machine() {

	if (VMachineBought > 0) {
	VaccinesMade = VaccinesMade + (VMachineBought*1);
	}
	
}
var MachineStart = setInterval('Machine()', 4000);
Window.onload = MachineStart;

function Factory() {

	if (VFacBought > 0) {
	VaccinesMade = VaccinesMade + (VFacBought*1);
	}
	
}
var FactoryStart = setInterval('Factory()', 250);
Window.onload = FactoryStart;

function Dispenser() {

	if (VDisBought > 0) {
	VaccinesMade = VaccinesMade + (VDisBought*2);
	}
	
}
var DispenserStart = setInterval('Dispenser()', 100);
Window.onload = DispenserStart;

function MMS() {

	if (VMassBought > 0) {
	VaccinesMade = VaccinesMade + (VMassBought*10);
	}
	
}
var MMSStart = setInterval('MMS()', 10);
Window.onload = MMSStart;

function Company() {

	if (VCompanyBought > 0) {
	VaccinesMade = VaccinesMade + (VCompanyBought*26);
	}
	
}
var CompanyStart = setInterval('Company()', 5);
Window.onload = CompanyStart;

function e1emMining() {

	if (Ve1emBought > 0) {
	VaccinesMade = VaccinesMade + (Ve1emBought*110);
	}
	
}
var e1emStart = setInterval('e1emMining()', 1);
Window.onload = e1emStart;

function Portal() {

	if (VPortalBought > 0) {
	VaccinesMade = VaccinesMade + (VPortalBought*3200);
	}
	
}
var PortalStart = setInterval('Portal()', 1);
Window.onload = PortalStart;

function Aware() {

	if (Awareness > 0) {
	Money = Money + Awareness;
	}
	
}
var Charity = setInterval('Aware()', 5000);
Window.onload = Charity;

function Game() {

	if (CountdownToe1em === 0 && endGame === 0) {
		if (VaccinesGiven >= People) {
		alert("You have saved all the people of the world! e1em is now going to spread to every single person on earth...but do not worry! Everyone has been vaccined and is safe! Congratulations, you have won the game!");
		endGame = 1;
			
		}
	else {
	var Unsafe = People - VaccinesGiven;
	alert("Oh, you have not saved all the people of the world! There are still " + Unsafe + " people who have not received treatment. e1em is now going to spread to every single person on earth...and the amount of deaths are " + Unsafe + "! Better luck next time you play the game!");
	endGame = 1;
		
	}
	
	}
	
}
var Banana = setInterval('Game()', 1);
Window.onload = Banana;


////////////////////
/// Fundraising ////
////////////////////

function Poster() {

	if (Money >= 50) {
	Money = Money - 50;
	Awareness = Awareness + 1;
	}
}
function Magazine() {

	if (Money >= 200) {
	Money = Money - 200;
	Awareness = Awareness + 8;
	
	}
}
function Newspaper() {

	if (Money >= 4000) {
	Money = Money - 4000;
	Awareness = Awareness + 200;
	
	}
}
function TVAdvert() {
if (Money >= 15000) {
	Money = Money - 15000;
	Awareness = Awareness + 1000;
	}
}
function SenateTalk() {
if (Money >= 150000) {
	Money = Money - 150000;
	Awareness = Awareness + 12000;
	}
	}
function UNDeclaration() {
if (Money >= 1200000) {
	Money = Money - 1200000;
	Awareness = Awareness + 100000;
	}
	}
function Religion() {
if (Money >= 10000000) {
	Money = Money - 10000000;
	Awareness = Awareness + 1200000;
	}
	}
	
function Galaxy() {
if (Money >= 100000000) {
	Money = Money - 100000000;
	Awareness = Awareness + 15000000;
	}
	}
	
	
	
function Save() {

alert("Money = " + Money + ";\nVaccinesMade = " + VaccinesMade + ";\nVaccinesGiven = " + VaccinesGiven+ ";\nTotalVaccines = " + TotalVaccines  + ";\nVMachineBought = " + VMachineBought + ";\nAwareness = " + Awareness + ";\nVFacBought = " + VFacBought + ";\nVDisBought = " + VDisBought + ";\nVMassBought = " + VMassBought + ";\nVCompanyBought = " + VCompanyBought + ";\nVe1emBought = " + Ve1emBought + ";\nVPortalBought = " + VPortalBought+ ";\nCountdownToe1em = " + CountdownToe1em + ";\nalert(\"Save succeeded\");");
}

function Pause() {
	
	alert("Game Paused. Press OK to resume game.")
}
	
alert("Welcome to the Stop e1em Game! You have 120,000 minutes in gametime to save all 7 billion people on earth from e1em! Any person you don't give vaccine to will die once the time is up! Good luck! Save the world from e1em! You start with $2000. Use it wisely.");
alert("E1EM is a dangerous virus and is an abbreviation for Enthusiastic 1 Expordelli Maximus. The disease will spread to every single person in 120,000 minutes in gametime and will kill every single person that does not receive a vaccine from that time.");
alert("BUY VACCINES. GIVE VACCINES. REPEAT. HAVE FUN OK BYE")
