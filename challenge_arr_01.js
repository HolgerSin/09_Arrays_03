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
let stack =[];

// Ziel --> "<html><head></head><body><p></p></body></html>"; 
 
 
// Modul: HTML-String erzeugen | Test
ausgabe(getHTML());

function getHTML(){
	
    let htmlStr = "";

    for (let i = 0; i < tags.length; i++) {
        
        if (isOpenTag(tags[i])) {
            htmlStr += getTag(tags[i], "open");
        } else {
            htmlStr += getTag(tags[i], "close");
        }
        
          
    }

    return htmlStr;
}

// ausgabe(isOpenTag("html"));
// ausgabe(isOpenTag("test"));
// ausgabe(isOpenTag("bla"));
// ausgabe(isOpenTag("bla"));
// ausgabe(isOpenTag("test"));
function isOpenTag(tag) {

    const cond = (!stack.includes(tag));
    // const cond = (stack.indexOf(tag) == -1);
    // stack.includes
    if (cond) {
        stack.push(tag);
        ausgabe(stack);
        return true;
        
    } else {
        stack.pop(tag);
        ausgabe(stack);
        return false;
    }
    
}

// ausgabe(getTag("p","open"));
// ausgabe(getTag("p","close"));
function getTag(param, flag) {

    switch (flag) {
        case "open":
            return getTab(stack.length-1) + controls[0] + param + controls[2] + "\n";
        case "close":
            return getTab(stack.length) + controls[1] + param + controls[2] + "\n";
        default:
            return "#!?";
    }
}

function getTab(tabCount) {

    let myTab ="";
    for (let index = 0; index < tabCount; index++) {

        myTab += "\t";
    }
    return myTab;
}

// Modul: Ausgabe | Test
// ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}