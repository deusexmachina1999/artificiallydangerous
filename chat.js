/*let text = "Will AI grow in the next 10 years";

text = userData.toLowerCase();
if (userData.includes("grow") || userData.includes("growth")) {
    sayGrowth();
}
*/
var popUp = document.getElementById("popup");
popUp.style.visibility = "hidden";

function start() {
    popUp.style.visibility = "visible";
}

console.log("Button pressed.");

// Work on ^

function sendMessage() {
    console.log("Button pressed.");
    // Get user input
    let input = document.getElementById("userResponse");
    let popUp = document.getElementById("popup");
    popUp.style.visibility = "visible";
    let userData = input.value;
    input.value = "";
    console.log(userData)

    // make somewhere to put it
    let text = document.createElement("p");

    // Make user input fill the p made
    text.innerHTML = userData;

    //change styles
    text.style.backgroundColor = "darkseagreen";
    text.style.alignSelf = "flex";
    text.style.color = "black";
    text.style.width = "fit-Content";
    text.style.padding = "5px 10px";
    text.style.borderRadius = "5px";
    text.style.border = "2px solid darkolivegreen";
    // append message to the box
    let messageBox = document.getElementById("addHere");
    addHere.appendChild(text);

    //text = userData.ToLowerCase();

    if (userData.includes("1967") || userData.includes("Woodrow Bledsoe")
        || userData.includes("facial recognition bias") || userData.includes("2020")
        || userData.includes("Amazon") || userData.includes("IBM") || userData.includes("Microsoft")
        || userData.includes("police")) {
        grow();
    } else if (userData.includes("Hepburn") || userData.includes("Brian Hood")
        || userData.includes("Australia") || userData.includes("Jonathan Turley")
        || userData.includes("2018") || userData.includes("Washington Post")
        || userData.includes("The Guardian") || userData.includes("journalism")) {
        article();
    } else if (userData.includes("Elon Musk") || userData.includes("Geoffrey Hinton")
        || userData.includes("The Godfather of AI") || userData.includes("open letter")
        || userData.includes("GPT-4") || userData.includes("2023") || userData.includes("Steve Wozniak")) {
        letter();
    } else if (userData.includes("1921") || userData.includes("Karel Capel") || userData.includes("R.U.R")
        || userData.includes("Rossum's Universal Robots")) {
        rossums()
    } else if (userData.includes("1927") || userData.includes("Metropolis")) {
        metropolis();
    } else if (userData.includes("1943") || userData.includes("A logical calculus of the ideas imminent in Nervous Activity") || userData.includes("Bulletin of Mathematical Biophysics") || userData.includes("Warren S. McCulloch") || userData.includes("Walter Pitts") || userData.includes("artificial neurons") || userData.includes("deep learning")) {
        pitts();
    } else if (userData.includes("1950") || userData.includes("Programming a computer for playing chess") || userData.includes("Claude Shannon")) {
        claude();
    } else if (userData.includes("1950") || userData.includes("Alan Turing") || userData.includes("The Imitation Game") || userData.includes("Turing Test")) {
        alan();
    } else if (userData.includes("1951") || userData.includes("neural network") || userData.includes("Marvin Minsky") || userData.includes("Dean Edmunds") || userData.includes("SNARC")) {
        snarc();
    } else if (userData.includes("1952") || userData.includes("Christopher Strachey")) {
        strachey();
    } else if (userData.includes("1955") || userData.includes("Herbert Simon") || userData.includes("Allen Newell") || userData.includes("The Logic Theorist")) {
        theorist();
    } else if (userData.includes("1956") || userData.includes("The Dartmouth Confrence") || userData.includes("neural networks") || userData.includes("self improvement") || userData.includes("computer language")) {
        dartmouth();
    } else if (userData.includes("1959") || userData.includes("Arthur Samuel") || userData.includes("machine learning")) {
        samuel();
    } else if (userData.includes("1961") || userData.includes("General Motors") || userData.includes("New Jersey") || userData.includes("Unimate")) {
        unimate();
    } else if (userData.includes("1965") || userData.includes("Joseph Weizenbaum") || userData.includes("ELIZA") || userData.includes("psychotherapy")) {
        eliza();
    } else if (userData.includes("1965") || userData.includes("DENDRAL") || userData.includes("Stanford University") || userData.includes("organic chemistry") || userData.includes("hypothesis formation") || userData.includes("emphirical induction")) {
        dendral();
    } else if (userData.includes("1972") || userData.includes("Stanford University") || userData.includes("medical") || userData.includes("MYCIN") || userData.includes("bacteria") || userData.includes("antibiotics")) {
        mycin();
    } else if (userData.includes("1979") || userData.includes("Stanford Cart") || userData.includes("autonimous vehicles")) {
        cart();
    } else if (userData.includes("1980") || userData.includes("Wabot-2") || userData.includes("Waseda University") || userData.includes("Japan") || userData.includes("music")) {
        japan();
    } else if (userData.includes("1986") || userData.includes("driverless car") || userData.includes("Mercedes-Benz") || userData.includes("Munich")) {
        munich();
    } else if (userData.includes("1988") || userData.includes("Rollo Carpenter") || userData.includes("Jabberwacky")) {
        jabber();
    } else if (userData.includes("1995") || userData.includes("ALICE") || userData.includes("Richard Wallace") || userData.includes("World Wide Web")) {
        alice();
    } else if (userData.includes("1997") || userData.includes("Garry Kasparov") || userData.includes("Deep Blue")) {
        kasparov();
    } else if (userData.includes("1998") || userData.includes("Dave Hampton") || userData.includes("Caleb Chung") || userData.includes("Furby") || userData.includes("pet robot")) {
        furby();
    } else if (userData.includes("2000") || userData.includes("Kismet") || userData.includes("MIT")) {
        kismet();
    } else if (userData.includes("2000") || userData.includes("Honda") || userData.includes("ASIMO")) {
        asimo();
    } else if (userData.includes("2009") || userData.includes("2014") || userData.includes("Google") || userData.includes("Nevada") || userData.includes("driverless car")) {
        driverless();
    } else if (userData.includes("2011") || userData.includes("Watson") || userData.includes("Jepardy!")) {
        watson();
    } else if (userData.includes("IDSIA") || userData.includes("Switzerland") || userData.includes("2011") || userData.includes("handwriting recognition")) {
        idsia();
    } else if (userData.includes("exit") || userData.includes("Exit")) {
        exit();
    } else {
        unknown();
    }












    function grow() {
        let grow = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let growth = "You may be talking about facial recognition software. This technology, which has roots stretching back to 1967 with Woodrom Bledsoe, has been used for both identification and verification of identities. However, they have been proven to have major biases, especially when used in police work. Because of this, Amazon, IBM, and Microsoft stopped the sale of them in 2020 on their platforms. Do you have any other questions to ask me?";
        grow.innerHTML = growth;
        // Style it
        grow.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(grow);
    }

    function article() {
        let article = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let articles = " You may be talking about how Chat-GPT has been credited with fabricating articles. Prestigious organizations like the Washington Post and The Guardian have seen articles be made entirely by ChatGTP. In addition to this, figures big and small have been these targets, as seen by the American Jonathan Turley and the Australian Brian Hood. These revelations with AI and its abilities has a lot of big implications, like its future uses. What if background checks are done via AI and more lies show up? What will happen to journalism and journalistic integrirty if AI can make up whatever it wants as the truth? The realityof this situation is bad, but it can get so much worse.";
        article.innerHTML = articles;
        // Style it
        article.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(article);
    }

    function letter() {
        let letter = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let letters = " You may be talking about the 2023 open letter signed by dozens of tech industry leaders like Elon Musk, Steve Wozniak, and Geoffrey Hinton. This letter called for a 6 month pause on any and all AI's stronger than GPT-4, which is the strongest and newest version of Chat-GPT. The signers cited both ethical and logistical concerns, with the pros and cons of AI being heavily weighed. More information on this can be seen in the 'Ethos' page.";
        letter.innerHTML = letters;
        // Style it
        letter.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(letter);
    }

    function rossums() {
        let rossum = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let rossums = "You are most likely referring to Rossum's Universal Robots, or R.U.R, which was the firstever use of the word 'robot'.";
        rossum.innerHTML = rossums;
        // Style it
        rossums.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(rossum);
    }

    function metropolis() {
        let metropolis = document.createElement("p");
        // set the text
        let metro = "You are most likely referring to the 1927 film 'Metropolis', which had the first appearance of a robotic humanoid figure in film. That robot is pictured in image 1 on the History of AI timeline.";
        metropolis.innerHTML = metro;
        // Style it
        metropolis.classList.add("response");
        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(metropolis);
    }

    function pitts() {
        let pitts = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let pittywitty = "You are most likely referring to the influential paper published by Warren McCulloch and Walter Pitts about creating an artificial network of neurons. This would be the groundwork for 'deep learning' AI technology, which is an intregal part of todaysadvanced AI's. The paper was published in 1943 to the Bulletin of Mathematical Biophysics.";
        pitts.innerHTML = pittywitty;
        // Style it
        pitts.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(pitts);
    }

    function claude() {
        let claude = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let debussy = "You are most likely referring to the 1950 article by Claude Shannon, which was the first mention of an AI playing chess autonimously.";
        claude.innerHTML = debussy;
        // Style it
        claude.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(claude);
    }

    function alan() {
        let alan = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let turing = "You are most likely referring to Alan Turing and his Imitation Game. Put forth in the 1950 paper 'Computing Machinery and Intelligence', Turing (Image 2 on the Histroy of AI page) made a system in which you could test an AI against a human. A machine would pass if it was seen as indistinguishable from the human participant.";
        alan.innerHTML = turing;
        // Style it
        alan.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(alan);
    }

    function snarc() {
        let snarc = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let snarky = "You are most likely referring to the Stochastic Neural Analog Reinforcement Calculator, or SNARC. This machine was the first artificial neural network ever created, simulating the work of 40 neurons with 3000 vacuum tubes.";
        snarc.innerHTML = snarky;
        // Style it
        snarc.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(snarc);
    }

    function strachey() {
        let strachey = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let scratchy = "You are most likely referring to Christopher Strachey and his invention of the first fully autonymous game in 1952. He created a program that could play a full game of checkers.";
        strachey.innerHTML = scrachy;
        // Style it
        strachey.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(strachey);
    }

    function theorist() {
        let theorist = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let theory = "You are most likely referring to The Logic Theorist, the first AI program ever created. It was made in 1955 by Herbert Simon and Allen Newell.";
        theorist.innerHTML = theory;
        // Style it
        theorist.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(theorist);
    }

    function dartmouth() {
        let dartmouth = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let cornell = "You are most likely referring to the Dartmouth Conference of 1956. This was the first major discussion of AI and its potential. Topics of discussion included neural networks, self-improvement, and the creation of a computer language.";
        dartmouth.innerHTML = cornell;
        // Style it
        dartmouth.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(dartmouth);
    }

    function samuel() {
        let samuel = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let sammy = "You are most likely referring to the coining of and subsequent creation of 'machine learning' computer programs. This is the idea that a computer can learn from its mistakes and improve. The first program for this was written in 1959, and it was to once again play checkers. ";
        samuel.innerHTML = sammy;
        // Style it
        samuel.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(samuel);
    }

    function unimate() {
        let unimate = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let theArm = "You are most likely referring to the Industrial robot Unimate. It wasintroduced in 1961 at a General Motorso plant in New Jersey, and can be seen in image 3 on the bottom of the History of AI page.";
        unimate.innerHTML = theArm;
        // Style it
        unimate.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(unimate);
    }

    function eliza() {
        let eliza = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let peggy = "You are most likely referring to ELIZA, the first program that was able to speak with people. It worked as a psychotherapist, and while it is crude compared to modern technology it was the first step towards today's technology.";
        eliza.innerHTML = peggy;
        // Style it
        eliza.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(eliza);
    }

    function dendral() {
        let dendral = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let snake = "You are most likely referring to Stanford Universisites DENDRAL program. It helped organic chemists create hypothesis andcomplete emphirical induction. It was createdin 1965.";
        dendral.innerHTML = snake;
        // Style it
        dendral.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(dendral);
    }

    function mycin() {
        let mycin = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let bacteria = "You are most likely referring to MYCIN. This medical program was created by Stanford University in 1972, and it was used to help diagnose bacterial infections and perscribe the needed antibiotics to fix it.";
        mycin.innerHTML = bacteria;
        // Style it
        mycin.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(mycin);
    }

    function cart() {
        let cart = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let cartman = "You are most likely referring to the Stanford Cart. This was a fully autonimous vehicle that traveleed across a room in 5 hours, which is pretty good considering the cart was the first program to make decisions in a physical form.";
        cart.innerHTML = cartman;
        // Style it
        cart.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(cart);
    }

    function japan() {
        let japan = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let meiji = "You are most likely referring to the Wabot-2, a musical robotcreated in Japan. It could hold small conversation with humans, read music, and play music.";
        japan.innerHTML = meiji;
        // Style it
        japan.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(japan);
    }

    function munich() {
        let munich = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let zurich = "You are most likely referring to the first driverless car. It was experimented on in Munich in 1986, and the car was able to get up to 55 mph on an empty road with no human interference.";
        munich.innerHTML = zurich;
        // Style it
        munich.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(munich);
    }

    function jabber() {
        let jabber = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let wacky = "You are most likely referring to Rollo Carpenters 'Jabberwacky' program. This marked the first time that an AI chat-bot's conversations were more human, containing humor and emotion.";
        jabber.innerHTML = wacky;
        // Style it
        jabber.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(jabber);
    }

    function alice() {
        let alice = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let white = "You are most likely referring to ALICE, or the Artificial Linguistic Internet Computer Entity. This took alot of inspiration from ELIZA (1965), and it was the first AI program to rely on the World Wide Web to operate.";
        alice.innerHTML = white;
        // Style it
        alice.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(alice);
    }

    function kasparov() {
        let kasparov = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let garry = "You are most likely referring to the 1997 chess match where Grandmaster Garry Kasparov lost to Deep Blue, a computer program for chess. ";
        kasparov.innerHTML = garry;
        // Style it
        kasparov.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(kasparov);
    }

    function furby() {
        let furby = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let fur = "You are most likely referring to the Furby, a pet robot released in 1998, marking the first time AI andautonimous technology is mass produced and sold.";
        furby.innerHTML = fur;
        // Style it
        furby.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(furby);
    }

    function kismet() {
        let kismet = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let mit = "You are most likely referring to the KISMET program developed in 2000. The MIT creeated program was able to determine emotions.";
        kismet.innerHTML = mit;
        // Style it
        kismet.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(kismet);
    }

    function asimo() {
        let asimo = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let honda = "You are most likely referring to the ASIMO robot developed by Honda in 2000. This robot was able to deliver trays to patrons in a restaurant.";
        asimo.innerHTML = honda;
        // Style it
        asimo.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(asimo);
    }

    function driverless() {
        let driverless = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let tesla = "You are most likely referring to the driverless car Google developed between 2009 and 2014. Production began in 09', and after many years of trial and error the car was able to pass the Nevada State drivers test on its own.";
        driverless.innerHTML = tesla;
        // Style it
        driverless.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(driverless);
    }

    function watson() {
        let watson = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let holmes = "You are most likely referring to the 2011 Jepardy! episode where an AI, Watson, successfully beat two former Jepardy! champions, as seen in image 6.";
        watson.innerHTML = holmes;
        // Style it
        watson.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(watson);
    }

    function idsia() {
        let idsia = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let swiss = "You are most likely referring to the Swiss handwriting analysis AI IDSIA, which could recognize handwriting with a 0.27% margin of error in 2011.";
        idsia.innerHTML = swiss;
        // Style it
        idsia.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(idsia);
    }

    function unknown() {
        let unknown = document.createElement("p");
        // set the text
        let add = document.getElementById("addHere");
        let findGod = "I'm sorry, I don't know what you're refrencing. Maybe try being more specific, or less specific. You're the human here, you make the decisions.";
        unknown.innerHTML = findGod;
        // Style it
        unknown.classList.add("response");

        // Append to message box
        let followBox = document.getElementById("addHere");
        followBox.appendChild(unknown);
    }

    function exit() {
        popUp.style.visibility = "hidden";
    }
}