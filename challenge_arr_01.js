/*********   CODE CHALLENGE HTML **********/

/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
einer HTML-Seite ausgibt:
<html><head></head><body><p></p></body></html>
Verwenden Sie dafür die untenstehenden Arrays
*/

const controls = ["<", "</", ">"];
const tags = ["html","head","head","body","h1","h1","p","p","p","p","ul","li","li","li","li","ul","body","html"];

// Ziel --> "<html><head></head><body><p></p></body></html>"; 
 
 
// Modul: HTML-String erzeugen | Test
// ausgabe(getHTML());
function getHTML(){
	
    let htmlStr = "";

    for (let i = 0; i < tags.length; i++) {
        
        if (isOpenTag()) {
            htmlStr += getTag(tags[i], "open");
        } else {
            htmlStr += getTag(tags[i], "close");
        }
        
          
    }

    return htmlStr;
}

function isOpenTag(params) {
    return !true;
}

// ausgabe(getTag("p","open"));
// ausgabe(getTag("p","close"));
function getTag(paramTag, flag) {

    switch (flag) {
        case "open":
            return controls[0] + paramTag + controls[2];
        case "close":
            return controls[1] + paramTag + controls[2];
        default:
            return "#!?";
    }
   

   
    
    
}

// Modul: Ausgabe | Test
// ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}