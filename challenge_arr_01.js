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
let stack = [];


// Ziel --> "<html><head></head><body><p></p></body></html>"; 
 
 
// Modul: HTML-String erzeugen | Test
ausgabe(getHTML());
function getHTML(){
	
    let htmlStr = "";
    // <tag> --> open
    // </tag> --> close

    for (let i = 0; i < tags.length; i++) {
        if (isOpenTag(tags[i])) {
            htmlStr += getTag(tags[i],"open");
        } else {
            htmlStr += getTag(tags[i],"close");
        }
    }

    return htmlStr; 
  
}

// Modul: open || close ?
// ausgabe(isOpenTag("html"));
// ausgabe(isOpenTag("head"));
// ausgabe(isOpenTag("head"));
// ausgabe(isOpenTag("body"));
function isOpenTag(tag) {

    // wenn tag noch nicht im stack -> push() / true
    // wenn tag schon im stack -> pop() / false

    const cond = (stack.indexOf(tag) == - 1); // tag ist neu!
    //const cond = (tag != stack[stack.length -1]); // tag liegt oben!

    if (cond) {
        stack.push(tag);
        ausgabe(stack);
        return true;
    } else {
        stack.pop();
        ausgabe(stack);
        return false;
    }
 
}

// Modul: Zusammenbau: <tagStr> --> Tests:
// ausgabe(getTag("p","open"));
// ausgabe(getTag("p","close"));
// ausgabe(getTag("p","irgendwas"));
function getTag(tag,flag) {
    switch (flag) {
        case "open":
            // return controls[0] + tag + controls[2] + "\n";
            return getTab(stack.length - 1) + controls[0] + tag + controls[2] + "\n";
        case "close":
            // return controls[1] + tag + controls[2] + "\n";
            return getTab(stack.length) + controls[1] + tag + controls[2] + "\n";
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
//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}
