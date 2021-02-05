
//////////////////////////////////////////////////////////////////////////////////////////////
///////////////                                                       ////////////////////////
///////////////            BULLYING TASK - FOR MAUD AND WOUTER        ///////////////////////
///////////////                                                       ////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// setting up slider style in html head element
//setting up sliders thumb style in html head (https://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript)
sliderThumbStyle = ".slider_inside1::-webkit-slider-thumb {-webkit-appearance:none;appearance:none;width:15px;height:25px;background:black;cursor:pointer;visibility:visible;}";
var css = sliderThumbStyle,
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
head.appendChild(style);

style.type = 'text/css';
if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

//////////////////////////////////////////////////////////////////////////////////////////////
///////////////                                                       ////////////////////////
///////////////            SETTING UP VARIABLES                        ///////////////////////
///////////////                                                       ////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

// Set timer to track entire task durtion // 
taskStart = now();

// console.log shortcut
var cs = console.log;

//next button size and location
var buttonBlockSize = [14, 5];
var buttonLocationHeight = 80;

var stimuli = ["blue_man_ticket_0.svg", "blue_man_ticket_1.svg", "blue_man_ticket_2.svg", "blue_man_ticket_3.svg", "blue_man_ticket_4.svg", "blue_man_ticket_5.svg", "blue_man_ticket_6.svg", "blue_man_ticket_7.svg", "blue_man_ticket_8.svg", "blue_man_ticket_9.svg", "blue_man_ticket_10.svg"]

var lb = "<span style = 'color: #4875BA;'>leerling blauw</span>";
var Lb = "<span style = 'color: #4875BA;'>Leerling blauw</span>";

var lo = "<span style='color: #E77D3A;'>leerling oranje</span>";
var Lo = "<span style='color: #E77D3A;'>Leerling oranje</span>";

//////////////////////////////////////////////////////////////////////////////////////////////
///////////////                                                       ////////////////////////
///////////////            FUNCTIONS                                   ///////////////////////
///////////////                                                       ////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////
//   THUMB FUNCTION                   //
////////////////////////////////////////

