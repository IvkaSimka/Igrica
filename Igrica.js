var korisnikovIzbor = prompt ("Izaberi papir, kamen ili makaze");
var racunarKaze = "makaze"

if (korisnikovIzbor == "papir") {
	if (racunarKaze == "kamen") {
		console.log("Pobedio si")
	} else if (racunarKaze == "makaze") {
		console.log("izgubio si");
	}
}
if (korisnikovIzbor == "kamen") {
	if (racunarKaze == "makaze") {
		console.log("Pobedio si")
	} else if (racunarKaze == "papir") {
		console.log("izgubio si");
	}
}
if (korisnikovIzbor == "makaze") {
	if (racunarKaze == "papir") {
		console.log("Pobedio si")
	} else if (racunarKaze == "kamen") {
		console.log("izgubio si");
	}
}