//function to activate thumb
function thumb(state) {
    if (state === "visible black") {
        // setting up slider style in html head element
        //setting up sliders thumb style in html head (https://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript)
        sliderThumbStyle = ".slider_inside::-webkit-slider-thumb {-webkit-appearance:none;appearance:none;width:15px;height:25px;background:black;cursor:pointer;visibility:visible;}";
        var css = sliderThumbStyle,
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        head.appendChild(style);

        style.type = 'text/css';
        if (style.styleSheet) {
            // This is required for IE8 and below.
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    } else if (state === "visible grey") {
        // setting up slider style in html head element
        //setting up sliders thumb style in html head (https://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript)
        sliderThumbStyle = ".slider_inside::-webkit-slider-thumb {-webkit-appearance:none;appearance:none;width:15px;height:25px;background:grey;cursor:pointer;visibility:visible;}";
        var css = sliderThumbStyle,
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        head.appendChild(style);

        style.type = 'text/css';
        if (style.styleSheet) {
            // This is required for IE8 and below.
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    } else {
        // setting up slider style in html head element
        //setting up sliders thumb style in html head (https://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript)
        sliderThumbStyle = ".slider_inside::-webkit-slider-thumb {-webkit-appearance:none;appearance:none;width:15px;height:25px;background:black;cursor:pointer;visibility:hidden;}";
        var css = sliderThumbStyle,
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        head.appendChild(style);

        style.type = 'text/css';
        if (style.styleSheet) {
            // This is required for IE8 and below.
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }
}

////////////////////////////////////////
//   HOVER FUNCTION                   //
////////////////////////////////////////

// next button hover
function nextButtonIn() {
    document.getElementById("ques1buttonid").addEventListener("mouseover", function () {
        document.getElementById("ques1buttonid").style.backgroundColor = "grey";
    });
}

function nextButtonOut() {
    document.getElementById("ques1buttonid").addEventListener("mouseout", function () {
        document.getElementById("ques1buttonid").style.backgroundColor = "lightgrey";
    });
}

// back button hover
function backButtonIn() {
    document.getElementById("ques1buttonidb").addEventListener("mouseover", function () {
        document.getElementById("ques1buttonidb").style.backgroundColor = "grey";
    });
}

function backButtonOut() {
    document.getElementById("ques1buttonidb").addEventListener("mouseout", function () {
        document.getElementById("ques1buttonidb").style.backgroundColor = "lightgrey";
    });
}

// consent button hover
function consentButtonIn() {
    document.getElementById("consentButtonId").addEventListener("mouseover", function () {
        document.getElementById("consentButtonId").style.backgroundColor = "grey";
    });
}

function consentButtonOut() {
    document.getElementById("consentButtonId").addEventListener("mouseout", function () {
        document.getElementById("consentButtonId").style.backgroundColor = "lightgrey";
    });
}

// consent button hover
function exitButtonIn() {
    document.getElementById("exitButtonId").addEventListener("mouseover", function () {
        document.getElementById("exitButtonId").style.backgroundColor = "grey";
    });
}

function exitButtonOut() {
    document.getElementById("exitButtonId").addEventListener("mouseout", function () {
        document.getElementById("exitButtonId").style.backgroundColor = "lightgrey";
    });
}

// // button0 button hover
// function button0ButtonIn() {
//     document.getElementById("button0").addEventListener("mouseover", function () {
//         document.getElementById("button0").style.backgroundColor = "#3d56f7";
//     });
// }

// function button0ButtonOut() {
//     document.getElementById("button0").addEventListener("mouseout", function () {
//         document.getElementById("button0").style.backgroundColor = "blue";
//     });
// }

// // button1 button hover
// function button1ButtonIn() {
//     document.getElementById("button1").addEventListener("mouseover", function () {
//         document.getElementById("button1").style.backgroundColor = "#ef6157";
//     });
// }

// function button1ButtonOut() {
//     document.getElementById("button1").addEventListener("mouseout", function () {
//         document.getElementById("button1").style.backgroundColor = "red";
//     });
// }



//////////////////////////////////////////////////////////////////////////////////////////////
///////////////                                                       ////////////////////////
///////////////            GETTING STUDY AND PARTICIPANT INFO          ///////////////////////
///////////////                                                       ////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

//https://html-online.com/articles/get-url-parameters-javascript/
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

var PROLIFIC_PID = getUrlVars()['PROLIFIC_PID'];
log(PROLIFIC_PID, "PROLIFIC_PID");
cs(PROLIFIC_PID);


var STUDY_ID = getUrlVars()['STUDY_ID'];
log(STUDY_ID, "STUDY_ID");
cs(STUDY_ID);


var SESSION_ID = getUrlVars()['SESSION_ID'];
log(SESSION_ID, "SESSION_ID");
cs(SESSION_ID);

//////////////////////////////////////////////////////////////////////////////////////////////
///////////////                                                       ////////////////////////
///////////////            SECURITY                                    ///////////////////////
///////////////                                                       ////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


// while (true) {
//     startform();

//     //asking for pp# input
//     participantBlockInput = main.addblock("center", "center", 85, 10)
//         .style("font-size", "50%")
//         .input("As a security measure, please type 'school' backwards below:", "securityMeasure");

//     //next button
//     var buttonNext = main.addblock('center', buttonLocationHeight, buttonBlockSize[0], buttonBlockSize[1])
//         .button("Volgende", "nextbutton", "nextbuttoninput", "ques1buttonid")
//         .style("background", "lightgrey", "#ques1buttonid")
//         .style("border-radius", "2.5px", "#ques1buttonid")
//         .style("font-size", "50%", "#ques1buttonid")
//         .align("center", "#ques1buttonid");
//     nextButtonIn()
//     nextButtonOut()

//     buttonNext.await("click");

//     endform();

//     //cleaning up
//     main.removeblock(buttonNext);
//     main.removeblock(participantBlockInput);

//     if (response.securityMeasure === "loohcs") {
//         break;
//     } else {
//         alert("Incorrect submission, plese try again.");;
//     }
// }


//////////////////////////////////////////////////////////////////////////////////////////////
///////////////                                                       ////////////////////////
///////////////            INSTRUCTIONS                                ///////////////////////
///////////////                                                       ////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

///// INSTRUCTIONS SCREEN #1 ////
function ins1() {
    //image 
    var projectInfluenceLogo = main.addblock("center", -10, 50, 50);
    projectInfluenceLogo.preload("project_influence_logo.png", 100);
    image.await("preloading_completed");
    projectInfluenceLogo.showimage("project_influence_logo.png");

    //instruction text
    text("Fijn dat je meedoet! We willen jou graag een paar vragen stellen. Jouw antwoorden gebruiken we voor ons onderzoek en zijn dus heel belangrijk voor ons.", 50);

    //next button
    var buttonNext = main
        .addblock("86", buttonLocationHeight, buttonBlockSize[0], buttonBlockSize[1])
        .button("Volgende", "nextbutton", "nextbuttoninput", "ques1buttonid")
        .style("background", "lightgrey", "#ques1buttonid")
        .style("border-radius", "2.5px", "#ques1buttonid")
        .style("font-size", "50%", "#ques1buttonid")
        .align("center", "#ques1buttonid");
    nextButtonIn()
    nextButtonOut()

    //adding wait time befrore button
    await(1000); // delay for clicking to make sure they don't just click through

    //cleaning up
    buttonNext.await("click");
    main.removeblock(buttonNext);
    main.removeblock(projectInfluenceLogo);
    //main.removeblock(progress);
    clear();
}

ins1();

///// INSTRUCTIONS SCREEN #2 ////
function ins2() {
    //image 1
    var blueMan = main.addblock(51, 5, 18, 15);
    blueMan.preload("blue_man.svg", 60);
    image.await("preloading_completed");

    //image 2
    var orangeMan = main.addblock(51, 21, 18, 15);
    orangeMan.preload("orange_man.svg", 60);
    image.await("preloading_completed");

    //image 2
    var tickets = main.addblock(75, 5, 25, 31);
    tickets.preload("ticket-01.svg", 80);
    image.await("preloading_completed");

    blueMan.showimage("blue_man.svg");
    // blueMan.style("border-style", "solid");
    orangeMan.showimage("orange_man.svg");
    // orangeMan.style("border-style", "solid");
    tickets.showimage("ticket-01.svg");
    // tickets.style("border-style", "solid");

    // spliter line
    var splitter = main.addblock(72, 2, 5, 37)
        .style("border-left", "3px solid black");


    //instruction text 1
    var textBlock1 = main.addblock(0, 5, 50, 15, "white", Lb + ": mag de loten verdelen");
    textBlock1.style("font-size", "50%");
    // textBlock1.style("border-style", "solid");

    //instruction text 2
    var textBlock2 = main.addblock(0, 21, 50, 15, "white", Lo + ": kijkt toe en heeft geen invloed op de verdeling van de loten");
    textBlock2.style("font-size", "50%");
    // textBlock2.style("border-style", "solid");

    //instruction text 3
    var textBlock3 = main.addblock("center", 43, 100, 35, "white", "Een lerares heeft tien loten op tafel gelegd, voor een echte loterij. " + Lb + " mag deze gaan verdelen tussen hem/haarzelf en " + lo + " een andere leerling van dezelfde school, uit hetzelfde leerjaar. Hoe meer loten iemand heeft, hoe meer kans iemand heeft om te winnen in de loterij.<br><br> De leerlingen weten niet van elkaar wie ze zijn en komen dat ook niet achteraf te weten. Ook kunnen ze niet met elkaar praten.");
    textBlock3.style("font-size", "50%");
    // textBlock3.style("border-style", "solid");

    //next button
    var buttonNext = main
        .addblock("86", buttonLocationHeight, buttonBlockSize[0], buttonBlockSize[1])
        .button("Volgende", "nextbutton", "nextbuttoninput", "ques1buttonid")
        .style("background", "lightgrey", "#ques1buttonid")
        .style("border-radius", "2.5px", "#ques1buttonid")
        .style("font-size", "50%", "#ques1buttonid")
        .align("center", "#ques1buttonid");
    nextButtonIn()
    nextButtonOut()

    //back button
    var buttonBack = main
        .addblock("left", buttonLocationHeight, buttonBlockSize[0], buttonBlockSize[1])
        .button("Vorige", "nextbutton", "nextbuttoninput", "ques1buttonidb")
        .style("background", "lightgrey", "#ques1buttonidb")
        .style("border-radius", "2.5px", "#ques1buttonidb")
        .style("font-size", "50%", "#ques1buttonidb")
        .align("center", "#ques1buttonidb");
    backButtonIn()
    backButtonOut()

    //adding wait time befrore button
    await(1000); // delay for clicking to make sure they don't just click through

    // waiting for either button
    waitfor {
        buttonNext.await("click")
    } or {
        buttonBack.await("click")
    };


    //cleaning up
    main.removeblock(buttonNext);
    main.removeblock(buttonBack);
    main.removeblock(blueMan);
    main.removeblock(orangeMan);
    main.removeblock(splitter);
    main.removeblock(tickets);
    main.removeblock(textBlock1);
    main.removeblock(textBlock2);
    main.removeblock(textBlock3);
}

ins2();

///// INSTRUCTIONS SCREEN #3 ////
function ins3() {
    //image 1
    var blueManTicket = main.addblock(26, 5, 23, 15);
    blueManTicket.preload("blue_man_ticket.svg", 100);
    image.await("preloading_completed");

    //image 2
    var orangeManTicket = main.addblock(26, 21, 23, 15);
    orangeManTicket.preload("orange_man_ticket.svg", 100);
    image.await("preloading_completed");

    //image 2
    var ticketsReduced = main.addblock(55, 5, 25, 31);
    ticketsReduced.preload("tickets_reduced.svg", 80);
    image.await("preloading_completed");

    blueManTicket.showimage("blue_man_ticket.svg");
    // blueManTicket.style("border-style", "solid");
    orangeManTicket.showimage("orange_man_ticket.svg");
    // orangeManTicket.style("border-style", "solid");
    ticketsReduced.showimage("tickets_reduced.svg");
    // ticketsReduced.style("border-style", "solid");

    // spliter line
    var splitter = main.addblock(53, 2, 5, 37)
        .style("border-left", "3px solid black");


    //instruction text 1
    var textBlock1 = main.addblock("center", 43, 100, 35, "white", "Voorbeeld: " + Lb + " is bezig met het verdelen van de loten.<br> ---<br> Achteraf krijgt een klas vol leerlingen te zien wat " + lb + " heeft gedaan. Zij beoordelen het gedrag van " + lb + " met een ‘like’ of ‘dislike’. Daarna wordt een lijst met de meest populaire leerlingen in de school opgehangen.<br><br> Er zijn 25 medeleerlingen die een ‘like’ of een ‘dislike’ moeten geven. Jij ziet zo een aantal voorbeelden van het gedrag van " + lb + ". Geef aan hoeveel van de 25 leerlingen jij denkt dat een ‘like’ zouden geven en hoeveel een ‘dislike’.");
    textBlock1.style("font-size", "50%");
    // textBlock3.style("border-style", "solid");

    //next button
    var buttonNext = main
        .addblock("86", buttonLocationHeight, buttonBlockSize[0], buttonBlockSize[1])
        .button("Volgende", "nextbutton", "nextbuttoninput", "ques1buttonid")
        .style("background", "lightgrey", "#ques1buttonid")
        .style("border-radius", "2.5px", "#ques1buttonid")
        .style("font-size", "50%", "#ques1buttonid")
        .align("center", "#ques1buttonid");
    nextButtonIn()
    nextButtonOut()

    //back button
    var buttonBack = main
        .addblock("left", buttonLocationHeight, buttonBlockSize[0], buttonBlockSize[1])
        .button("Vorige", "nextbutton", "nextbuttoninput", "ques1buttonidb")
        .style("background", "lightgrey", "#ques1buttonidb")
        .style("border-radius", "2.5px", "#ques1buttonidb")
        .style("font-size", "50%", "#ques1buttonidb")
        .align("center", "#ques1buttonidb");
    backButtonIn()
    backButtonOut()

    //adding wait time befrore button
    await(1000); // delay for clicking to make sure they don't just click through

    // waiting for either button
    waitfor {
        buttonNext.await("click")
    } or {
        buttonBack.await("click")
    };


    //cleaning up
    main.removeblock(buttonNext);
    main.removeblock(buttonBack);
    main.removeblock(blueManTicket);
    main.removeblock(orangeManTicket);
    main.removeblock(splitter);
    main.removeblock(ticketsReduced);
    main.removeblock(textBlock1);
}

ins3();

///// INSTRUCTIONS SCREEN #4 ////
function ins4() {
    //instruction text
    text("Wij willen graag te weten komen hoe kinderen van jouw leeftijd denken over bepaalde uitkomsten. Niet iedereen zal altijd hetzelfde ergens van vinden, en daarom vragen we je in te beelden hoe verschillende mensen in een groep hier over zouden kunnen denken. Je kan hier bijvoorbeeld even aan je eigen klas denken.<br><br> Over een paar weken gaan we echt aan leerlingen vragen een like of dislike te geven. Als jij als beste van jouw klas kan voorspellen hoeveel likes / dislikes er gegeven worden, dan win jij een bol.com bon van 20 euro! Denk er dus goed over na!", 50);

    //next button
    var buttonNext = main
        .addblock("86", buttonLocationHeight, buttonBlockSize[0], buttonBlockSize[1])
        .button("Volgende", "nextbutton", "nextbuttoninput", "ques1buttonid")
        .style("background", "lightgrey", "#ques1buttonid")
        .style("border-radius", "2.5px", "#ques1buttonid")
        .style("font-size", "50%", "#ques1buttonid")
        .align("center", "#ques1buttonid");
    nextButtonIn()
    nextButtonOut()

    //back button
    var buttonBack = main
        .addblock("left", buttonLocationHeight, buttonBlockSize[0], buttonBlockSize[1])
        .button("Vorige", "nextbutton", "nextbuttoninput", "ques1buttonidb")
        .style("background", "lightgrey", "#ques1buttonidb")
        .style("border-radius", "2.5px", "#ques1buttonidb")
        .style("font-size", "50%", "#ques1buttonidb")
        .align("center", "#ques1buttonidb");
    backButtonIn()
    backButtonOut()

    //adding wait time befrore button
    await(1000); // delay for clicking to make sure they don't just click through

    // waiting for either button
    waitfor {
        buttonNext.await("click")
    } or {
        buttonBack.await("click")
    };

    main.removeblock(buttonNext);
    main.removeblock(buttonBack);
    clear();
}

ins4();


///// TRIAL 1  ////
function trial1(stimuli) {

    //thumbs down
    var thumbsDownImage_1 = main.addblock(-31, 64, 30, 28, "white", "", "thumbsDown");
    thumbsDownImage_1.preload_range("thumbs_down_{0}.svg", 0, 26);
    image.await("preloading_completed");

    //thumbs up
    var thumbsUpImage_1 = main.addblock(102, 64, 30, 28, "white", "", "thumbsUp");
    thumbsUpImage_1.preload_range("thumbs_up_{0}.svg", 0, 26);
    image.await("preloading_completed");

    //image 1
    var blueMan = main.addblock(20, 5, 18, 15);
    blueMan.preload("blue_man.svg", 60);
    image.await("preloading_completed");

    //image 2
    var orangeMan = main.addblock(20, 21, 18, 15);
    orangeMan.preload("orange_man.svg", 60);
    image.await("preloading_completed");

    //image 2
    var tickets = main.addblock(44, 5, 25, 31);
    tickets.preload("ticket-01.svg", 80);
    image.await("preloading_completed");

    //trial screen
    var trial_image = main.addblock(20, 53, 60, 20);
    trial_image.preload(stimuli, 100);
    image.await("preloading_completed");

    blueMan.showimage("blue_man.svg");
    // blueMan.style("border-style", "solid");
    orangeMan.showimage("orange_man.svg");
    // orangeMan.style("border-style", "solid");
    tickets.showimage("ticket-01.svg");
    // tickets.style("border-style", "solid");
    trial_image.showimage(stimuli);
    // trial_image.style("border-style", "solid");

    // spliter line
    var splitter = main.addblock(41, 2, 5, 37)
        .style("border-left", "3px solid black");

    // spliter line
    var splitter2 = main.addblock(72, 2, 5, 37)
        .style("border-left", "3px solid black");

    //instruction text 1
    var textBlock1 = main.addblock(-6, 5, 25, 15, "white", Lb + ":<br> Verdeeld de loten");
    textBlock1.style("font-size", "50%");
    // textBlock1.style("border-style", "solid");

    //instruction text 2
    var textBlock2 = main.addblock(-6, 21, 25, 15, "white", Lo + ":<br> Kijkt toe");
    textBlock2.style("font-size", "50%");
    // textBlock2.style("border-style", "solid");

    //instruction text 3
    var textBlock3 = main.addblock(75, 5, 35, 31, "white", Lb + " verdeelt de loten. Hoe meer loten iemand heeft, hoe meer kans iemand heeft om te winnen in de loterij.");
    textBlock3.style("font-size", "50%");
    // textBlock3.style("border-style", "solid");

    //instruction text 4
    var textBlock4 = main.addblock(-5, 43, 115, 8, "white", "Voorbeeld " + i + ": " + Lb + " geeft " + i + " loten aan zichzelf, en geeft " + (10 - i) + " loten aan " + lo);
    textBlock4.style("font-size", "50%");
    textBlock4.style("border-style", "solid");

    //setting up slider code in html (will be added as text below)
    //slider html
    var slider = "<div class='slider'><input type='range' min='0' max='25' value='' class='slider_inside' id='myRange1'><div class='value'>Likes: <span id='demo1'>1</span></div></div>";

    predictionConfidenceSliderBox = main.addblock(0, 77, 100, 5)
        .style("font-size", "40%")
        //.style("border-radius", "10px")
        //.style("border", "solid")
        .text(slider)
        .style("place-items", "center", ".slider_inside")
        .style("-webkit-appearance", "none", ".slider_inside")
        .style("width", "100%", ".slider_inside")
        .style("height", "25px", ".slider_inside")
        .style("background", "#dcdcdc", ".slider_inside")
        .style("outline", "none", ".slider_inside")
        .style("opacity", "0.9", ".slider_inside")
        .style("-webkit-transition", "0.2s", ".slider_inside")
        .style("transition", "opacity 0.2s", ".slider_inside")
        .style("hover", "opacity 0.2s", ".slider_inside")
        .style("-webkit-appearance", "none", ".slider_inside");

    //slider valu updating
    var predictionConfidenceSlider = document.getElementById("myRange1");
    var predictionConfidenceSliderOutput = document.getElementById("demo1");
    predictionConfidenceSliderOutput.innerHTML = predictionConfidenceSlider.value;
    predictionConfidenceSlider.oninput = function () {
        predictionConfidenceSliderOutput.innerHTML = predictionConfidenceSlider.value;
        if (predictionConfidenceSlider.value == 0) {

            thumbsUpImage_1.showimage("thumbs_up_0.svg");
            thumbsDownImage_1.showimage("thumbs_down_25.svg");

        } else if (predictionConfidenceSlider.value == 1) {
            thumbsUpImage_1.showimage("thumbs_up_1.svg");
            thumbsDownImage_1.showimage("thumbs_down_24.svg");

        } else if (predictionConfidenceSlider.value == 2) {
            thumbsUpImage_1.showimage("thumbs_up_2.svg");
            thumbsDownImage_1.showimage("thumbs_down_23.svg");

        } else if (predictionConfidenceSlider.value == 3) {
            thumbsUpImage_1.showimage("thumbs_up_3.svg");
            thumbsDownImage_1.showimage("thumbs_down_22.svg");

        } else if (predictionConfidenceSlider.value == 4) {
            thumbsUpImage_1.showimage("thumbs_up_4.svg");
            thumbsDownImage_1.showimage("thumbs_down_21.svg");

        } else if (predictionConfidenceSlider.value == 5) {
            thumbsUpImage_1.showimage("thumbs_up_5.svg");
            thumbsDownImage_1.showimage("thumbs_down_20.svg");

        } else if (predictionConfidenceSlider.value == 6) {
            thumbsUpImage_1.showimage("thumbs_up_6.svg");
            thumbsDownImage_1.showimage("thumbs_down_19.svg");

        } else if (predictionConfidenceSlider.value == 7) {
            thumbsUpImage_1.showimage("thumbs_up_7.svg");
            thumbsDownImage_1.showimage("thumbs_down_18.svg");

        } else if (predictionConfidenceSlider.value == 8) {
            thumbsUpImage_1.showimage("thumbs_up_8.svg");
            thumbsDownImage_1.showimage("thumbs_down_17.svg");

        } else if (predictionConfidenceSlider.value == 9) {
            thumbsUpImage_1.showimage("thumbs_up_9.svg");
            thumbsDownImage_1.showimage("thumbs_down_16.svg");

        } else if (predictionConfidenceSlider.value == 10) {
            thumbsUpImage_1.showimage("thumbs_up_10.svg");
            thumbsDownImage_1.showimage("thumbs_down_15.svg");

        } else if (predictionConfidenceSlider.value == 11) {
            thumbsUpImage_1.showimage("thumbs_up_11.svg");
            thumbsDownImage_1.showimage("thumbs_down_14.svg");

        } else if (predictionConfidenceSlider.value == 12) {
            thumbsUpImage_1.showimage("thumbs_up_12.svg");
            thumbsDownImage_1.showimage("thumbs_down_13.svg");

        } else if (predictionConfidenceSlider.value == 13) {
            thumbsUpImage_1.showimage("thumbs_up_13.svg");
            thumbsDownImage_1.showimage("thumbs_down_12.svg");

        } else if (predictionConfidenceSlider.value == 14) {
            thumbsUpImage_1.showimage("thumbs_up_14.svg");
            thumbsDownImage_1.showimage("thumbs_down_11.svg");

        } else if (predictionConfidenceSlider.value == 15) {
            thumbsUpImage_1.showimage("thumbs_up_15.svg");
            thumbsDownImage_1.showimage("thumbs_down_10.svg");

        } else if (predictionConfidenceSlider.value == 16) {
            thumbsUpImage_1.showimage("thumbs_up_16.svg");
            thumbsDownImage_1.showimage("thumbs_down_9.svg");

        } else if (predictionConfidenceSlider.value == 17) {
            thumbsUpImage_1.showimage("thumbs_up_17.svg");
            thumbsDownImage_1.showimage("thumbs_down_8.svg");

        } else if (predictionConfidenceSlider.value == 18) {
            thumbsUpImage_1.showimage("thumbs_up_18.svg");
            thumbsDownImage_1.showimage("thumbs_down_7.svg");

        } else if (predictionConfidenceSlider.value == 19) {
            thumbsUpImage_1.showimage("thumbs_up_19.svg");
            thumbsDownImage_1.showimage("thumbs_down_6.svg");

        } else if (predictionConfidenceSlider.value == 20) {
            thumbsUpImage_1.showimage("thumbs_up_20.svg");
            thumbsDownImage_1.showimage("thumbs_down_5.svg");

        } else if (predictionConfidenceSlider.value == 21) {
            thumbsUpImage_1.showimage("thumbs_up_21.svg");
            thumbsDownImage_1.showimage("thumbs_down_4.svg");

        } else if (predictionConfidenceSlider.value == 22) {
            thumbsUpImage_1.showimage("thumbs_up_22.svg");
            thumbsDownImage_1.showimage("thumbs_down_3.svg");

        } else if (predictionConfidenceSlider.value == 23) {
            thumbsUpImage_1.showimage("thumbs_up_23.svg");
            thumbsDownImage_1.showimage("thumbs_down_2.svg");

        } else if (predictionConfidenceSlider.value == 24) {
            thumbsUpImage_1.showimage("thumbs_up_24.svg");
            thumbsDownImage_1.showimage("thumbs_down_1.svg");

        } else if (predictionConfidenceSlider.value == 25) {
            thumbsUpImage_1.showimage("thumbs_up_25.svg");
            thumbsDownImage_1.showimage("thumbs_down_0.svg");

        }

    }

    //next button
    var buttonNext = main
        .addblock("center", 85, buttonBlockSize[0], buttonBlockSize[1])
        .button("Volgende", "nextbutton", "nextbuttoninput", "ques1buttonid")
        .style("background", "lightgrey", "#ques1buttonid")
        .style("border-radius", "2.5px", "#ques1buttonid")
        .style("font-size", "50%", "#ques1buttonid")
        .align("center", "#ques1buttonid");
    nextButtonIn()
    nextButtonOut()

    //removing thumb
    thumb();
    //display none to slider value 
    document.getElementById("demo1").style.visibility = "hidden";
    //disabling next button
    document.getElementById("ques1buttonid").disabled = true;
    //adding onclick to slider
    document.getElementById("myRange1").onclick = function () {
        thumb("visible black");
        document.getElementById("ques1buttonid").disabled = false;
        document.getElementById("demo1").style.visibility = "visible";
    };

    await(1000); // delay for clicking to make sure they don't just click through

    buttonNext.await("click");

    //cleaning up
    main.removeblock(buttonNext);
    main.removeblock(blueMan);
    main.removeblock(orangeMan);
    main.removeblock(splitter);
    main.removeblock(splitter2);
    main.removeblock(tickets);
    main.removeblock(textBlock1);
    main.removeblock(textBlock2);
    main.removeblock(textBlock3);
    main.removeblock(textBlock4);
    main.removeblock(thumbsDownImage_1);
    main.removeblock(thumbsUpImage_1);
    main.removeblock(trial_image);
    main.removeblock(predictionConfidenceSliderBox);
}

for (i = 0; i < 10; i++) {
    trial1(stimuli[i]);
}

///// INSTRUCTIONS SCREEN #1 ////
function ins5() {
    //image 
    var projectInfluenceLogo = main.addblock("center", -10, 50, 50);
    projectInfluenceLogo.preload("project_influence_logo.png", 100);
    image.await("preloading_completed");
    projectInfluenceLogo.showimage("project_influence_logo.png");

    //instruction text
    text("Je bent klaar, bedankt voor het meedoen!", 50);

    //next button
    var buttonNext = main
        .addblock("86", buttonLocationHeight, buttonBlockSize[0], buttonBlockSize[1])
        .button("Volgende", "nextbutton", "nextbuttoninput", "ques1buttonid")
        .style("background", "lightgrey", "#ques1buttonid")
        .style("border-radius", "2.5px", "#ques1buttonid")
        .style("font-size", "50%", "#ques1buttonid")
        .align("center", "#ques1buttonid");
    nextButtonIn()
    nextButtonOut()

    //adding wait time befrore button
    await(1000); // delay for clicking to make sure they don't just click through

    //cleaning up
    buttonNext.await("click");
    main.removeblock(buttonNext);
    main.removeblock(projectInfluenceLogo);
    //main.removeblock(progress);
    clear();
}

ins5();