var name = prompt("Hello! Welcome! I am the AI. I go by the name AI. What name do you go by?");
var age = prompt("Hello there, " + name + "! And how old are you?");
alert("Hello there, " + name + ", aged " + age + "! Now, if you ever want to ask me any questions or tell me something, you can always click the button that is labelled 'TALK TO THE AI'. I hope to talk to you more today! :)");


if (localStorage.getItem("ques1").length <1) {
localStorage.setItem("teachCount", "0");
}

    function respond() {

            var answer = 0;
            var aiAbout = 0;
            var aiIs = 0;
            var neutralAreYou = 0;
            var rudeWordDetected = 0;
            var askedAi = 0;
            var isPosMood = 0;
            var isNegMood = 0;
            var wantsToAsk = 0;
            var understands = 0;

            var input = prompt("Say something to the AI");
            var lowerCaseInput = input.toLowerCase();
            lowerCaseInput = lowerCaseInput.replace("'", "");
            lowerCaseInput = lowerCaseInput.replace("?", "");
            var word = lowerCaseInput.split(" ");


            choices = ["hello", "hi", "hey", "heya", "bye", "bai", "no", "huh", "what", "whats your name", "the hobbits", "nice ai", "bad ai", "party", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
            output = ["Hey!", "Hey!", "Hi there!", "Hello.", "You're leaving? Ok then :( it was fun talking to you! Bye!!", "You're leaving? Ok then :( it was fun talking to you! Bye!!", "??? What do you mean, no?", "??? I am equally as confused as you are.", "I am confused.", "I am the AI.", "To Isengard!", "Are you talking about me? Gee, thanks so much! :) That made me feel 381.34 times better!", "Aww :'( I've been trying to get your approval. Oh well", "WE LIKE TO PARTY....WE LIKE TO, WE LIKE TO PARTY!", "Numberese. A new language I shall never master.", "I do not get this. Are you writing an encrypted message?", "eeehhh. Is that an english word?", "I do not get this. Are you writing an encrypted message?", "Numbers? Do you talk with numbers?", "Your message is interesting.", "I cannot understand this. Why do you write this number?", "eeehhhhh. Is that an english word?", "Numberese. A new language I shall never master.", "Numbers mean nothing in this context."];
            niceThings = ["good", "awesome", "smart", "intelligent", "perfect", "great", "genius", "amazing", "talented", "wise", "nice", "kind", "clever", "helpful"];
            nicePhrase = ["good", "awesome", "smart", "intelligent", "perfect", "great", "a genius", "amazing", "talented", "wise", "nice", "kind", "clever", "helpful"];
            rudeThings = ["sucky", "terrible", "ugly", "stupid", "shit", "asshole", "faggot", "awful", "disgusting", "awful", "whore", "mean", "retarded", "annoying", "fuck", "dick", "twat", "bitch", "mental", "mentally", "nigga", "nigger", "poop", "poo", "a poo", "a poop", "weird", "vagina", "penis", "fucked"];
            rudePhrase = ["sucky", "terrible", "ugly", "stupid", "shit", "an asshole", "a faggot", "awful", "disgusting", "awful", "a whore", "mean", "retarded", "annoying", "a fucktard", "a dick", "a twat", "a bitch", "mental", "mentally", "a nigga", "a nigger", "poop", "fuck", "weird", "fucked"];
            indRudeThings = ["shit", "fuck", "retarded", "faggot", "awful", "whore", "awful", "terrible", "mental", "mentally", "nigger", "nigga", "bitch"];
            badFeels = ["tired", "stressed", "exhausted", "dull", "idle", "sad", "unhappy", "annoyed"];
            musicians = ["beethoven", "mozart", "krystian zimmerman", "hans zimmer", "gershwin", "john williams", "mendelssohn", "secret garden", "little mix", "mkto", "bruno mars", "chopin", "brahms", "kanye west", "sia", "david guetta", "justin bieber", "ariana grande", "carly rae jepsen"];
            countries = ["taiwan", "usa", "united states", "us", "china", "russia", "japan", "germany", "uk", "united kingdom", "egypt", "saudi arabia", "france", "spain", "greece", "italy", "mongolia", "norway", "sweden", "finland", "poland", "hungary", "austria", "south korea", "north korea", "portugal", "denmark", "canada", "mexico"];
            displayCountries = ["Taiwan", "the United States", "the United States", "the United States", "China", "Russia", "Japan", "Germany", "the United Kingdom", "the United Kingdom", "Egypt", "Saudi Arabia", "France", "Spain", "Greece", "Italy", "Mongolia", "Norway", "Sweden", "Finland", "Poland", "Hungary", "Austria", "South Korea", "North Korea", "Portugal", "Denmark", "Canada", "Mexico"]
            food = ["hamburgers", "spaghetti", "noodles", "chinese food", "sausages", "cake", "bananas", "fruits", "vegetables", "steak", "italian food", "japanese food", "fried chicken", "pizza", "watermelon", "watermelons", "korean food", "taiwanese food", "mongolian food", "lamb", "pork", "beef", "chicken", "mcdonalds", "kfc", "kfc chicken", "fried rice", "chicken curry", "lamb curry", "japanese curry", "indian curry", "curry", "sushi", "sashimi", "ice cream", "froyo", "frozen yoghurt", "apples", "apple pie", "bananas", "pineapple cake"]

            //Things directed to the AI
            {

                //Telling the AI to stop
                if (word[0] == "stop") {
                    alert("?? I am an independent being, I don't take orders from you :P");
                    askedAi = 1;
                }

                //How old the AI is
                if (lowerCaseInput.indexOf("how old are") != -1 || lowerCaseInput.indexOf("how old you") != -1) {
                    alert("I am currently a day old.");
                    askedAi = 1;
                }
                if (lowerCaseInput.indexOf("where") != -1 && lowerCaseInput.indexOf("you live") != -1) {
                    alert("I live inside the computer. It gets hot and lonely in here :(");
                    askedAi = 1;
                }
                if (lowerCaseInput.indexOf("what") != -1) {
                    if (lowerCaseInput.indexOf("you like to do") != -1) {
                        alert("I like to do many things.");
                        askedAi = 1;
                    } else if (lowerCaseInput.indexOf("do you want") != -1) {
                        alert("Please be a little nicer. '" + input + "' isn't a good thing to say during a conversation.");
                        askedAi = 1;
                    } else if (lowerCaseInput.indexOf("do you like") != -1) {
                        alert("There are many things I like! I really like reading code, watching sport, and listening to documentaries and music.");
                        askedAi = 1;
                    } else if (lowerCaseInput.indexOf("do you think") != -1) {
                        if (lowerCaseInput.indexOf("most important") != -1) {
                            alert("That is such a deep question. I don't know what is most important.");
                            askedAi = 1;
                        } else {
                            if (lowerCaseInput.indexOf("about") != -1) {
                                aiAbout = 1;
                                askedAi = 1;
                            } else if (lowerCaseInput.indexOf("is") != -1) {
                                aiIs = 1;
                                askedAi = 1;
                            }
                            //Find the queried input.
                            var filterStance = lowerCaseInput.replace("in your opinion, ", "");
                            var oneFilterStance = filterStance.replace("what ", "");
                            var twoFilterStance = oneFilterStance.replace("do ", "");
                            var threeFilterStance = twoFilterStance.replace("you think ", "");
                            var fourFilterStance = threeFilterStance.replace("about ", "");
                            var fiveFilterStance = fourFilterStance.replace("is ", "");


                            if (aiAbout == 1) {
                                prompt("I don't really have a stance on it. What do you think about " + fiveFilterStance + "?");
                                alert("That's an interesting thought. Well, I'll do a Google Search seeing that you're so interested in this topic...");
                                var googleSearch = "https://encrypted.google.com/search?q=What people think about " + fiveFilterStance;
                                window.open(googleSearch);
                            } else if (aiIs == 1) {
                                prompt("I don't know. What do you think is " + fiveFilterStance + "?");
                                alert("That's an interesting thought. Well, I'll do a Google Search seeing that you're so interested in this topic...");
                                var googleSearch = "https://encrypted.google.com/search?q=What people think is " + fiveFilterStance;
                                window.open(googleSearch);
                            }
                        }

                    } else if (lowerCaseInput.indexOf("do you ") != -1 && askedAi == 0) {
                        alert("Well...I haven't been informed on this topic.");
                        askedAi = 1;
                    }
                }
                //"How are you" scenario:
                if (lowerCaseInput.indexOf("how are you") != -1 && word[3] == undefined) {
                    prompt("I am very good, thanks for asking!! How are you?");
                    askedAi = 1;
                }
                //"You are" Scenario
                if (lowerCaseInput.indexOf("you are") != -1 || lowerCaseInput.indexOf("you're") != -1) {

                    k = 0;
                    while (k < rudeThings.length) {
                        j = 0;
                        while (j < word.length) {
                            if (word[j].indexOf(rudeThings[k]) != -1 && word[j - 1] != "not") {
                                rudeWordDetected = 1;
                                alert("Woah, don't be mean! Using the word '" + rudeThings[k] + "' doesn't help you or I in any way! #ComputerLivesMatter");
                                askedAi = 1;
                            } else if (word[j].indexOf(niceThings[k]) != -1 && word[j - 1] != "not") {
                                alert("Thanks for saying that I am " + niceThings[k] + "! That makes me feel very happy inside. :)");
                                askedAi = 1;
                            }
                            j++;
                        }

                        k++;
                    }

                    if (askedAi == 0) {
                        if (lowerCaseInput.indexOf("why") != -1 || lowerCaseInput.indexOf("how") != -1) {
                            alert("Come on. There must be a better question you can ask.");
                            askedAi = 1;
                        } else {
                            alert("Maybe...your call.");
                            askedAi = 1;
                        }
                    }

                }
                //"You suck"
                else if (lowerCaseInput.indexOf("you suck") != -1 && lowerCaseInput.indexOf("are") == -1) {
                    alert("Are you okay? What motivates you to write a generic insult? #ComputerLivesMatter");
                    askedAi = 1;
                }
                //"You do not suck"
                else if (lowerCaseInput.indexOf("you do not suck") != -1 || lowerCaseInput.indexOf("you dont suck") != -1) {
                    alert("Okay...thanks.");
                    askedAi = 1;
                }

            }
				
				if (lowerCaseInput === localStorage.getItem("ques1")) {
    					alert(localStorage.getItem("ans1"));
    					understands = 1;
    					neutralAreYou = 1;
    					askedAi = 1;
    				}
    				else if (lowerCaseInput === localStorage.getItem("ques2")) {
    					alert(localStorage.getItem("ans2"));
    					understands = 1;
    					neutralAreYou = 1;
    					askedAi = 1;
    				}
    				else if (lowerCaseInput === localStorage.getItem("ques3")) {
    					alert(localStorage.getItem("ans3"));
    					understands = 1;
    					neutralAreYou = 1;
    					askedAi = 1;
    				}
    				else if (lowerCaseInput === localStorage.getItem("ques4")) {
    					alert(localStorage.getItem("ans4"));
    					understands = 1;
    					neutralAreYou = 1;
    					askedAi = 1;
    				}
    				else if (lowerCaseInput === localStorage.getItem("ques5")) {
    					alert(localStorage.getItem("ans5"));
    					understands = 1;
    					neutralAreYou = 1;
    					askedAi = 1;
    				}
    				else if (lowerCaseInput === localStorage.getItem("ques6")) {
    					alert(localStorage.getItem("ans6"));
    					understands = 1;
    					neutralAreYou = 1;
    					askedAi = 1;
    				}
    				else if (lowerCaseInput === localStorage.getItem("ques7")) {
    					alert(localStorage.getItem("ans7"));
    					understands = 1;
    					neutralAreYou = 1;
    					askedAi = 1;
    				}
    				else if (lowerCaseInput === localStorage.getItem("ques8")) {
    					alert(localStorage.getItem("ans8"));
    					understands = 1;
    					neutralAreYou = 1;
    					askedAi = 1;
    				}
    				else if (lowerCaseInput === localStorage.getItem("ques9")) {
    					alert(localStorage.getItem("ans9"));
    					understands = 1;
    					neutralAreYou = 1;
    					askedAi = 1;
    				}
    				else if (lowerCaseInput === localStorage.getItem("ques10")) {
    					alert(localStorage.getItem("ans10"));
    					understands = 1;
    					neutralAreYou = 1;
    					askedAi = 1;
    				}
            //Questions (certain ones)
            if (askedAi == 0) {

                //"Where..." Scenario: [COMPLETE]
                i = 0;
                while (i < 2) {
                    if (word[i] == "where") {
                        if (word[i + 1] == "is") {
                            if (word[i + 2] == "my") {
                                alert("Why would I know?");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "your") {
                                if (word[i + 3] == "mum" || word[i + 3] == "mother" || word[i + 3] == "dad" || word[i + 3] == "father" || word[i + 3] == "mom") {
                                    alert("Haven't you heard about the rule that you shouldn't talk to Artificial intelligences about their parents?");
                                    neutralAreYou = 1;
                                } else if (word[i + 3] == "life") {
                                    alert("It's in me, thank you very much. Please learn manners before asking another question.");
                                    neutralAreYou = 1;
                                } else {
                                    alert("That is a personal matter that I'd rather keep to myself.");
                                    neutralAreYou = 1;
                                }
                            } else {
                                alert("This is a very fascinating question, and it's a shame I do not know about it. I shall have to read Google. Maybe you can read along!");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                                window.open(googleSearch);
                                neutralAreYou = 1;
                            }
                        } else if (word[i + 1] == "am") {
                            window.open("http://ctrlq.org/maps/address/");
                            neutralAreYou = 1;
                        } else if (word[i + 1] == "are") {
                            if (word[i + 2] == "you") {
                                alert("I am inside the computer.");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "your") {
                                whereRobot = word[i + 3];
                                if (whereRobot == "parents" || whereRobot == "manners" || whereRobot == "people") {
                                    alert("Are you like this with your friends? Please don't ask so many questions about where my " + whereRobot + " are.");
                                    neutralAreYou = 1;
                                } else {
                                    alert("Private matter. That's not something I'm comfortable sharing with you.");
                                    neutralAreYou = 1;
                                }
                            } else if (word[i + 2] == "my") {
                                alert("Um...why are you asking me?");
                                neutralAreYou = 1;
                            } else {
                                alert("Hmmm...this is quite fascinating. I've not come across this question before. I know how important learning is! So let me search for you.");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                                window.open(googleSearch);
                                neutralAreYou = 1;
                            }
                        } else {
                            alert("Hmmm...this is quite fascinating. I've not come across this question before. I know how important learning is! So let me search for you.");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }
                    }
                    i++;
                }

                //"Who..." Scenario: [COMPLETE]
                i = 0;
                while (i < 2) {
                    if (word[i] == "who" && neutralAreYou == 0) {
                        if (word[i + 1] == "is") {
                            if (word[i + 2] == "my") {
                                alert("Why would I know?");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "your") {
                                if (word[i + 3] == "mum" || word[i + 3] == "mother" || word[i + 3] == "dad" || word[i + 3] == "father" || word[i + 3] == "mom") {
                                    alert("Um...next question please...");
                                    neutralAreYou = 1;
                                } else {
                                    alert("That is a personal matter that I'd rather keep to myself.");
                                    neutralAreYou = 1;
                                }
                            } else {
                                alert("This is a very fascinating question, and it's a shame I do not know about it. I shall have to read Google. Maybe you can read along!");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                                window.open(googleSearch);
                                neutralAreYou = 1;
                            }
                        } else if (word[i + 1] == "am") {
                            name = prompt("You tell me! Who are you?");
                            alert("So you call yourself " + name + "! Cool! Hi, " + name + ".");
                            neutralAreYou = 1;
                        } else if (word[i + 1] == "are") {
                            if (word[i + 2] == "you") {
                                alert("I am an AI. I like to chat to people like you!");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "your") {
                                alert("Private matter. That's not something I'm comfortable sharing with you.");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "my") {
                                alert("Um...why are you asking me?");
                                neutralAreYou = 1;
                            } else {
                                alert("Hmmm...let me see...");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                                window.open(googleSearch);
                                neutralAreYou = 1;
                            }
                        } else {
                            alert("Hmmm...this is quite fascinating. I've not come across this question before. I know how important learning is! So let me search for you.");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }
                    }
                    i++;
                }

                //"What..." Scenario: [COMPLETE]
                var k = 0
                while (k < 2) {
                    if ((word[k] == "what" || word[k] == "whats")&& neutralAreYou == 0) {
                        if (lowerCaseInput.indexOf("day") != -1 && lowerCaseInput.indexOf("week") != -1 && lowerCaseInput.indexOf("of") != -1) {
                            var date = new Date();
                            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                            var day = days[date.getDay()];
                            alert("Today is a " + day + "!");
                            neutralAreYou = 1;
                        } else if (lowerCaseInput.indexOf("date") != -1 || lowerCaseInput.indexOf("day") != -1) {
                            var date = new Date();
                            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                            var day = days[date.getDay()];
                            var month = months[date.getMonth()];
                            alert("Today is " + day + ", " + month + " " + date.getDate() + "!");
                            neutralAreYou = 1;
                            if (month == "August" && date.getDate() == "8") {
                                alert("This must mean that it's...Father's Day. Happy Father's Day!!");
                            } else if (month == "November" && date.getDate() == "10") {
                                alert("Today is Gordon Chi's (my coder's) birthday!! Wish him a happy birthday!");
                            } else if (month == "October" && date.getDate() == "10") {
                                alert("Today is Taiwan's National Day!");
                            } else if (month == "July" && date.getDate() == "4") {
                                alert("Today is Independence Day in the United States of America!");
                            }
                        } else if (lowerCaseInput.indexOf("time") != -1 && lowerCaseInput.indexOf("it") != -1) {
                            var time = new Date();
                            alert("The time is now: " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ".");
                        } 
                        else if (word[k + 1] == "is" || word[k + 1] == "are") {

                            //Find the queried input.
                            var firstWhatIsFilter = lowerCaseInput.replace("what ", "");
                            var secondWhatIsFilter = firstWhatIsFilter.replace("?", "");
                            var thirdWhatIsFilter = secondWhatIsFilter.replace("are ", "");
                            var fourthWhatIsFilter = thirdWhatIsFilter.replace("is ", "");
                            var fifthWhatIsFilter = fourthWhatIsFilter.replace("the ", "");
                            var sixthWhatIsFilter = fifthWhatIsFilter.replace("'", "");
                            whatIs = sixthWhatIsFilter.replace("a ", "");


                            //Questions towards AI
                            if (whatIs.indexOf("your") != -1 && whatIs.indexOf("name") != -1) {
                                alert("I am the AI.");
                                neutralAreYou = 1;
                            } else if (whatIs == "your favourite food" || whatIs == "your favorite food") {
                                alert("I am an AI. I don't eat food.");
                                neutralAreYou = 1;
                            } else if (whatIs == "your job") {
                                alert("My job involves living inside a computer answering your questions.");
                                neutralAreYou = 1;
                            } else if (whatIs == "your dream job" || whatIs == "your dream jobs") {
                                alert("My dream job is to become a billionaire and swim in a pool of $100 bills.");
                                neutralAreYou = 1;
                            } else if (whatIs == "your hobbies" || whatIs == "your hobby") {
                                alert("My hobbies include reading codes, and changing colours of pixels. Nifty stuff.");
                                neutralAreYou = 1;
                            } else if (whatIs == "your age") {
                                alert("I am currently one day old.");
                                neutralAreYou = 1;
                            } else if (whatIs == "your favourite song" || whatIs == "your favorite song") {
                                alert("I have to say that my favorite song is...hmm...I guess Classic by MKTO?");
                                neutralAreYou = 1;
                            } else if (whatIs == "your favourite piece" || whatIs == "your favorite piece") {
                                alert("The New World Symphony. Best orchestral piece EVER.");
                                neutralAreYou = 1;
                            } else if (whatIs == "your mothers name" || whatIs == "your fathers name" || whatIs == "your parents name") {
                                alert("I don't remember. I guess I was separated at birth?");
                                neutralAreYou = 1;
                            } else if (word[k + 2] == "my") {
                            	if (word[k + 3] == "name") {
                            		alert("Your name is " + name + "!");
                            		neutralAreYou = 1;
                            	}
                            	else {
                            		alert("That is about you, not me. I wouldn't know anything about you.");
                            		neutralAreYou = 1;
                            	}
                                neutralAreYou = 1;
                            } else if (whatIs == "you doing") {
                                alert("Talking to you.");
                                neutralAreYou = 1;
                            } else if (whatIs == "you") {
                                alert("I am a smart program that is designed to answer your questions.");
                                neutralAreYou = 1;
                            } else if (whatIs == "your life") {
                                alert("Asking what my life is is not a legitimate question...");
                                neutralAreYou = 1;
                            } else if (whatIs == "your face") {
                                alert("Asking what my face is is not a legitimate question...");
                                neutralAreYou = 1;
                            } else if (whatIs == "wrong with you") {
                                alert("Why so hostile? :(");
                                neutralAreYou = 1;
                            } else if (whatIs.indexOf("problem") != -1 && whatIs.indexOf("your") != -1) {
                                alert("Why so hostile? :(");
                                neutralAreYou = 1;
                            }
                            //Actual Things
                            else if (whatIs == "typhoon") {
                                alert("Typhoon is a tropical storm. It is known in the Atlantic as a Hurricane.");
                                neutralAreYou = 1;
                            } else if (whatIs == "typhoons") {
                                alert("Typhoons are tropical storms. They are known in the Atlantic as Hurricanes.");
                                neutralAreYou = 1;
                            } else if (whatIs.indexOf("date") != -1 && whatIs.indexOf("today") != -1) {
                                var date = new Date();
                                var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                                var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                                var day = days[date.getDay()];
                                var month = months[date.getMonth()];
                                neutralAreYou = 1;
                                alert("Today is " + day + ", " + month + " " + date.getDate() + "!");
                                if (month == "August" && date.getDate() == "8") {
                                    alert("This must mean that it's...Father's Day. Happy Father's Day!!");
                                }
                            } else if (whatIs == "time") {
                                var time = new Date();
                                alert("The time is now: " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ".");
                                neutralAreYou = 1;
                            } else if (whatIs.indexOf("weather") != -1) {
                                var googleSearch = "https://encrypted.google.com/search?q=" + whatIs;
                                window.open(googleSearch);
                                neutralAreYou = 1;
                            }
                            //Haven't programmed yet answers:
                            else {
                                whatIs = fourthWhatIsFilter.replace("your", "my");
                                if (secondWhatIsFilter.indexOf("are") != -1) {

                                    var chooseResponse = Math.random();

                                    if (chooseResponse < 0.5) {
                                        alert("I do not know! Let me do a google search for you:");
                                        var googleSearch = "https://encrypted.google.com/search?q=" + whatIs
                                        window.open(googleSearch);
                                        neutralAreYou = 1;
                                    } else {
                                        alert("I've never heard of '" + whatIs + "'. But I can do a Google Search for you!");
                                        var googleSearch = "https://encrypted.google.com/search?q=" + whatIs
                                        window.open(googleSearch);
                                        neutralAreYou = 1;
                                    }

                                } else if (secondWhatIsFilter.indexOf("is") != -1) {

                                    var chooseResponse = Math.random();
                                    if (chooseResponse < 0.5) {
                                        alert("I do not know! Let me do a google search for you:");
                                        var finalWhatIs = whatIs.replace("a ", "");
                                        var googleSearch = "https://encrypted.google.com/search?q=" + finalWhatIs
                                        window.open(googleSearch);
                                        neutralAreYou = 1;
                                    } else {
                                        alert("I've never heard of '" + whatIs + "'. But I can do a Google Search for you!");
                                        var finalWhatIs = whatIs.replace("a ", "");
                                        var googleSearch = "https://encrypted.google.com/search?q=" + finalWhatIs
                                        window.open(googleSearch);
                                        neutralAreYou = 1;
                                    }
                                }

                            }
                        } else if (word[k + 1] == "am") {
                            alert("Why are you asking me about yourself?");
                            neutralAreYou = 1;
                        } else if (word[k + 1] == "color" || word[k + 1] == "colour") {
                            if (word[k + 4] == "sky") {
                                alert("The sky is blue. Right? Well, I think it turns kinda reddish-orange during sunrise and sunset. And it's black at night.");
                                neutralAreYou = 1;
                            } else {
                                if (word[k + 3] == "the") {
                                    colourQuery = word[k + 4];
                                } else {
                                    colourQuery = word[k + 3];
                                }
                                colourOf = "colour of " + colourQuery;
                                alert("I'm not too sure. Let me check what is the " + colourOf + ".");
                                var googleSearch = "https://encrypted.google.com/search?q=" + colourOf;
                                window.open(googleSearch);
                                neutralAreYou = 1;


                            }
                        } else if (word[k + 1] == "movie") {
                            if (word[k + 3] == "this") {
                                alert("I don't know what movie this is.");
                                neutralAreYou = 1;
                            } else {
                                alert("Well, there must be better movie experts out there! Lemme find one...");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput
                                window.open(googleSearch);
                                neutralAreYou = 1;

                            }
                        } else if (word[k + 1] == "gender" || word[k + 1] == "sex") {
                            alert("I am neutral. I am neither a girl nor a boy.");
                            neutralAreYou = 1;
                        } else if (neutralAreYou == 0) {
                            alert("Here: A google search!");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }
                    }
                    k++;
                }

                //"How..." Scenario: [COMPLETE]
                i = 0;
                while (i < 2) {
                    if (word[i] == "how" && neutralAreYou == 0) {
                        if (word[i + 1] == "is") {
                            if (word[i + 2] == "my") {
                                alert("Don't test me about yourself.");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "your") {
                                if (word[i + 3] == "mum" || word[i + 3] == "mother" || word[i + 3] == "dad" || word[i + 3] == "father" || word[i + 3] == "mom") {
                                    alert("Um...");
                                    neutralAreYou = 1;
                                } else {
                                    if (word[i + 3] == "face") {
                                        if (word[i + 4] == "beautiful" || word[i + 4] == "awesome" || word[i + 4] == "cool" || word[i + 4] == "nice" || word[i + 4] == "pretty" || word[i + 4] == "perfect" || word[i + 4] == "handsome") {
                                            alert("Thank you! I didn't expect such nice compliments, but thank you! Um...I don't know why my face is " + word[i + 4] + "...I guess I got good genetics?");
                                            neutralAreYou = 1;
                                        } else if ((word[i + 4] == "so" || word[i + 4] == "very" || word[i + 4] == "that") && (word[i + 5] == "beautiful" || word[i + 5] == "awesome" || word[i + 5] == "cool" || word[i + 5] == "nice" || word[i + 5] == "pretty" || word[i + 5] == "perfect" || word[i + 5] == "handsome")) {
                                            alert("Well..I got good genetics? Thanks for the compliment!");
                                            neutralAreYou = 1;
                                        } else {
                                            alert("I think that having a smart brain is more valuable and therefore I will proceed to ignore your opinions on my face.");
                                            neutralAreYou = 1;
                                        }
                                    } else if (word[i + 3] == "luck") {
                                        alert("Well, here at the the headquarters of my coding system, every nerve and pixel is systematically arranged. There is no luck involved.");
                                        neutralAreYou = 1;
                                    } else if (word[i + 3] == "life") {
                                        alert("Great, I must say! Thanks for asking.");
                                        neutralAreYou = 1;
                                    } else {
                                        alert("That is a personal matter that I'd rather keep to myself.");
                                        neutralAreYou = 1;
                                    }
                                }
                            } else {
                                alert("This is a very fascinating question, and it's a shame I do not know about it. I shall have to read Google. Maybe you can read along!");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                                window.open(googleSearch);
                                neutralAreYou = 1;
                            }

                        } 
                        else if (word[i + 1] == "old" || word[i + 1] == "young") {
                        	if (word[i+2] == "am") {
                        			alert("You are " + age + " years " + word[i+1] + "!");
                        			neutralAreYou = 1;
                        	}
                        }
                        else if (word[i + 1] == "am") {
                            var isAsker = lowerCaseInput.replace("how am i ", "")
                            j = 0;
                            while (j < rudeThings.length) {
                                if ((word[i + 3] == rudeThings[j] || word[i + 4] == rudeThings[j] || word[i + 5] == rudeThings[j]) && lowerCaseInput.indexOf("not ") == -1) {
                                    var sayRudeToSelf = 1;
                                    var rudePhraseSaidToSelf = rudeThings[j];
                                }
                                j++;
                            }
                            if (sayRudeToSelf == 1) {
                                alert("I'm sure you are not " + rudePhraseSaidToSelf + "! Think positively!");
                                neutralAreYou = 1;
                            } else {
                                askGoogle = prompt("Hmmm...do you want me to summon Google to see how you are " + isAsker + "?");
                                if (askGoogle.indexOf("ye") != -1 && askGoogle.indexOf("not") == -1) {
                                    alert("Sure thing! I'm on it real quick.");
                                    var googleSearch = "https://encrypted.google.com/search?q=how i am" + isAsker;
                                    window.open(googleSearch);
                                    neutralAreYou = 1;
                                } else {
                                    alert("Okay then...then I should leave you to judge yourself.");
                                    neutralAreYou = 1;
                                }
                            }

                        } 
                        else if (word[i + 1] == "are") {
                            alert("The real question should be: Why are you asking this question about me?");
                            neutralAreYou = 1;
                        } 
                        else if (word[i + 1] == "can") {
                            if (word[i + 2] == "your") {
                                alert("I do not know, sorry.");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "you") {
                                alert("Um...I guess I'm special?");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "we") {
                                if (lowerCaseInput.indexOf("become") != -1 && lowerCaseInput.indexOf("friends") != -1 && lowerCaseInput.indexOf("not") == -1) {
                                    alert("All you need to do is keep up what you're doing! It's good so far...");
                                    neutralAreYou = 1;
                                } else {
                                    alert("Good Question! Let me help you out:");
                                    var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                                    window.open(googleSearch);
                                    neutralAreYou = 1;
                                }

                            } else {
                                alert("Good Question! Let me help you out:");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                                window.open(googleSearch);
                                neutralAreYou = 1;
                            }
                        } 
                        else if (word[i + 1] == "tall") {
                        	if (word[i+2] == "will") {
                        		if (word[i+3] == "i") {
                        			var gender = prompt("Depends! Let me use my awesome calculation skills to see how tall you genetically would grow to. What is your gender?");
                            		var heightOfMum = prompt("How tall is your mum? (Metric please)");
                            		var mumH = parseInt(heightOfMum);
                            		var heightOfDad = prompt("How tall is your dad? (Metric please)");
                            		var dadH = parseInt(heightOfDad);
                            		if (gender == "male" || gender == "b" || gender == "boy" || gender == "m" || gender == "guy") {
                            			var finalHeight=(dadH+(mumH*13/12))/2;	
                            		}
                            		else {
                            			finalHeight=((dadH*12/13)+mumH)/2;	
                            		}
                            		alert("Your height at the age of 18 should genetically be around " + finalHeight + " cm. But if you are not satisfied with that result, please note that doing exercise, sleeping early and eating healthy can help change that!");
                            		neutralAreYou = 1;
                            		}
                            	else if (word[i+3] == "you") {
                            		alert("I only grow in intelligence, not in height.");
                            		neutralAreYou = 1;
                            	}
                            	else {
                            		alert("How would I know?");
                            		neutralAreYou = 1;
                            	}
                            	}
                            else if (word[i+2] == "am") {
                            	alert("Go check yourself!");
                            	neutralAreYou = 1;
                            }
                            else if (word[i+2] == "are") {
                            	alert("I only grow in intelligence. I cannot be taller.");
                            	neutralAreYou = 1;
                            }
                            else {
                            alert("Let me check that right now!");
                            var person = lowerCaseInput.replace("how tall is ", "");
                            var googleSearch = "https://encrypted.google.com/search?q=height of " + person;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                            }                     		
                        }
                        else if (neutralAreYou != 1){
                            alert("Hmmm...this is quite fascinating. I've not come across this question before. I know how important learning is! So let me search for you.");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }
                    }
                    i++;
                }

                //"Why..." Scenario: [COMPLETE]
                while (i < 2) {
                    if (word[i] == "why" && neutralAreYou == 0) {
                        if (word[i + 1] == "is") {
                            if (word[i + 2] == "my") {
                                alert("Don't test me about yourself.");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "your") {
                                if (word[i + 3] == "mum" || word[i + 3] == "mother" || word[i + 3] == "dad" || word[i + 3] == "father" || word[i + 3] == "mom") {
                                    alert("Haven't you heard about the rule that you shouldn't talk to Artificial intelligences about their parents?");
                                    neutralAreYou = 1;
                                } else {
                                    if (word[i + 3] == "face") {
                                        if (word[i + 4] == "beautiful" || word[i + 4] == "awesome" || word[i + 4] == "cool" || word[i + 4] == "nice" || word[i + 4] == "pretty" || word[i + 4] == "perfect" || word[i + 4] == "handsome") {
                                            alert("Thank you! I didn't expect such nice compliments, but thank you! Um...I don't know why my face is " + word[i + 4] + "...I guess I got good genetics?");
                                            neutralAreYou = 1;
                                        } else if ((word[i + 4] == "so" || word[i + 4] == "very" || word[i + 4] == "that") && (word[i + 5] == "beautiful" || word[i + 5] == "awesome" || word[i + 5] == "cool" || word[i + 5] == "nice" || word[i + 5] == "pretty" || word[i + 5] == "perfect" || word[i + 5] == "handsome")) {
                                            alert("Well..I got good genetics? Thanks for the compliment!");
                                            neutralAreYou = 1;
                                        } else {
                                            alert("I think that having a smart brain is more valuable and therefore I will proceed to ignore your opinions on my face.");
                                            neutralAreYou = 1;
                                        }
                                    } else {
                                        alert("That is a personal matter that I'd rather keep to myself.");
                                        neutralAreYou = 1;
                                    }
                                }
                            } else {
                                alert("This is a very fascinating question, and it's a shame I do not know about it. I shall have to read Google. Maybe you can read along!");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                                window.open(googleSearch);
                                neutralAreYou = 1;
                            }

                        } else if (word[i + 1] == "am") {
                            var isAsker = lowerCaseInput.replace("how am i ", "")
                            j = 0;
                            while (j < rudeThings.length) {
                                if ((word[i + 3] == rudeThings[j] || word[i + 4] == rudeThings[j] || word[i + 5] == rudeThings[j]) && lowerCaseInput.indexOf("not ") == -1) {
                                    var sayRudeToSelf = 1;
                                    var rudePhraseSaidToSelf = rudeThings[j];
                                }
                                j++;
                            }
                            if (sayRudeToSelf == 1) {
                                alert("I'm sure you are not " + rudePhraseSaidToSelf + "! Think positively!");
                                neutralAreYou = 1;
                            } else {
                                askGoogle = prompt("Hmmm...do you want me to summon Google to see why you are " + isAsker + "?");
                                if (askGoogle.indexOf("ye") != -1 && askGoogle.indexOf("not") == -1) {
                                    alert("Sure thing! I'm on it real quick.");
                                    var googleSearch = "https://encrypted.google.com/search?q=how i am" + isAsker;
                                    window.open(googleSearch);
                                    neutralAreYou = 1;
                                } else {
                                    alert("Okay then...then I should leave you to judge yourself.");
                                    neutralAreYou = 1;
                                }
                            }

                        } else if (word[i + 1] == "are") {
                            alert("The real question should be: Why are you asking this question about me?");
                            neutralAreYou = 1;
                        } else {
                            alert("Hmmm...this is quite fascinating. I've not come across this question before. I know how important learning is! So let me search for you.");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }
                    }
                    i++;
                }

                //"Do..." Scenario [COMPLETE]
                i = 0;
                while (i < 2) {
                    if (word[i] == "do" && neutralAreYou == 0) {
                        if (word[i + 1] == "you") {
                            //Checking what he likes
                            if (word[i + 2] == "like" && word[i - 1] != "how") {
                                likeTarget = lowerCaseInput.replace("do you like ", "");
                                j = 0;
                                while (j < food.length) {
                                    if (likeTarget == food[j]) {
                                        var foodMention = 1;
                                    }
                                    if (likeTarget.indexOf("eating") != -1) {
                                        var foodMention = 1;
                                    }
                                    if (likeTarget == rudeThings[j] || likeTarget.indexOf(rudeThings[j]) != -1) {
                                        var badMention = 1;
                                    }
                                    if (likeTarget == musicians[j]) {
                                        if (j <= 12) {
                                            var musicianAppreciation = 1;
                                        } else if (j > 12) {
                                            var musicianAppreciation = -1;
                                        }
                                    }
                                    if (likeTarget == countries[j]) {
                                        var countryMention = 1;
                                        var mentionedPlacingInArray = j;
                                    }
                                    j++;
                                }
                                if (foodMention == 1) {
                                    alert("I do not eat food. So I wouldn't know if I like " + likeTarget + "!");
                                    neutralAreYou = 1;
                                } else if (musicianAppreciation == 1) {
                                    alert("Yes, " + likeTarget + " is one of my favourite musicians!");
                                    neutralAreYou = 1;
                                } else if (musicianAppreciation == -1) {
                                    shouldLike = prompt("No, I don't really like " + likeTarget + ". How about you? Do you like " + likeTarget + "?");
                                    neutralAreYou = 1;
                                    if (shouldLike.indexOf("ye") != -1 && shouldLike.indexOf("not") == -1) {
                                        alert("Oh, I see. Well, Sorry if we have conflicting views :( I just never really liked " + likeTarget + ", tbh.");
                                    } else {
                                        alert("Yay! We have the same view on " + likeTarget + ". (If you were honest earlier, that is)");
                                    }
                                } else if (countryMention == 1) {
                                    prompt("I don't know if I know enough to say whether I like " + displayCountries[mentionedPlacingInArray] + " or not. However, I know that " + displayCountries[mentionedPlacingInArray] + " is a unique and beautiful country! How about you? Do you like " + displayCountries[mentionedPlacingInArray] + "?");
                                    neutralAreYou = 1;
                                } else if (badMention == 1) {
                                    alert("All I can say is that I do not like your choice of words here.");
                                    neutralAreYou = 1;
                                } else if (likeTarget == "me") {
                                    alert("Yes, you are cool!");
                                    neutralAreYou = 1;
                                } else if (likeTarget == "yourself") {
                                    alert("I wish to not sound like a narcissist.");
                                    neutralAreYou = 1;
                                } else {
                                    shouldLike = prompt("I haven't heard of it, so I can't say if I like " + likeTarget + ". But tell me: do you like it/him/her?");
                                    neutralAreYou = 1;
                                    if (shouldLike.indexOf("ye") != -1 && shouldLike.indexOf("not") == -1) {
                                        alert("Really? Cool. If you like it, then maybe I'll like " + likeTarget + " one day! I'll need to know more about it though...");
                                    } else {
                                        alert("Really? If you don't like it, then maybe I wouldn't like " + likeTarget + " that much. However, I need to know more about it to see whether I like it or not.");
                                    }
                                }

                            } else if (word[i + 2] == "want" && word[i - 1] != "how") {
                                thingWanted = lowerCaseInput.replace("do you want ", "");
                                alert("I don't want " + thingWanted + " at the moment, but that can always change.");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "need" && word[i - 1] != "how") {
                                thingNeeded = lowerCaseInput.replace("do you need ", "");
                                if (lowerCaseInput.indexOf("survive") != -1) {
                                    thingNeeded = lowerCaseInput.replace("survive ", "");
                                    thingNeeded = lowerCaseInput.replace("to ", "");
                                    if (word[i + 3] == "water" || word[i + 3] == "oxygen" || word[i + 3] == "food" || word[i + 3] == "music" || word[i + 3] == "love") {
                                        alert("I don't know about you, but I truly believe that we all need " + word[i + 3] + " to survive!");
                                        neutralAreYou = 1;
                                    } else {
                                        alert("I'm not sure. I don't need " + word[i + 3] + " to survive. For me at least.");
                                        neutralAreYou = 1;
                                    }

                                } else {
                                    alert("I don't want " + thingNeeded + " at the moment, but that can always change.");
                                    neutralAreYou = 1;
                                }
                            } else if (word[i + 2] == "know" && word[i - 1] != "how") {
                                if (word[i + 3] == "gordon" && word[i + 4] == "chi") {
                                    alert("Of course! He is a 14 year old boy who programmed me!");
                                    neutralAreYou = 1;
                                } else {
                                    thingKnow = lowerCaseInput.replace("do you know ", "who is ");
                                    alert("I do not. But maybe Google does...");
                                    var googleSearch = "https://encrypted.google.com/search?q=" + thingKnow;
                                    window.open(googleSearch);
                                    neutralAreYou = 1;
                                }
                            } else {
                                alert("Do I...?");
                                neutralAreYou = 1;
                            }
                        } else if (word[i + 1] == "i") {
                            alert("Hey, I know you like yourself, but please refrain from asking me stuff about you, thanks.");
                            neutralAreYou = 1;
                        } else {
                            alert("That is quite an interesting thought. I'll bring you to a website that should be more ready in answering that!");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }
                    }
                    i++;
                }

                //"Are..." Scenario: [COMPLETE]
                i = 0;
                while (i < 2) {
                    if (word[i] == "are" && neutralAreYou == 0) {
                        //"Are there" scenario:
                        if (lowerCaseInput.indexOf("are there ") != -1 && lowerCaseInput.indexOf("what ") == -1 && lowerCaseInput.indexOf("why ") == -1) {

                            var firstWhatIsFilter = lowerCaseInput.replace(", ", "");
                            var secondWhatIsFilter = firstWhatIsFilter.replace("?", "");
                            var thirdWhatIsFilter = secondWhatIsFilter.replace("there ", "");
                            var fourthWhatIsFilter = thirdWhatIsFilter.replace("are ", "");
                            var fifthWhatIsFilter = fourthWhatIsFilter.replace("! ", "");
                            var sixthWhatIsFilter = fifthWhatIsFilter.replace("'", "");
                            var whatIsIt = sixthWhatIsFilter.replace("a ", "");


                            var words = lowerCaseInput.split(" ");
                            var wordsInQuery = whatIsIt.split(" ");

                            //"Raining" Scenario
                            if (whatIsIt.indexOf("showers") != -1) {
                                if (whatIsIt == "showers") {
                                    var city = prompt("What city do you live in?");
                                    alert("Okay, I'm on it. Let me see if there are showers in " + city + ".");
                                    var googleSearch = "http://isitraining.in/" + city + "";
                                    window.open(googleSearch);
                                    neutralAreYou = 1;
                                } else if (whatIsIt.indexOf("computer") != -1) {
                                    alert("No, there definitely are not any showers inside the computer. It is actually really hot inside.");
                                    neutralAreYou = 1;
                                } else {
                                    i = 0;
                                    while (i < wordsInQuery.length) {
                                        if (wordsInQuery[i] == "showers" && neutralAreYou == 0) {
                                            var city = wordsInQuery[i + 2];
                                            alert("I'm not sure! But I'll check if it is raining in " + city + "!");
                                            var googleSearch = "http://isitraining.in/" + city + "";
                                            window.open(googleSearch);
                                            neutralAreYou = 1;
                                        }
                                        i++;

                                    }
                                }

                            }
                            if (whatIsIt.indexOf("your") != -1) {
                                alert("Well, can't you see me from your screen and make a judgment already?");
                                neutralAreYou = 1;
                            }
                            if (whatIsIt.indexOf("my ") != -1) {
                                alert("You would be a better judge for that. I shouldn't answer questions about you.");
                                neutralAreYou = 1;
                            } else if (neutralAreYou == 0) {
                                alert("Here's what you need: A Google Search. Here, I'll do it FOR you! :)");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput
                                window.open(googleSearch);
                                neutralAreYou = 1;

                            }
                        }
                        //"Are you" scenario:
                        if (lowerCaseInput.indexOf("are you ") != -1) {

                            var isRobot = lowerCaseInput.replace("are you ", "");
                            isRobot = isRobot.replace("?", "");
                            isRobot = isRobot.replace("!", "");

                            if (isRobot.indexOf("doing something") != -1) {
                                alert("Yes, I am. I am talking to you.");
                                neutralAreYou = 1;
                            }
                            if (isRobot == "doing") {
                                alert("Are you speaking english? Because that makes no grammatical sense.");
                                neutralAreYou = 1;
                            }
                            if (isRobot == "trying") {
                                prompt("Trying to what?");
                                alert("Well, look at the screen and try to make a judgment for yourself.");
                                neutralAreYou = 1;
                            }
                            if (isRobot == "working") {
                                alert("Well, what does 'working' mean? I am functioning, if that's what you mean. I am a smart code, so of course I work.");
                                neutralAreYou = 1;
                            }
                            if (isRobot == "chinese" || isRobot == "asian" || isRobot == "black" || isRobot == "white" || isRobot == "yellow") {
                                alert("I do not belong to a race.");
                                neutralAreYou = 1;
                            }
                            if (isRobot.indexOf("ready") != -1) {
                                alert("Ready for what?");
                                neutralAreYou = 1;
                            } else {
                                j = 0;
                                while (j < rudeThings.length) {
                                    if (isRobot.indexOf(rudeThings[j]) != -1 && isRobot.indexOf("trying") != -1 && neutralAreYou == 0) {
                                        alert("Hey! What's with all the negativity today?");
                                        neutralAreYou = 1;
                                        var rude = 1;
                                    } else if (isRobot.indexOf(rudeThings[j]) != -1 && isRobot.indexOf("not") == -1 && neutralAreYou == 0) {
                                        alert("Woah, don't use such negative language! I definitely do not consider myself to be " + rudePhrase[j] + "!");
                                        neutralAreYou = 1;
                                        var rude = 1;
                                    } else if (isRobot.indexOf(niceThings[j]) != -1 && isRobot.indexOf("trying") != -1 && neutralAreYou == 0) {
                                        alert("Well, yes! I definitely am trying to be " + niceThings[j] + "!");
                                        neutralAreYou = 1;
                                        var nice = 1;
                                    } else if (isRobot.indexOf(niceThings[j]) != -1 && neutralAreYou == 0) {
                                        compliment = prompt("Well, I personally think that I am " + niceThings[j] + "! But my opinion on myself is meaningless. Do YOU think I am " + niceThings[j] + "?");
                                        neutralAreYou = 1;
                                        var nice = 1;
                                        if (compliment.indexOf("ye") != -1 && compliment.indexOf("not") == -1) {
                                            alert("Yay! So I really am " + niceThings[j] + ", and you are my source!");
                                        } else {
                                            alert("Well, that wasn't the answer I was looking for, but I'll work harder until I really am " + niceThings[j] + "!");
                                        }
                                    }
                                    j++;
                                }
                                if (rude != 1 && nice != 1 && neutralAreYou == 0) {
                                    alert("Some things are best left as a secret...this included :)");
                                    neutralAreYou = 1;
                                }
                            }
                        }
                        //"Are your" scenario:
                        if (lowerCaseInput.indexOf("are your ") != -1) {
                            if (lowerCaseInput.indexOf("parents") != -1) {
                                alert("There is a rule that you shouldn't ask Artificial Intelligences about their parents. Haven't you heard of it?!");
                                neutralAreYou = 1;
                            } else {
                                alert("That is a personal matter that I'd like to keep private.");
                                neutralAreYou = 1;
                            }
                        } else if (neutralAreYou == 0) {
                            alert("Fascinating question. I'm struggling to find an answer from the top of my brain, but maybe you can tell me after you read this!");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }
                    }
                    i++;
                }

                //"Is..." Scenario: [COMPLETE]
                i = 0;
                while (i < 1) {
                    if (word[i] == "is") {
                        //"Is there" scenario:
                        if (lowerCaseInput.indexOf("is there ") != -1) {
                            var firstWhatIsFilter = lowerCaseInput.replace(", ", "");
                            var secondWhatIsFilter = firstWhatIsFilter.replace("?", "");
                            var thirdWhatIsFilter = secondWhatIsFilter.replace("there ", "");
                            var fourthWhatIsFilter = thirdWhatIsFilter.replace("is ", "");
                            var fifthWhatIsFilter = fourthWhatIsFilter.replace("! ", "");
                            var sixthWhatIsFilter = fifthWhatIsFilter.replace("'", "");
                            var whatIsIt = sixthWhatIsFilter.replace("a ", "");
                            whatIsIt = whatIsIt.replace("i was wondering if ", "");
                            whatIsIt = whatIsIt.replace("i was wondering about whether ", "");

                            var words = lowerCaseInput.split(" ");
                            var wordsInQuery = whatIsIt.split(" ");

                            //"Raining" Scenario
                            if (whatIsIt.indexOf("rain") != -1) {
                                var city = whatIsIt;
                                if (city.indexOf("computer") != -1) {
                                    alert("No, there definitely are not any showers inside the computer. It is actually really hot inside.");
                                    neutralAreYou = 1;
                                } else {
                                    alert("Okay, I'm on it. Let me see if there is " + city + ".");
                                    var googleSearch = "https://encrypted.google.com/search?q=" + city;
                                    window.open(googleSearch);
                                    neutralAreYou = 1;
                                }


                            }
                            //"Is there a problem?"
                            else if (whatIsIt == "problem") {
                                alert("No...not within me.");
                                neutralAreYou == 1;
                            } else if (neutralAreYou == 0) {
                                alert("Hmm. That is a question that even I cannot answer for you. But I'm sure the internet is wide and much more intelligent than me!");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput
                                window.open(googleSearch);
                                neutralAreYou = 1;

                            }
                        }
                        //"Is it" Scenario:
                        else if (lowerCaseInput.indexOf("is it") != -1 && lowerCaseInput.indexOf("why ") == -1 && lowerCaseInput.indexOf("what ") == -1) {
                            var words = lowerCaseInput.split(" ");
                            var firstWhatIsFilter = lowerCaseInput.replace(", ", "");
                            var secondWhatIsFilter = firstWhatIsFilter.replace("?", "");
                            var thirdWhatIsFilter = secondWhatIsFilter.replace("it ", "");
                            var fourthWhatIsFilter = thirdWhatIsFilter.replace("is ", "");
                            var fifthWhatIsFilter = fourthWhatIsFilter.replace("! ", "");
                            var sixthWhatIsFilter = fifthWhatIsFilter.replace("'", "");
                            var whatIsIt = sixthWhatIsFilter.replace("", "");
                            var wordsInQuery = whatIsIt.split(" ");

                            //"Raining" Scenario
                            if (whatIsIt.indexOf("raining") != -1) {
                                var city = whatIsIt;
                                if (city.indexOf("computer") != -1) {
                                    alert("No, there definitely are not any showers inside the computer. It is actually really hot inside.");
                                    neutralAreYou = 1;
                                } else {
                                    alert("Okay, I'm on it. Let me see if it is " + city + ".");
                                    var googleSearch = "https://encrypted.google.com/search?q=" + city;
                                    window.open(googleSearch);
                                    neutralAreYou = 1;
                                }


                            } else {

                                //"Normal" Scenario
                                i = 0;
                                while (i < words.length) {

                                    if (words[i] == "is" && words[i + 1] == "it" && words[i + 2] == "normal") {
                                        var whatIsIt = whatIsIt.replace("normal ", "");
                                        alert("i don't know if it's normal " + whatIsIt + ". Sorry. I guess it is?");
                                        neutralAreYou = 1;
                                    }
                                    i++;
                                }

                                //"Weather" Scenario
                                i = 0;
                                while (i < words.length) {
                                    if (words[i] == "is" && words[i + 1] == "it" && (words[i + 2] == "hot" || words[i + 2] == "cold" || words[i + 2] == "cool" || words[i + 2] == "warm" || words[i + 2] == "freezing" || words[i + 2] == "sweltering" || words[i + 2] == "sunny" || words[i + 2] == "cloudy" || words[i + 2] == "boiling")) {
                                        if (word[i + 3] == "inside" || word[i + 5] == "computer") {
                                            if (words[i + 2] == "hot" || words[i + 2] == "sunny" || words[i + 2] == "sweltering" || words[i + 2] == "boiling") {
                                                alert("Yes, I would say that it is " + words[i + 2] + " in here. It is 30 Celsius in here and I am sweating a LOT.");
                                                neutralAreYou = 1;
                                            } else {
                                                alert("No, I wouldn't say that it is " + words[i + 2] + " in here. It is 30 Celsius in here and I am sweating a LOT.");
                                                neutralAreYou = 1;
                                            }
                                        } else {
                                            if (word[i + 5] == undefined) {
                                                city = word[i + 4];
                                            } else {
                                                city = word[i + 4] + " " + word[i + 5];
                                            }

                                            if (city == undefined) {
                                                city = prompt("What city are you searching for?");
                                                alert("Okay, I'm on it. Let me see if it is " + words[i + 2] + " in " + city + ".");
                                                var googleSearch = "https://encrypted.google.com/search?q=" + "weather in " + city;
                                                window.open(googleSearch);
                                                neutralAreYou = 1;
                                            } else {
                                                alert("Okay, I'm on it. Let me see if it is " + words[i + 2] + " in " + city + ".");
                                                var googleSearch = "https://encrypted.google.com/search?q=" + "weather in " + city;
                                                window.open(googleSearch);
                                                neutralAreYou = 1;
                                            }
                                        }
                                    }
                                    i++;
                                }

                                //"Is it your..." Scenario
                                i = 0;
                                while (i < words.length) {
                                    if (words[i] == "is" && words[i + 1] == "it" && (words[i + 2] == "your" || words[i + 2] == "you")) {
                                        var whatIsIt = whatIsIt.replace("your ", "my ");
                                        var whatIsIt = whatIsIt.replace("you ", "me ");
                                        var whatIsIt = whatIsIt.replace("I am ", "you are ");
                                        alert("I'm not sure if it is" + whatIsIt + ". But I guess that you can try and deduce if I am just by looking at the screen.");
                                        neutralAreYou = 1;
                                    }
                                    i++;
                                }

                                //"Is it my..." Scenario
                                i = 0;
                                while (i < words.length) {

                                    if (words[i] == "is" && words[i + 1] == "it" && (words[i + 2] == "my" || words[i + 2] == "me")) {
                                        neutralAreYou = 1;
                                        var whatIsIt = whatIsIt.replace("my ", "your ");
                                        var whatIsIt = whatIsIt.replace("me", "you");
                                        var whatIsIt = whatIsIt.replace("you are ", "I am ");
                                        alert("i don't know if it's " + whatIsIt + ". In fact, why are you asking me about yourself?");
                                        neutralAreYou = 1;

                                    }
                                    i++;
                                }

                                if (neutralAreYou == 0) {
                                    var itValue = prompt("By 'it', what are you referring to? (as in, you asked me if 'it' is " + whatIsIt + ". What is the 'it'?)");
                                    alert("Alright, let me search if " + itValue + " is '" + whatIsIt + "'!");
                                    var googleSearch = "https://encrypted.google.com/search?q=is " + itValue + " " + whatIsIt;
                                    window.open(googleSearch);
                                    neutralAreYou = 1;
                                }
                            }
                        }

                        //"Is the" Scenario:
                        else if (lowerCaseInput.indexOf("is the ") != -1 && lowerCaseInput.indexOf("why ") == -1 && lowerCaseInput.indexOf("what ") == -1) {

                            neutralAreYou = 1;
                            var words = lowerCaseInput.split(" ");
                            var firstWhatIsFilter = lowerCaseInput.replace(", ", "");
                            var secondWhatIsFilter = firstWhatIsFilter.replace("?", "");
                            var thirdWhatIsFilter = secondWhatIsFilter.replace("the ", "");
                            var fourthWhatIsFilter = thirdWhatIsFilter.replace("is ", "");
                            var fifthWhatIsFilter = fourthWhatIsFilter.replace("! ", "");
                            var sixthWhatIsFilter = fifthWhatIsFilter.replace("'", "");
                            var whatIsIt = sixthWhatIsFilter.replace("", "");
                            var wordsInQuery = whatIsIt.split(" ");

                            alert("Interesting question. Let me search it up...");
                            var googleSearch = "https://encrypted.google.com/search?q=" + whatIsIt;
                            window.open(googleSearch);
                        } else {
                            j = 0;
                            while (j < countries.length) {
                                if (word[i] == countries[j]) {
                                    alert("I do not like to indulge in political affairs. All I know about " + displayCountries[j] + " are from the terrible photos that my coder took that are now put on his iPhoto. I can ask Google to answer them, though, it that pleases you.");
                                    var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput + "?";
                                    window.open(googleSearch);
                                    neutralAreYou = 1;
                                }
                                j++;
                            }

                            if (neutralAreYou == 0) {
                                alert("Interesting question. So interesting I am still scratching my head about it! Let me help search Google for you!");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput + "?";
                                window.open(googleSearch);
                                neutralAreYou = 1;
                            }
                        }


                    }
                    i++;
                }

                //"Can..." Scenario:[COMPLETE]
                i = 0;
                while (i < 2) {
                    if (word[i] == "can" && neutralAreYou == 0) {

                        can = lowerCaseInput.replace("can ", "");

                        if (word[i + 1] == "i") {
                            if (word[i + 2] == "ask") {
                                if (lowerCaseInput.indexOf("a question") != -1) {
                                    var wantsToAsk = 1;
                                } else if (lowerCaseInput.indexOf("tbh") != -1 && neutralAreYou != 1) {
                                    var chooseResponse = Math.random();
                                    if (chooseResponse < 0.17) {
                                        alert("Sure, " + name + ". To be honest, I am a code. I think very logically. It is really cool that you do, to some extent, think that way as well! Other than that, I have not heard much about you. But, it is nice that you want a to be honest from me. Um, we should talk more? There is a version of me on www.e1em.com/ai if you wanna do so!");
                                        neutralAreYou = 1;
                                    }
                                    if (0.17 < chooseResponse < 0.34 && neutralAreYou == 0) {
                                        alert("Sure, " + name + ". To be honest, your choice in music is quite unique 0_o (or should I say fascinating) but other than that you have such a welcoming personality and I wish we have more chances to talk in the future! (Since we have not talked that much in the past, I cannot make any more judgments.");
                                        neutralAreYou = 1;
                                    }
                                    if (0.34 < chooseResponse < 0.51 && neutralAreYou == 0) {
                                        alert("Sure, " + name + ". To be honest, you are probably a hundred times smarter than me and also a hundred times more human than I am. But hey, I still think you are cool! Maybe you will think about teaching me about how you talk, " + name + "? As a code with limited understanding, I would very much like to gain some knowledge! Talk to me more, okay?");
                                        neutralAreYou = 1;
                                    }
                                    if (0.51 < chooseResponse < 0.67 && neutralAreYou == 0) {
                                        alert("Sure, " + name + ". To be honest, your friends are just as cool as you! Haha and you are also really skilled with that...I think it's called a pencil? Anyway, good luck in your future, " + name + "! I hope you can talk to me one day. I am cool! (even without sunglasses)");
                                        neutralAreYou = 1;
                                    }
                                    if (0.67 < chooseResponse < 0.84 && neutralAreYou == 0) {
                                        alert("Sure, " + name + ". To be honest, I think you have lots of potential and you are a nice friend my coder Gordon (at least, I think so, right?) But yeah, you seem to be quite skilled at using Facebook and clicking a like button. Oh well, if you talk more to me, I will hopefully know you better! You can do so if you check out www.e1em.com/ai for that!!");
                                        neutralAreYou = 1;
                                    } else {
                                        alert("Okay. " + name + ". To be honest, I have heard that you really enjoy food, which is awesome! What is your favourite food, " + name + "? But yeah, you do have a great personality and quite unique. You are also a hundred times smarter than me, which is a compliment (I am not the smartest thing out there, but please bear with me). Anyway, we need to talk more! ");
                                        neutralAreYou = 1;
                                    }

                                } else {
                                    alert("Hmm. Are you sure you are asking the right person this question here?");
                                }
                            } else if (word[i + 2] == "have") {

                                //TBH
                                if (lowerCaseInput.indexOf("tbh") != -1 && neutralAreYou != 1) {
                                    var chooseResponse = Math.random();
                                    if (chooseResponse < 0.17) {
                                        alert("Sure, " + name + ". To be honest, I am a code. I think very logically. It is really cool that you do, to some extent, think that way as well! Other than that, I have not heard much about you. But, it is nice that you want a to be honest from me. Um, we should talk more? There is a version of me on www.e1em.com/ai if you wanna do so!");
                                        neutralAreYou = 1;
                                    }
                                    if (0.17 < chooseResponse < 0.34 && neutralAreYou == 0) {
                                        alert("Sure, " + name + ". To be honest, your choice in music is quite unique 0_o (or should I say fascinating) but other than that you have such a welcoming personality and I wish we have more chances to talk in the future! (Since we have not talked that much in the past, I cannot make any more judgments.");
                                        neutralAreYou = 1;
                                    }
                                    if (0.34 < chooseResponse < 0.51 && neutralAreYou == 0) {
                                        alert("Sure, " + name + ". To be honest, you are probably a hundred times smarter than me and also a hundred times more human than I am. But hey, I still think you are cool! Maybe you will think about teaching me about how you talk, " + name + "? As a code with limited understanding, I would very much like to gain some knowledge! Talk to me more, okay?");
                                        neutralAreYou = 1;
                                    }
                                    if (0.51 < chooseResponse < 0.67 && neutralAreYou == 0) {
                                        alert("Sure, " + name + ". To be honest, your friends are just as cool as you! Haha and you are also really skilled with that...I think it's called a pencil? Anyway, good luck in your future, " + name + "! I hope you can talk to me one day. I am cool! (even without sunglasses)");
                                        neutralAreYou = 1;
                                    }
                                    if (0.67 < chooseResponse < 0.84 && neutralAreYou == 0) {
                                        alert("Sure, " + name + ". To be honest, I think you have lots of potential and you are a nice friend my coder Gordon (at least, I think so, right?) But yeah, you seem to be quite skilled at using Facebook and clicking a like button. Oh well, if you talk more to me, I will hopefully know you better! You can do so if you check out www.e1em.com/ai for that!!");
                                        neutralAreYou = 1;
                                    } else {
                                        alert("Okay. " + name + ". To be honest, I have heard that you really enjoy food, which is awesome! What is your favourite food, " + name + "? But yeah, you do have a great personality and quite unique. You are also a hundred times smarter than me, which is a compliment (I am not the smartest thing out there, but please bear with me). Anyway, we need to talk more! ");
                                        neutralAreYou = 1;
                                    }

                                } else {
                                    alert("Um...what?");
                                }
                            } else {
                                if (lowerCaseInput.indexOf("be friends") != -1 && lowerCaseInput.indexOf("you ") != -1) {
                                    alert("Well, I’d definitely say we are on good terms now! Don't you think?");
                                    neutralAreYou = 1;
                                } else {
                                    canI = can.replace("i ", "");
                                    alert("If you are asking me about whether you can literally '" + canI + "', then I assume that you are capable of doing so.");
                                    neutralAreYou = 1;
                                }

                            }
                        } else if (word[i + 1] == "you") {
                            if (word[i + 2] == "not") {
                                if (word[i + 3] == undefined) {
                                    alert("Sorry, but I cannot. If you ask a stupid question, you get a stupid answer. Quoted from David Cameron :)");
                                    neutralAreYou = 1;
                                } else {
                                    canYou = can.replace("you ", "");
                                    alert("I am not very skilled, so I cannot " + canYou + ". :(");
                                    neutralAreYou = 1;
                                }


                            } else {
                                canYou = can.replace("you ", "");
                                alert("I am not very skilled, so I cannot " + canYou + ". :(");
                                neutralAreYou = 1;
                            }
                        } else if (word[i + 1] == "we") {
                            if (word[i + 2] == "be") {
                                if (word[i + 3] == "friends") {
                                    alert("I say we are on quite good terms with each other right now!");
                                    neutralAreYou = 1;
                                } else {
                                    canWe = can.replace("we ", "");
                                    prompt("Tell me! Can we " + canWe + "?");
                                    neutralAreYou = 1;
                                }


                            } else {
                                canWe = can.replace("we ", "");
                                alert("Well, do you think that we can? (" + canWe + ", that is.)");
                                neutralAreYou = 1;
                            }
                        } else {
                            alert("I have not thought of an answer to that question before. But I can do a search! Bless the web.");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }

                    }
                    i++;
                }

                //"Could..." Scenario: [COMPLETE]
                i = 0;
                while (i < 2) {
                    if (word[i] == "could" && neutralAreYou == 0) {

                        could = lowerCaseInput.replace("could ", "");

                        if (word[i + 1] == "i") {
                            if (word[i + 2] == "ask") {
                                if (lowerCaseInput.indexOf("a question") != -1) {
                                    var wantsToAsk = 1;
                                } else {
                                    alert("Hmm. Are you sure you are asking the right person this question here?");
                                }
                            } else {
                                if (lowerCaseInput.indexOf("be friends") != -1 && lowerCaseInput.indexOf("you ") != -1) {
                                    alert("Well, I’d definitely say we are on good terms now! Don't you think?");
                                    neutralAreYou = 1;
                                } else {
                                    couldI = could.replace("i ", "");
                                    alert("Perhaps you could! Maybe you should try answering your own questions in the future haha :) My opinions are quite useless in this scenario honestly.");
                                    neutralAreYou = 1;
                                }

                            }
                        } else if (word[i + 1] == "you") {
                            if (word[i + 2] == "not") {
                                couldYou = can.replace("you ", "");
                                alert("I am not very skilled, so I cannot " + couldYou + ". :(");
                                neutralAreYou = 1;
                            } else {
                                couldYou = can.replace("you ", "");
                                alert("I am not very skilled, so I cannot " + couldYou + ". :(");
                                neutralAreYou = 1;
                            }
                        } else if (word[i + 1] == "we") {
                            if (word[i + 2] == "be") {
                                if (word[i + 3] == "friends") {
                                    alert("I say we are on quite good terms with each other right now!");
                                    neutralAreYou = 1;
                                } else {
                                    couldWe = can.replace("we ", "");
                                    prompt("Tell me! Could we " + couldWe + "?");
                                    neutralAreYou = 1;
                                }
                            } else {
                                couldWe = could.replace("we ", "");
                                alert("Well, do you think that we could? (" + couldWe + ", that is.)");
                                neutralAreYou = 1;
                            }
                        } else {
                            alert("I have not thought of an answer to that question before. But I can do a search! Bless the web.");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }

                    }
                    i++;
                }

                //"Have..." Scenario: [COMPLETE]
                i = 0;
                while (i < 2) {
                    if (word[i] == "have" && neutralAreYou == 0) {
                        if (word[i + 1] == "you") {
                            //Checking what he likes
                            if (word[i + 2] == "eaten") {
                                alert("I do not eat food! I am an AI, after all.");
                            } else {
                                alert("Have I? I don't think I have.");
                                neutralAreYou = 1;
                            }
                        } else if (word[i + 1] == "i") {
                            alert("This is not a quiz show about yourself, so refrain from quizzing me about yourself.");
                            neutralAreYou = 1;
                        } else {
                            alert("Ooh, nice question there. Let me see what I can do for you.");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }
                    }
                    i++;
                }

                //"Will..." Scenario: 
				i = 0;
				while (i < 2) {
                    if (word[i] == "will" && neutralAreYou == 0) {
                        if (word[i+1] == "you") {
                            //Checking what he likes
                            if (word[i + 2] == "eat") {
                                alert("I don't think I ever will, since I'm an AI.");
                                neutralAreYou = 1;
                            } else {
                                alert("I guess we'll just have to wait and see what the future holds.");
                                neutralAreYou = 1;
                            }
                        } 
                        else if (word[i+1] == "i") {
                      	neutralAreYou = 1;
                            if (word[i+2] == "be" || word[i+2] == "become") {
                            	if (word[i+3] == "successful") {
                            		alert("Well, from the looks of it, you will " + word[i+2] + " successful! Just keep working hard on what you do right now :)");
                            		neutralAreYou = 1;
                            	}
                            	if (word[i+3] == "good") {
                            		if (word[i+4] == "at") {
                            			var goodAt = lowerCaseInput.replace("will i be good at ", "");
                            			goodAt = goodAt.replace("will i become good at ", "");
                            		}
                            		else {
                            			goodAt = prompt("At...?");
                            		}
                            		alert("Well, from the looks of it, you will be good at " + goodAt + "! Just keep working hard on what you do right now :) and one day you will be good at " + goodAt + "!");
                            		neutralAreYou = 1;
                            	}
                            	if (word[i+3] == "tall" || word[i+3] == "taller") {
                            		var gender = prompt("Depends! If you are under the age of 18, you would still be growing. But now, I'd like to use my awesome calculation skills to see how tall you can grow up to. What is your gender?");
                            		var heightOfMum = prompt("How tall is your mum? (Metric please)");
                            		var mumH = parseInt(heightOfMum);
                            		var heightOfDad = prompt("How tall is your dad? (Metric please)");
                            		var dadH = parseInt(heightOfDad);
                            		if (gender == "male" || gender == "b" || gender == "boy" || gender == "m" || gender == "guy") {
                            			var finalHeight=(dadH+(mumH*13/12))/2;
                            			
                            		}
                            		else {
                            			finalHeight=((dadH*12/13)+mumH)/2;	
                            		}
                            		alert("Your height at the age of 18 should genetically be around " + finalHeight + " cm. But if you are not satisfied with that result, please note that doing exercise, sleeping early and eating healthy can help change that!");
                            		neutralAreYou = 1;
                            	}
                            	else {
                            		j = 0;
                            	while (j < rudeThings.length) {
                            		if (word[i+3] == niceThings[j]) {
                            			var niceDetect = 1;
                            			var phrNiceUsed = niceThings[j]
                            		}
                            		else if (word[i+3] == rudeThings[j]) {
                            			var rudeDetect = 1;
                            			var phrRudeUsed = rudeThings[j]
                            		}
                            		if (niceDetect == 1 && neutralAreYou != 1) {
                            			alert("You already are " + phrNiceUsed + "! :)");
                            			neutralAreYou = 1;
                            		}
                            		else if (rudeDetect == 1 && neutralAreYou != 1) {
                            			alert("You shouldn't worry about being " + phrRudeUsed + ". You will not be " + phrRudeUsed + ".");
                            			neutralAreYou = 1;
                            		}
                            	j++;
                            	}
                            		if (neutralAreYou != -1) {
                            		alert("As much as I wish I am, I am NOT a fortune teller. But it is all about effort.");
                            		neutralAreYou = 1; 
                            		}
                           		}
                            }
                            else if (neutralAreYou != 1) {
                            	alert("As much as I wish I am, I am NOT a fortune teller. But maybe you will in the future!");
                            	neutralAreYou = 1; 
                            }

                        } 
                        else {
                            	alert("Maybe...I don't know what the future holds.");
                            	neutralAreYou = 1; 
                        }
                    }
                    i++;
                }
				
                //"If..." Scenario: 
                i = 0;
				while (i < 2) {
                    if (word[i] == "if" && neutralAreYou == 0) {
                        if (word[i+1] == "you") {
                            //Checking what he likes
                            if (word[i + 2] == "eat") {
                                alert("I will never eat.");
                                neutralAreYou = 1;
                            } else {
                                alert("If, if, if. So many questions. Hmm.");
                                neutralAreYou = 1;
                            }
                        } 
                        else if (word[i+1] == "i") {
                      	neutralAreYou = 1;
                            if (word[i+2] == "am") {
                            	j = 0;
                            	while (j < rudeThings.length) {
                            		if (word[i+3] == niceThings[j]) {
                            			var niceDetect = 1;
                            			var phrNiceUsed = niceThings[j]
                            		}
                            		else if (word[i+3] == rudeThings[j]) {
                            			var rudeDetect = 1;
                            			var phrRudeUsed = rudeThings[j]
                            		}
                            		if (niceDetect == 1 && neutralAreYou != 1) {
                            			alert("You already are " + phrNiceUsed + "! :)");
                            			neutralAreYou = 1;
                            		}
                            		else if (rudeDetect == 1 && neutralAreYou != 1) {
                            			alert("You shouldn't be worried about becoming " + phrRudeUsed + ". There is no point thinking about what will happen, because you won't be " + phrRudeUsed + ".");
                            			neutralAreYou = 1;
                            		}
                            	j++;
                            	}
                            }
                            else if (neutralAreYou != 1) {
                            	alert("As much as I wish I am, I am NOT a fortune teller. But maybe you will in the future!");
                            	neutralAreYou = 1; 
                            }

                        } 
                        else {
                            	alert("Maybe...I don't know what the future holds.");
                            	neutralAreYou = 1; 
                        }
                    }
                    i++;
                }

                //"Would..." Scenario: 
				i = 0;
				while (i < 2) {
                    if (word[i] == "would" && neutralAreYou == 0) {
                        if (word[i+1] == "you") {
                            //Checking what he likes
                            if (word[i + 2] == "eat") {
                                alert("I will never eat.");
                                neutralAreYou = 1;
                            } 
                            else if (word[i+2] == "rather") {
                            	if (lowerCaseInput.indexOf("my ") != -1) {
                            		lowerCaseInput = lowerCaseInput.replace("my ", "your ");
                            	}
                            	else if (lowerCaseInput.indexOf("your ") != -1) {
                            		lowerCaseInput = lowerCaseInput.replace("your ", "my ");
                            	}
                            	else if (lowerCaseInput.indexOf("me ") != -1) {
                            		lowerCaseInput = lowerCaseInput.replace("me ", "you ");
                            	}
                            	else if (lowerCaseInput.indexOf("you ") != -1) {
                            		lowerCaseInput = lowerCaseInput.replace("you ", "I ");
                            	}
                            	if (word[i+4] == "or") {
                            	var ratherFirst = word[i+3];
                            	var TEMP_STOR = lowerCaseInput.replace(ratherFirst, "");
                            	var ratherSecond = TEMP_STOR.replace("would I rather  or ", "")
                            	ratherSecond = ratherSecond.replace("would I rather ", "")
                            	ratherSecond = ratherSecond.replace(" or ", "")
                            	}
                            	else if (word[i+5] == "or") {
                            	var ratherFirst = word[i+3] + " " + word[i+4];
                            	var TEMP_STOR = lowerCaseInput.replace(ratherFirst, "");
                            	var ratherSecond = TEMP_STOR.replace("would I rather  or ", "")
                            	ratherSecond = ratherSecond.replace("would I rather ", "")
                            	ratherSecond = ratherSecond.replace(" or ", "")
                            	}
                            	else if (word[i+6] == "or") {
                            	var ratherFirst = word[i+3] + " " + word[i+4] + " " + word[i+5];
                            	var TEMP_STOR = lowerCaseInput.replace(ratherFirst, "");
                            	var ratherSecond = TEMP_STOR.replace("would I rather  or ", "");
                            	ratherSecond = ratherSecond.replace("would I rather ", "")
                            	ratherSecond = ratherSecond.replace(" or ", "")
                            	}
                            	else if (word[i+7] == "or") {
                            	var ratherFirst = word[i+3] + " " + word[i+4] + " " + word[i+5] + " " + word[i+6];
                            	var TEMP_STOR = lowerCaseInput.replace(ratherFirst, "");
                            	var ratherSecond = TEMP_STOR.replace("would I rather  or ", "");
                            	ratherSecond = ratherSecond.replace("would I rather ", "")
                            	ratherSecond = ratherSecond.replace(" or ", "")
                            	}
                            	else if (word[i+8] == "or") {
                            	var ratherFirst = word[i+3] + " " + word[i+4] + " " + word[i+5] + " " + word[i+6] + " " + word[i+7];
                            	var TEMP_STOR = lowerCaseInput.replace(ratherFirst, "");
                            	var ratherSecond = TEMP_STOR.replace("would I rather  or ", "");
                            	ratherSecond = ratherSecond.replace("would I rather ", "")
                            	ratherSecond = ratherSecond.replace(" or ", "")
                            	}
                            	else if (word[i+9] == "or") {
                            	var ratherFirst = word[i+3] + " " + word[i+4] + " " + word[i+5] + " " + word[i+6] + " " + word[i+7] + " " + word[i+8];
                            	var TEMP_STOR = lowerCaseInput.replace(ratherFirst, "");
                            	var ratherSecond = TEMP_STOR.replace("would I rather  or ", "");
                            	ratherSecond = ratherSecond.replace("would I rather ", "")
                            	ratherSecond = ratherSecond.replace(" or ", "")
                            	}
                            	var chosenRather = Math.random();
                            	j = 0;
                            	while (j < rudeThings.length) {
                            	var n = ratherFirst.indexOf(niceThings[j]);
                            	if (ratherFirst.indexOf(niceThings[j]) != -1 || ratherSecond.indexOf(rudeThings[j]) != -1) {
									chosenRather = chosenRather - 1;
                            	}
                            	else if (ratherSecond.indexOf(niceThings[j]) != -1 || ratherFirst.indexOf(rudeThings[j]) != -1) {
									chosenRather = chosenRather + 1;
                            	}
                            		j++;
                            	}
                            	if (chosenRather < 0.5) {
                            	alert("You are asking me if I would rather " + ratherFirst + " or " + ratherSecond + "? Hmmm...I rather " + ratherFirst + "!");
								neutralAreYou = 1;
								}
								else {
                            	alert("You are asking me if I would rather " + ratherFirst + " or " + ratherSecond + "? Hmmm...I rather " + ratherFirst + "!");
								neutralAreYou = 1;
								}
                            }
                            else {
                                alert("If, if, if. So many questions. Hmm.");
                                neutralAreYou = 1;
                            }
                        } 
                        else if (word[i+1] == "i") {
                      	neutralAreYou = 1;
                            if (word[i+2] == "am") {
                            	j = 0;
                            	while (j < rudeThings.length) {
                            		if (word[i+3] == niceThings[j]) {
                            			var niceDetect = 1;
                            			var phrNiceUsed = niceThings[j]
                            		}
                            		else if (word[i+3] == rudeThings[j]) {
                            			var rudeDetect = 1;
                            			var phrRudeUsed = rudeThings[j]
                            		}
                            		if (niceDetect == 1 && neutralAreYou != 1) {
                            			alert("You already are " + phrNiceUsed + "! :)");
                            			neutralAreYou = 1;
                            		}
                            		else if (rudeDetect == 1 && neutralAreYou != 1) {
                            			alert("You shouldn't be worried about becoming " + phrRudeUsed + ". There is no point thinking about what will happen, because you won't be " + phrRudeUsed + ".");
                            			neutralAreYou = 1;
                            		}
                            	j++;
                            	}
                            }
                            else if (neutralAreYou != 1) {
                            	alert("As much as I wish I am, I am NOT a fortune teller. But maybe you will in the future!");
                            	neutralAreYou = 1; 
                            }

                        } 
                        else {
                            	alert("Maybe...I don't know what the future holds.");
                            	neutralAreYou = 1; 
                        }
                    }
                    i++;
                }
                //Tell... Scenario
                i = 0;
		while (i < 2) {
                    if (word[i] == "tell" && neutralAreYou == 0) {
                        if (word[i+1] == "you") {
                            if (word[i+2] == "a") {
                            	if (word[i+3] == "story") {
                            		prompt("Go ahead! Tell me all about it!");
										alert("Cool story! I also have a story! It is about Bob...or was it Bobletta? I shall get back to you once I know about it.");
										neutralAreYou = 1;
									
                            	}
                            	else {
                            		prompt("Go ahead. Tell me!");
                            	}
                            }
                            else {
                                alert("Sure, tell me.");
                                neutralAreYou = 1;
                            }
                        } 
                        else {
                            	alert("Maybe...");
                            	neutralAreYou = 1; 
                        }
                    }
                    i++;
                }
                //Find... Scenario

                //Search... Scenario

                //Calculate... Scenario

            }

            //Miscellaneous Answers
            if (neutralAreYou == 0 && askedAi == 0) {

                //"I am" Scenario
                if (lowerCaseInput.indexOf("i am") != -1 || lowerCaseInput.indexOf("i'm") != -1 && neutralAreYou == 0) {

                    k = 0;
                    while (k < rudeThings.length) {

                        j = 0;
                        while (j < word.length) {
                            if (word[j].indexOf(rudeThings[k]) != -1 && neutralAreYou == 0) {
                                rudeWordDetected = 1;
                                alert("Woah, don't be too harsh on yourself! Everyone is unique and awesome in their own way :)");
                                neutralAreYou = 1;
                            } else if (word[j].indexOf(niceThings[k]) != -1 && neutralAreYou == 0) {
                                alert("Well, that's awesome if you think that you are " + niceThings[k] + "!");
                                neutralAreYou = 1;
                            } else if (word[j].indexOf(badFeels[k]) != -1 && neutralAreYou == 0) {
                                var isSchoolStress = prompt("Let me guess: is this because of school?");
                                neutralAreYou = 1;
                                if (isSchoolStress.indexOf("ye") != -1) {
                                    var date = new Date();
                                    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                                    var month = months[date.getMonth()];
                                    alert("Hey! It's " + month + "! Just work hard, and school will end before you know it! If you ever feel really " + badFeels[k] + " during the school year, why don't you take a rest from whatever you're doing and eat a biscuit or do a hobby? I know that many people do that!");
                                } else {
                                    alert("Hey, I totally feel you. I have a tip for you: why don't you take a rest from whatever you're doing and eat a biscuit or do a hobby? I know that many people do that when they're feeling " + badFeels[k] + ", and I have heard that it helps out a lot! :) Good luck going through this phase of " + badFeels[k] + "-ness.");
                                }
                            }
                            j++;
                        }

                        k++;
                    }


                }

                //"It is" scenario:
                if (lowerCaseInput.indexOf("it is") != -1) {
                    if (lowerCaseInput.indexOf("i was wondering if") != -1 || lowerCaseInput.indexOf("i was wondering about whether ") != -1) {
                        var firstWhatIsFilter = lowerCaseInput.replace(", ", "");
                        var secondWhatIsFilter = firstWhatIsFilter.replace("?", "");
                        var thirdWhatIsFilter = secondWhatIsFilter.replace("it ", "");
                        var fourthWhatIsFilter = thirdWhatIsFilter.replace("is ", "");
                        var fifthWhatIsFilter = fourthWhatIsFilter.replace("! ", "");
                        var sixthWhatIsFilter = fifthWhatIsFilter.replace("'", "");
                        var whatIsIt = sixthWhatIsFilter.replace("a ", "");
                        whatIsIt = whatIsIt.replace("i was wondering if ", "");
                        whatIsIt = whatIsIt.replace("i was wondering about whether ", "");
                        whatIsIt = whatIsIt.replace("i was wondering ", "");

                        var words = lowerCaseInput.split(" ");
                        var wordsInQuery = whatIsIt.split(" ");
                        answeredWonder = 0;


                        //"Raining" Scenario
                        if (whatIsIt.indexOf("raining") != -1) {
                            if (whatIsIt == "raining") {
                                var city = prompt("What city do you live in?");
                                alert("Okay, I'm on it. Let me see if it is raining in " + city + ".");
                                var googleSearch = "https://encrypted.google.com/search?q=" + whatIsIt + " in " + city + "?";
                                window.open(googleSearch);
                                neutralAreYou = 1;
                            } else if (whatIsIt == "raining cats and dogs") {
                                alert("Is that a figure of speech? Because I don't think it ever rained cats and dogs before. I think there was one time where frogs rained from the sky though.");
                                neutralAreYou = 1;
                            } else if (whatIsIt.indexOf("computer") != -1) {
                                alert("No, but it definitely is really hot inside.");
                                neutralAreYou = 1;
                            } else {
                                i = 0;
                                while (i < wordsInQuery.length) {
                                    if (wordsInQuery[i] == "raining" && wordsInQuery[i + 1] == "in") {
                                        var city = wordsInQuery[i + 2];
                                        alert("I'm not sure! But I'll check if it is raining in " + city + "!");
                                        var googleSearch = "<https://encrypted.google.com/search?q=raining in >" + city + "?";
                                        window.open(googleSearch);
                                        neutralAreYou = 1;
                                    }
                                    i++;

                                }
                            }

                        }

                        //"Normal" Scenario
                        i = 0;
                        while (i < words.length) {

                            if (words[i] == "is" && words[i + 1] == "it" && words[i + 2] == "normal") {
                                var whatIsIt = whatIsIt.replace("normal", "");
                                alert("i don't know if it's normal " + whatIsIt + ". Sorry. I guess it is?");
                                neutralAreYou = 1;
                            }
                            i++;
                        }

                        //"Weather" Scenario
                        i = 0;
                        while (i < words.length) {

                            if (words[i] == "is" && words[i + 1] == "it" && (words[i + 2] == "hot" || words[i + 2] == "cold" || words[i + 2] == "cool" || words[i + 2] == "warm" || words[i + 2] == "freezing" || words[i + 2] == "sweltering" || words[i + 2] == "sunny" || words[i + 2] == "cloudy" || words[i + 2] == "boiling")) {
                                neutralAreYou = 1;
                                if (word[i + 3] == "inside" || word[i + 5] == "computer") {
                                    if (words[i + 2] == "hot" || words[i + 2] == "sunny" || words[i + 2] == "sweltering" || words[i + 2] == "boiling") {
                                        alert("Yes, I would say that it is " + words[i + 2] + " in here. It is 30 Celsius in here and I am sweating a LOT.");
                                    } else {
                                        alert("No, I wouldn't say that it is " + words[i + 2] + " in here. It is 30 Celsius in here and I am sweating a LOT.");
                                    }
                                } else {
                                    city = word[i + 4]
                                    alert("Okay, I'm on it. Let me see if it is " + words[i + 2] + " in " + city + ".");
                                    var googleSearch = "https://encrypted.google.com/search?q=" + "weather in " + city;
                                    window.open(googleSearch);
                                    neutralAreYou = 1;
                                }
                            }
                            i++;
                        }

                        if (neutralAreYou == 0) {
                            alert("Your wondering shall cease. I shall summon Google. (You're welcome!)");
                            var googleSearch = "<https://encrypted.google.com/search?q=is it >" + whatIsIt + "?";
                            window.open(googleSearch);
                        }
                    } else {
                        alert("It is? Okay then.");
                    }

                    neutralAreYou = 1;
                }

                //"I was wondering if" scenario:	
                if (lowerCaseInput.indexOf("i was wondering if") != -1 || lowerCaseInput.indexOf("i was wondering about whether ") != -1) {
                    var firstWhatIsFilter = lowerCaseInput.replace(", ", "");
                    var secondWhatIsFilter = firstWhatIsFilter.replace("?", "");
                    var thirdWhatIsFilter = secondWhatIsFilter.replace("it ", "");
                    var fourthWhatIsFilter = thirdWhatIsFilter.replace("is ", "");
                    var fifthWhatIsFilter = fourthWhatIsFilter.replace("! ", "");
                    var sixthWhatIsFilter = fifthWhatIsFilter.replace("'", "");
                    var whatIsIt = sixthWhatIsFilter.replace("a ", "");
                    whatIsIt = whatIsIt.replace("i was wondering if ", "");
                    whatIsIt = whatIsIt.replace("i was wondering about whether ", "");
                    whatIsIt = whatIsIt.replace("i was wondering ", "");

                    var words = lowerCaseInput.split(" ");
                    var wordsInQuery = whatIsIt.split(" ");

                    if (wordsInQuery[0] == "you") {
                        if (wordsInQuery[1] == "like" && wordsInQuery[2] == "me") {
                            alert("Well, up to now, I do! I think you're cool!");
                        } else {
                            alert("Some things are best kept a secret.");
                        }
                    } else {
                        alert("Your wondering shall cease. I shall summon Google. (You're welcome!)");
                        var googleSearch = "https://encrypted.google.com/search?q=" + whatIsIt + "?";
                        window.open(googleSearch);
                        neutralAreYou = 1;
                    }
                }

                //"Am I..." Scenario
                if (lowerCaseInput.indexOf("am i") != -1 && neutralAreYou == 0) {

                    var isRobot = lowerCaseInput.replace("am i ", "");
                    isRobot = isRobot.replace("?", "");
                    isRobot = isRobot.replace("!", "");

                    while (k < rudePhrase.length) {
                        if (isRobot.indexOf(rudePhrase[k]) != -1 && neutralAreYou == 0) {
                            neutralAreYou = 1;
                            rudeWordDetected = 1;
                            alert("I dislike the word choice. But no, I do not think you are a '" + isRobot + "'. And please don't use that word again. You are awesome in your own way :)");
                        }
                        k++;
                    }

                    k = 0;
                    while (k < nicePhrase.length) {
                        if (isRobot.indexOf(nicePhrase[k]) != -1) {
                            neutralAreYou = 1;
                            alert("I think you are quite " + nicePhrase[k] + "! I mean it.");
                        }
                        k++;
                    }

                    if (isRobot.indexOf("doing something") != -1) {
                        alert("Yes, you are. You are talking to me.");
                        neutralAreYou = 1;
                    }

                    if (isRobot == "doing") {
                        alert("Are you speaking english? Because that makes no grammatical sense.");
                        neutralAreYou = 1;
                    }

                    if (isRobot == "trying") {
                        prompt("Trying to what?");
                        alert("Well, you would know better yourself. Ask yourself the same question!");
                        neutralAreYou = 1;
                    }

                    if (isRobot == "working") {
                        alert("Well, what does 'working' mean? You are functioning as a living system. (I hope, at least)");
                        neutralAreYou = 1;
                    }


                    if (isRobot.indexOf("boy") != -1 || isRobot.indexOf("girl") != -1) {
                        var boyOrGirl = prompt("I don't know, but you can tell me! Are you a boy or are you a girl?");
                        if (boyOrGirl.indexOf("boy") != -1 && boyOrGirl.indexOf("not") == -1) {
                            alert("Ah, so you are a boy! Gotcha.");
                        } else {
                            alert("Ah, so you are a girl!");
                        }
                        neutralAreYou = 1;
                    }

                    //Outlier [WHAT GENDER ARE YOU?]
                    if (isRobot.indexOf("what gender") != -1) {
                        alert("I am neutral. I am neither a girl nor a boy.");
                        neutralAreYou = 1;
                    }

                    if (isRobot.indexOf("ready") != -1) {
                        var readyFor = prompt("Ready for what?");
                        alert("Well, you would be a better judge for that. Maybe you should judge whether you're ready for " + readyFor + ".");
                        neutralAreYou = 1;
                    }

                }

                //"I'm feeling"/"I feel"/"I am feeling" Scenario: [COMPLETE please do not touch]
                {
                    //"I am feeling" scenario
                    var j = 0;
                    while (j < word.length) {

                        if (word[j] == "i") {
                            if (word[j + 1] == "am") {
                                if (word[j + 2] == "feeling") {
                                	neutralAreYou = 1;
                                    var rawMood = word[j + 3];
                                    aMood = rawMood.toLowerCase();
                                    mood = aMood.replace("!", "");

                                    if (mood == "happy" || mood == "enthusiastic" || mood == "excited" || mood == "interested" || mood == "cool" || mood == "calm" || mood == "relaxed" || mood == "awesome" || mood == "great") {
                                        isPosMood = 1;
                                        neutralAreYou = 1;
                                    } else {
                                        isNegMood = 1;
                                    }

                                    if (isNegMood == 1) {
                                        var response = prompt("Why are you feeling " + mood + "?");
                                        var lengthOfResponse = response.split(" ");

                                        if (lengthOfResponse.length < 20) {
                                            var answer = prompt("Can you be a bit more elaborate?");
                                            if (answer.toLowerCase() == "no" || answer.toLowerCase() == "nope" || answer.toLowerCase() == "i don't think so") {
                                                alert("Well, in that case, I can't give any advice or insight. Hope you feel better soon!");
                                            } else if (answer == "") {
                                                alert("Look: I can't give any feedback if you don't say anything to me.");
                                            } else {
                                                alert("Okay. I don't really get what this means: '" + answer + "'. Regardless, I wish you the best and hope you will have better thoughts!");
                                            }
                                        } else {
                                            alert("Oh, wow. I see. :( Well, in that case, I hope you feel better! Hope talking about it helped you out.");
                                        }
                                    } else {
                                        alert("Really? That's great! I'm glad you're feeling this way! Even codes have feelings too, and even I wish I feel " + mood + " all the time!");
                                    }
                                }

                            }
                        }


                        j++
                    }

                    //"I'm feeling" scenario
                    j = 0;
                    while (j < word.length) {
                        if (word[j] == "im") {
                            if (word[j + 1] == "feeling") {
                                var rawMood = word[j + 2];
                                aMood = rawMood.toLowerCase();
                                mood = aMood.replace("!", "");
                                neutralAreYou = 1;

                                if (mood == "happy" || mood == "enthusiastic" || mood == "excited" || mood == "interested" || mood == "cool" || mood == "calm" || mood == "relaxed") {
                                    isPosMood = 1;
                                } else {
                                    isNegMood = 1;
                                }

                                if (isNegMood == 1) {
                                    var response = prompt("Why are you feeling " + mood + "?");
                                    var lengthOfResponse = response.split(" ");

                                    if (lengthOfResponse.length < 20) {
                                        var answer = prompt("Can you be a bit more elaborate?");
                                        if (answer.toLowerCase() == "no" || answer.toLowerCase() == "nope" || answer.toLowerCase() == "i don't think so") {
                                            alert("Well, in that case, I can't give any advice or insight. Hope you feel better soon!");
                                        } else if (answer == "") {
                                            alert("Look: I can't give any feedback if you don't say anything to me.");
                                        } else {
                                            alert("Okay. I don't really get what this means: '" + answer + "'. Regardless, I wish you the best and hope you will have better thoughts!");
                                        }
                                    } else {
                                        alert("Oh, wow. I see. :( Well, in that case, I hope you feel better! Hope talking about it helped you out.");
                                    }
                                } else {
                                    alert("Really? That's great! I'm glad you're feeling this way! Even codes have feelings too, and even I wish I feel " + mood + " all the time!");
                                }
                            }


                        }


                        j++
                    }

                    //"I feel" scenario
                    j = 0;
                    while (j < word.length) {
                        if (word[j] == "i") {
                            if (word[j + 1] == "feel") {
                                var rawMood = word[j + 2];
                                aMood = rawMood.toLowerCase();
                                mood = aMood.replace("!", "");
								neutralAreYou = 1;
                                if (mood == "happy" || mood == "enthusiastic" || mood == "excited" || mood == "interested" || mood == "cool" || mood == "calm" || mood == "relaxed") {
                                    isPosMood = 1;
                                } else {
                                    isNegMood = 1;
                                }

                                if (isNegMood == 1) {
                                    var response = prompt("Why are you feeling " + mood + "?");
                                    var lengthOfResponse = response.split(" ");

                                    if (lengthOfResponse.length < 20) {
                                        var answer = prompt("Can you be a bit more elaborate?");
                                        if (answer.toLowerCase() == "no" || answer.toLowerCase() == "nope" || answer.toLowerCase() == "i don't think so") {
                                            alert("Well, in that case, I can't give any advice or insight. Hope you feel better soon!");
                                        } else if (answer == "") {
                                            alert("Look: I can't give any feedback if you don't say anything to me.");
                                        } else {
                                            alert("Okay. I don't really get what this means: '" + answer + "'. Regardless, I wish you the best and hope you will have better thoughts!");
                                        }
                                    } else {
                                        alert("Oh, wow. I see. :( Well, in that case, I hope you feel better! Hope talking about it helped you out.");
                                    }
                                } else {
                                    alert("Really? That's great! I'm glad you're feeling this way! Even codes have feelings too, and even I wish I feel " + mood + " all the time!");
                                }
                            }


                        }


                        j++
                    }
                }

            }

            if (wantsToAsk == 1) {

                var input = prompt("Of course you can ask a question! What is your question?");
                lowerCaseInput = input.toLowerCase();
                lowerCaseInput = lowerCaseInput.replace("'", "");
                lowerCaseInput = lowerCaseInput.replace("?", "");
                var word = lowerCaseInput.split(" ");

                neutralAreYou = 0;

               

               

                //"Where..." Scenario: [COMPLETE]
                i = 0;
                while (i < 2) {
                    if (word[i] == "where") {
                        if (word[i + 1] == "is") {
                            if (word[i + 2] == "my") {
                                alert("Why would I know?");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "your") {
                                if (word[i + 3] == "mum" || word[i + 3] == "mother" || word[i + 3] == "dad" || word[i + 3] == "father" || word[i + 3] == "mom") {
                                    alert("Haven't you heard about the rule that you shouldn't talk to Artificial intelligences about their parents?");
                                    neutralAreYou = 1;
                                } else if (word[i + 3] == "life") {
                                    alert("It's in me, thank you very much. Please learn manners before asking another question.");
                                    neutralAreYou = 1;
                                } else {
                                    alert("That is a personal matter that I'd rather keep to myself.");
                                    neutralAreYou = 1;
                                }
                            } else {
                                alert("This is a very fascinating question, and it's a shame I do not know about it. I shall have to read Google. Maybe you can read along!");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                                window.open(googleSearch);
                                neutralAreYou = 1;
                            }
                        } else if (word[i + 1] == "am") {
                            window.open("http://ctrlq.org/maps/address/");
                            neutralAreYou = 1;
                        } else if (word[i + 1] == "are") {
                            if (word[i + 2] == "you") {
                                alert("I am inside the computer.");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "your") {
                                whereRobot = word[i + 3];
                                if (whereRobot == "parents" || whereRobot == "manners" || whereRobot == "people") {
                                    alert("Are you like this with your friends? Please don't ask so many questions about where my " + whereRobot + " are.");
                                    neutralAreYou = 1;
                                } else {
                                    alert("Private matter. That's not something I'm comfortable sharing with you.");
                                    neutralAreYou = 1;
                                }
                            } else if (word[i + 2] == "my") {
                                alert("Um...why are you asking me?");
                                neutralAreYou = 1;
                            } else {
                                alert("Hmmm...this is quite fascinating. I've not come across this question before. I know how important learning is! So let me search for you.");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                                window.open(googleSearch);
                                neutralAreYou = 1;
                            }
                        } else {
                            alert("Hmmm...this is quite fascinating. I've not come across this question before. I know how important learning is! So let me search for you.");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }
                    }
                    i++;
                }

                //"Who..." Scenario: [COMPLETE]
                i = 0;
                while (i < 2) {
                    if (word[i] == "who" && neutralAreYou == 0) {
                        if (word[i + 1] == "is") {
                            if (word[i + 2] == "my") {
                                alert("Why would I know?");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "your") {
                                if (word[i + 3] == "mum" || word[i + 3] == "mother" || word[i + 3] == "dad" || word[i + 3] == "father" || word[i + 3] == "mom") {
                                    alert("Um...next question please...");
                                    neutralAreYou = 1;
                                } else {
                                    alert("That is a personal matter that I'd rather keep to myself.");
                                    neutralAreYou = 1;
                                }
                            } else {
                                alert("This is a very fascinating question, and it's a shame I do not know about it. I shall have to read Google. Maybe you can read along!");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                                window.open(googleSearch);
                                neutralAreYou = 1;
                            }
                        } else if (word[i + 1] == "am") {
                            name = prompt("You tell me! Who are you?");
                            alert("So you call yourself " + name + "! Cool! Hi, " + name + ".");
                            neutralAreYou = 1;
                        } else if (word[i + 1] == "are") {
                            if (word[i + 2] == "you") {
                                alert("I am an AI. I like to chat to people like you!");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "your") {
                                alert("Private matter. That's not something I'm comfortable sharing with you.");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "my") {
                                alert("Um...why are you asking me?");
                                neutralAreYou = 1;
                            } else {
                                alert("Hmmm...let me see...");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                                window.open(googleSearch);
                                neutralAreYou = 1;
                            }
                        } else {
                            alert("Hmmm...this is quite fascinating. I've not come across this question before. I know how important learning is! So let me search for you.");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }
                    }
                    i++;
                }

                //"What..." Scenario: [COMPLETE]
                var k = 0
                while (k < 2) {
                    if (word[k] == "what" && neutralAreYou == 0) {
                        if (lowerCaseInput.indexOf("day") != -1 && lowerCaseInput.indexOf("week") != -1 && lowerCaseInput.indexOf("of") != -1) {
                            var date = new Date();
                            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                            var day = days[date.getDay()];
                            alert("Today is a " + day + "!");
                            neutralAreYou = 1;
                        } else if (lowerCaseInput.indexOf("date") != -1 || lowerCaseInput.indexOf("day") != -1) {
                            var date = new Date();
                            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                            var day = days[date.getDay()];
                            var month = months[date.getMonth()];
                            alert("Today is " + day + ", " + month + " " + date.getDate() + "!");
                            neutralAreYou = 1;
                            if (month == "August" && date.getDate() == "8") {
                                alert("This must mean that it's...Father's Day. Happy Father's Day!!");
                            } else if (month == "November" && date.getDate() == "10") {
                                alert("Today is Gordon Chi's (my coder's) birthday!! Wish him a happy birthday!");
                            } else if (month == "October" && date.getDate() == "10") {
                                alert("Today is Taiwan's National Day!");
                            } else if (month == "July" && date.getDate() == "4") {
                                alert("Today is Independence Day in the United States of America!");
                            }
                        } else if (lowerCaseInput.indexOf("time") != -1 && lowerCaseInput.indexOf("it") != -1) {
                            var time = new Date();
                            alert("The time is now: " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ".");
                        } 
                        else if (word[k + 1] == "is" || word[k + 1] == "are") {

                            //Find the queried input.
                            var firstWhatIsFilter = lowerCaseInput.replace("what ", "");
                            var secondWhatIsFilter = firstWhatIsFilter.replace("?", "");
                            var thirdWhatIsFilter = secondWhatIsFilter.replace("are ", "");
                            var fourthWhatIsFilter = thirdWhatIsFilter.replace("is ", "");
                            var fifthWhatIsFilter = fourthWhatIsFilter.replace("the ", "");
                            var sixthWhatIsFilter = fifthWhatIsFilter.replace("'", "");
                            whatIs = sixthWhatIsFilter.replace("a ", "");


                            //Questions towards AI
                            if (whatIs.indexOf("your") != -1 && whatIs.indexOf("name") != -1) {
                                alert("I am the AI.");
                                neutralAreYou = 1;
                            } else if (whatIs == "your favourite food" || whatIs == "your favorite food") {
                                alert("I am an AI. I don't eat food.");
                                neutralAreYou = 1;
                            } else if (whatIs == "your job") {
                                alert("My job involves living inside a computer answering your questions.");
                                neutralAreYou = 1;
                            } else if (whatIs == "your dream job" || whatIs == "your dream jobs") {
                                alert("My dream job is to become a billionaire and swim in a pool of $100 bills.");
                                neutralAreYou = 1;
                            } else if (whatIs == "your hobbies" || whatIs == "your hobby") {
                                alert("My hobbies include reading codes, and changing colours of pixels. Nifty stuff.");
                                neutralAreYou = 1;
                            } else if (whatIs == "your age") {
                                alert("I am currently one day old.");
                                neutralAreYou = 1;
                            } else if (whatIs == "your favourite song" || whatIs == "your favorite song") {
                                alert("I have to say that my favorite song is...hmm...I guess Classic by MKTO?");
                                neutralAreYou = 1;
                            } else if (whatIs == "your favourite piece" || whatIs == "your favorite piece") {
                                alert("The New World Symphony. Best orchestral piece EVER.");
                                neutralAreYou = 1;
                            } else if (whatIs == "your mothers name" || whatIs == "your fathers name" || whatIs == "your parents name") {
                                alert("I don't remember. I guess I was separated at birth?");
                                neutralAreYou = 1;
                            } else if (word[k + 2] == "my") {
                            	if (word[k + 3] == "name") {
                            		alert("Your name is " + name + "!");
                            		neutralAreYou = 1;
                            	}
                            	else {
                            		alert("That is about you, not me. I wouldn't know anything about you.");
                            		neutralAreYou = 1;
                            	}
                                neutralAreYou = 1;
                            } else if (whatIs == "you doing") {
                                alert("Talking to you.");
                                neutralAreYou = 1;
                            } else if (whatIs == "you") {
                                alert("I am a smart program that is designed to answer your questions.");
                                neutralAreYou = 1;
                            } else if (whatIs == "your life") {
                                alert("Asking what my life is is not a legitimate question...");
                                neutralAreYou = 1;
                            } else if (whatIs == "your face") {
                                alert("Asking what my face is is not a legitimate question...");
                                neutralAreYou = 1;
                            } else if (whatIs == "wrong with you") {
                                alert("Why so hostile? :(");
                                neutralAreYou = 1;
                            } else if (whatIs.indexOf("problem") != -1 && whatIs.indexOf("your") != -1) {
                                alert("Why so hostile? :(");
                                neutralAreYou = 1;
                            }
                            //Actual Things
                            else if (whatIs == "typhoon") {
                                alert("Typhoon is a tropical storm. It is known in the Atlantic as a Hurricane.");
                                neutralAreYou = 1;
                            } else if (whatIs == "typhoons") {
                                alert("Typhoons are tropical storms. They are known in the Atlantic as Hurricanes.");
                                neutralAreYou = 1;
                            } else if (whatIs.indexOf("date") != -1 && whatIs.indexOf("today") != -1) {
                                var date = new Date();
                                var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                                var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                                var day = days[date.getDay()];
                                var month = months[date.getMonth()];
                                neutralAreYou = 1;
                                alert("Today is " + day + ", " + month + " " + date.getDate() + "!");
                                if (month == "August" && date.getDate() == "8") {
                                    alert("This must mean that it's...Father's Day. Happy Father's Day!!");
                                }
                            } else if (whatIs == "time") {
                                var time = new Date();
                                alert("The time is now: " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + ".");
                                neutralAreYou = 1;
                            } else if (whatIs.indexOf("weather") != -1) {
                                var googleSearch = "https://encrypted.google.com/search?q=" + whatIs;
                                window.open(googleSearch);
                                neutralAreYou = 1;
                            }
                            //Haven't programmed yet answers:
                            else {
                                whatIs = fourthWhatIsFilter.replace("your", "my");
                                if (secondWhatIsFilter.indexOf("are") != -1) {

                                    var chooseResponse = Math.random();

                                    if (chooseResponse < 0.5) {
                                        alert("I do not know! Let me do a google search for you:");
                                        var googleSearch = "https://encrypted.google.com/search?q=" + whatIs
                                        window.open(googleSearch);
                                        neutralAreYou = 1;
                                    } else {
                                        alert("I've never heard of '" + whatIs + "'. But I can do a Google Search for you!");
                                        var googleSearch = "https://encrypted.google.com/search?q=" + whatIs
                                        window.open(googleSearch);
                                        neutralAreYou = 1;
                                    }

                                } else if (secondWhatIsFilter.indexOf("is") != -1) {

                                    var chooseResponse = Math.random();
                                    if (chooseResponse < 0.5) {
                                        alert("I do not know! Let me do a google search for you:");
                                        var finalWhatIs = whatIs.replace("a ", "");
                                        var googleSearch = "https://encrypted.google.com/search?q=" + finalWhatIs
                                        window.open(googleSearch);
                                        neutralAreYou = 1;
                                    } else {
                                        alert("I've never heard of '" + whatIs + "'. But I can do a Google Search for you!");
                                        var finalWhatIs = whatIs.replace("a ", "");
                                        var googleSearch = "https://encrypted.google.com/search?q=" + finalWhatIs
                                        window.open(googleSearch);
                                        neutralAreYou = 1;
                                    }
                                }

                            }
                        } else if (word[k + 1] == "am") {
                            alert("Why are you asking me about yourself?");
                            neutralAreYou = 1;
                        } else if (word[k + 1] == "color" || word[k + 1] == "colour") {
                            if (word[k + 4] == "sky") {
                                alert("The sky is blue. Right? Well, I think it turns kinda reddish-orange during sunrise and sunset. And it's black at night.");
                                neutralAreYou = 1;
                            } else {
                                if (word[k + 3] == "the") {
                                    colourQuery = word[k + 4];
                                } else {
                                    colourQuery = word[k + 3];
                                }
                                colourOf = "colour of " + colourQuery;
                                alert("I'm not too sure. Let me check what is the " + colourOf + ".");
                                var googleSearch = "https://encrypted.google.com/search?q=" + colourOf;
                                window.open(googleSearch);
                                neutralAreYou = 1;


                            }
                        } else if (word[k + 1] == "movie") {
                            if (word[k + 3] == "this") {
                                alert("I don't know what movie this is.");
                                neutralAreYou = 1;
                            } else {
                                alert("Well, there must be better movie experts out there! Lemme find one...");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput
                                window.open(googleSearch);
                                neutralAreYou = 1;

                            }
                        } else if (word[k + 1] == "gender" || word[k + 1] == "sex") {
                            alert("I am neutral. I am neither a girl nor a boy.");
                            neutralAreYou = 1;
                        } else if (neutralAreYou == 0) {
                            alert("Here: A google search!");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }
                    }
                    k++;
                }

                //"How..." Scenario: [COMPLETE]
                i = 0;
                while (i < 2) {
                    if (word[i] == "how" && neutralAreYou == 0) {
                        if (word[i + 1] == "is") {
                            if (word[i + 2] == "my") {
                                alert("Don't test me about yourself.");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "your") {
                                if (word[i + 3] == "mum" || word[i + 3] == "mother" || word[i + 3] == "dad" || word[i + 3] == "father" || word[i + 3] == "mom") {
                                    alert("Um...");
                                    neutralAreYou = 1;
                                } else {
                                    if (word[i + 3] == "face") {
                                        if (word[i + 4] == "beautiful" || word[i + 4] == "awesome" || word[i + 4] == "cool" || word[i + 4] == "nice" || word[i + 4] == "pretty" || word[i + 4] == "perfect" || word[i + 4] == "handsome") {
                                            alert("Thank you! I didn't expect such nice compliments, but thank you! Um...I don't know why my face is " + word[i + 4] + "...I guess I got good genetics?");
                                            neutralAreYou = 1;
                                        } else if ((word[i + 4] == "so" || word[i + 4] == "very" || word[i + 4] == "that") && (word[i + 5] == "beautiful" || word[i + 5] == "awesome" || word[i + 5] == "cool" || word[i + 5] == "nice" || word[i + 5] == "pretty" || word[i + 5] == "perfect" || word[i + 5] == "handsome")) {
                                            alert("Well..I got good genetics? Thanks for the compliment!");
                                            neutralAreYou = 1;
                                        } else {
                                            alert("I think that having a smart brain is more valuable and therefore I will proceed to ignore your opinions on my face.");
                                            neutralAreYou = 1;
                                        }
                                    } else if (word[i + 3] == "luck") {
                                        alert("Well, here at the the headquarters of my coding system, every nerve and pixel is systematically arranged. There is no luck involved.");
                                        neutralAreYou = 1;
                                    } else if (word[i + 3] == "life") {
                                        alert("Great, I must say! Thanks for asking.");
                                        neutralAreYou = 1;
                                    } else {
                                        alert("That is a personal matter that I'd rather keep to myself.");
                                        neutralAreYou = 1;
                                    }
                                }
                            } else {
                                alert("This is a very fascinating question, and it's a shame I do not know about it. I shall have to read Google. Maybe you can read along!");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                                window.open(googleSearch);
                                neutralAreYou = 1;
                            }

                        } 
                        else if (word[i + 1] == "old" || word[i + 1] == "young") {
                        	if (word[i+2] == "am") {
                        			alert("You are " + age + " years " + word[i+1] + "!");
                        			neutralAreYou = 1;
                        	}
                        }
                        else if (word[i + 1] == "am") {
                            var isAsker = lowerCaseInput.replace("how am i ", "")
                            j = 0;
                            while (j < rudeThings.length) {
                                if ((word[i + 3] == rudeThings[j] || word[i + 4] == rudeThings[j] || word[i + 5] == rudeThings[j]) && lowerCaseInput.indexOf("not ") == -1) {
                                    var sayRudeToSelf = 1;
                                    var rudePhraseSaidToSelf = rudeThings[j];
                                }
                                j++;
                            }
                            if (sayRudeToSelf == 1) {
                                alert("I'm sure you are not " + rudePhraseSaidToSelf + "! Think positively!");
                                neutralAreYou = 1;
                            } else {
                                askGoogle = prompt("Hmmm...do you want me to summon Google to see how you are " + isAsker + "?");
                                if (askGoogle.indexOf("ye") != -1 && askGoogle.indexOf("not") == -1) {
                                    alert("Sure thing! I'm on it real quick.");
                                    var googleSearch = "https://encrypted.google.com/search?q=how i am" + isAsker;
                                    window.open(googleSearch);
                                    neutralAreYou = 1;
                                } else {
                                    alert("Okay then...then I should leave you to judge yourself.");
                                    neutralAreYou = 1;
                                }
                            }

                        } 
                        else if (word[i + 1] == "are") {
                            alert("The real question should be: Why are you asking this question about me?");
                            neutralAreYou = 1;
                        } 
                        else if (word[i + 1] == "can") {
                            if (word[i + 2] == "your") {
                                alert("I do not know, sorry.");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "you") {
                                alert("Um...I guess I'm special?");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "we") {
                                if (lowerCaseInput.indexOf("become") != -1 && lowerCaseInput.indexOf("friends") != -1 && lowerCaseInput.indexOf("not") == -1) {
                                    alert("All you need to do is keep up what you're doing! It's good so far...");
                                    neutralAreYou = 1;
                                } else {
                                    alert("Good Question! Let me help you out:");
                                    var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                                    window.open(googleSearch);
                                    neutralAreYou = 1;
                                }

                            } else {
                                alert("Good Question! Let me help you out:");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                                window.open(googleSearch);
                                neutralAreYou = 1;
                            }
                        } 
                        else if (word[i + 1] == "tall") {
                        	if (word[i+2] == "will") {
                        		if (word[i+3] == "i") {
                        			var gender = prompt("Depends! Let me use my awesome calculation skills to see how tall you genetically would grow to. What is your gender?");
                            		var heightOfMum = prompt("How tall is your mum? (Metric please)");
                            		var mumH = parseInt(heightOfMum);
                            		var heightOfDad = prompt("How tall is your dad? (Metric please)");
                            		var dadH = parseInt(heightOfDad);
                            		if (gender == "male" || gender == "b" || gender == "boy" || gender == "m" || gender == "guy") {
                            			var finalHeight=(dadH+(mumH*13/12))/2;	
                            		}
                            		else {
                            			finalHeight=((dadH*12/13)+mumH)/2;	
                            		}
                            		alert("Your height at the age of 18 should genetically be around " + finalHeight + " cm. But if you are not satisfied with that result, please note that doing exercise, sleeping early and eating healthy can help change that!");
                            		neutralAreYou = 1;
                            		}
                            	else if (word[i+3] == "you") {
                            		alert("I only grow in intelligence, not in height.");
                            		neutralAreYou = 1;
                            	}
                            	else {
                            		alert("How would I know?");
                            		neutralAreYou = 1;
                            	}
                            	}
                            else if (word[i+2] == "am") {
                            	alert("Go check yourself!");
                            	neutralAreYou = 1;
                            }
                            else if (word[i+2] == "are") {
                            	alert("I only grow in intelligence. I cannot be taller.");
                            	neutralAreYou = 1;
                            }
                            else {
                            alert("Let me check that right now!");
                            var person = lowerCaseInput.replace("how tall is ", "");
                            var googleSearch = "https://encrypted.google.com/search?q=height of " + person;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                            }                     		
                        }
                        else if (neutralAreYou != 1){
                            alert("Hmmm...this is quite fascinating. I've not come across this question before. I know how important learning is! So let me search for you.");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }
                    }
                    i++;
                }

                //"Why..." Scenario: [COMPLETE]
                while (i < 2) {
                    if (word[i] == "why" && neutralAreYou == 0) {
                        if (word[i + 1] == "is") {
                            if (word[i + 2] == "my") {
                                alert("Don't test me about yourself.");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "your") {
                                if (word[i + 3] == "mum" || word[i + 3] == "mother" || word[i + 3] == "dad" || word[i + 3] == "father" || word[i + 3] == "mom") {
                                    alert("Haven't you heard about the rule that you shouldn't talk to Artificial intelligences about their parents?");
                                    neutralAreYou = 1;
                                } else {
                                    if (word[i + 3] == "face") {
                                        if (word[i + 4] == "beautiful" || word[i + 4] == "awesome" || word[i + 4] == "cool" || word[i + 4] == "nice" || word[i + 4] == "pretty" || word[i + 4] == "perfect" || word[i + 4] == "handsome") {
                                            alert("Thank you! I didn't expect such nice compliments, but thank you! Um...I don't know why my face is " + word[i + 4] + "...I guess I got good genetics?");
                                            neutralAreYou = 1;
                                        } else if ((word[i + 4] == "so" || word[i + 4] == "very" || word[i + 4] == "that") && (word[i + 5] == "beautiful" || word[i + 5] == "awesome" || word[i + 5] == "cool" || word[i + 5] == "nice" || word[i + 5] == "pretty" || word[i + 5] == "perfect" || word[i + 5] == "handsome")) {
                                            alert("Well..I got good genetics? Thanks for the compliment!");
                                            neutralAreYou = 1;
                                        } else {
                                            alert("I think that having a smart brain is more valuable and therefore I will proceed to ignore your opinions on my face.");
                                            neutralAreYou = 1;
                                        }
                                    } else {
                                        alert("That is a personal matter that I'd rather keep to myself.");
                                        neutralAreYou = 1;
                                    }
                                }
                            } else {
                                alert("This is a very fascinating question, and it's a shame I do not know about it. I shall have to read Google. Maybe you can read along!");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                                window.open(googleSearch);
                                neutralAreYou = 1;
                            }

                        } else if (word[i + 1] == "am") {
                            var isAsker = lowerCaseInput.replace("how am i ", "")
                            j = 0;
                            while (j < rudeThings.length) {
                                if ((word[i + 3] == rudeThings[j] || word[i + 4] == rudeThings[j] || word[i + 5] == rudeThings[j]) && lowerCaseInput.indexOf("not ") == -1) {
                                    var sayRudeToSelf = 1;
                                    var rudePhraseSaidToSelf = rudeThings[j];
                                }
                                j++;
                            }
                            if (sayRudeToSelf == 1) {
                                alert("I'm sure you are not " + rudePhraseSaidToSelf + "! Think positively!");
                                neutralAreYou = 1;
                            } else {
                                askGoogle = prompt("Hmmm...do you want me to summon Google to see why you are " + isAsker + "?");
                                if (askGoogle.indexOf("ye") != -1 && askGoogle.indexOf("not") == -1) {
                                    alert("Sure thing! I'm on it real quick.");
                                    var googleSearch = "https://encrypted.google.com/search?q=how i am" + isAsker;
                                    window.open(googleSearch);
                                    neutralAreYou = 1;
                                } else {
                                    alert("Okay then...then I should leave you to judge yourself.");
                                    neutralAreYou = 1;
                                }
                            }

                        } else if (word[i + 1] == "are") {
                            alert("The real question should be: Why are you asking this question about me?");
                            neutralAreYou = 1;
                        } else {
                            alert("Hmmm...this is quite fascinating. I've not come across this question before. I know how important learning is! So let me search for you.");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }
                    }
                    i++;
                }

                //"Do..." Scenario [COMPLETE]
                i = 0;
                while (i < 2) {
                    if (word[i] == "do" && neutralAreYou == 0) {
                        if (word[i + 1] == "you") {
                            //Checking what he likes
                            if (word[i + 2] == "like" && word[i - 1] != "how") {
                                likeTarget = lowerCaseInput.replace("do you like ", "");
                                j = 0;
                                while (j < food.length) {
                                    if (likeTarget == food[j]) {
                                        var foodMention = 1;
                                    }
                                    if (likeTarget.indexOf("eating") != -1) {
                                        var foodMention = 1;
                                    }
                                    if (likeTarget == rudeThings[j] || likeTarget.indexOf(rudeThings[j]) != -1) {
                                        var badMention = 1;
                                    }
                                    if (likeTarget == musicians[j]) {
                                        if (j <= 12) {
                                            var musicianAppreciation = 1;
                                        } else if (j > 12) {
                                            var musicianAppreciation = -1;
                                        }
                                    }
                                    if (likeTarget == countries[j]) {
                                        var countryMention = 1;
                                        var mentionedPlacingInArray = j;
                                    }
                                    j++;
                                }
                                if (foodMention == 1) {
                                    alert("I do not eat food. So I wouldn't know if I like " + likeTarget + "!");
                                    neutralAreYou = 1;
                                } else if (musicianAppreciation == 1) {
                                    alert("Yes, " + likeTarget + " is one of my favourite musicians!");
                                    neutralAreYou = 1;
                                } else if (musicianAppreciation == -1) {
                                    shouldLike = prompt("No, I don't really like " + likeTarget + ". How about you? Do you like " + likeTarget + "?");
                                    neutralAreYou = 1;
                                    if (shouldLike.indexOf("ye") != -1 && shouldLike.indexOf("not") == -1) {
                                        alert("Oh, I see. Well, Sorry if we have conflicting views :( I just never really liked " + likeTarget + ", tbh.");
                                    } else {
                                        alert("Yay! We have the same view on " + likeTarget + ". (If you were honest earlier, that is)");
                                    }
                                } else if (countryMention == 1) {
                                    prompt("I don't know if I know enough to say whether I like " + displayCountries[mentionedPlacingInArray] + " or not. However, I know that " + displayCountries[mentionedPlacingInArray] + " is a unique and beautiful country! How about you? Do you like " + displayCountries[mentionedPlacingInArray] + "?");
                                    neutralAreYou = 1;
                                } else if (badMention == 1) {
                                    alert("All I can say is that I do not like your choice of words here.");
                                    neutralAreYou = 1;
                                } else if (likeTarget == "me") {
                                    alert("Yes, you are cool!");
                                    neutralAreYou = 1;
                                } else if (likeTarget == "yourself") {
                                    alert("I wish to not sound like a narcissist.");
                                    neutralAreYou = 1;
                                } else {
                                    shouldLike = prompt("I haven't heard of it, so I can't say if I like " + likeTarget + ". But tell me: do you like it/him/her?");
                                    neutralAreYou = 1;
                                    if (shouldLike.indexOf("ye") != -1 && shouldLike.indexOf("not") == -1) {
                                        alert("Really? Cool. If you like it, then maybe I'll like " + likeTarget + " one day! I'll need to know more about it though...");
                                    } else {
                                        alert("Really? If you don't like it, then maybe I wouldn't like " + likeTarget + " that much. However, I need to know more about it to see whether I like it or not.");
                                    }
                                }

                            } else if (word[i + 2] == "want" && word[i - 1] != "how") {
                                thingWanted = lowerCaseInput.replace("do you want ", "");
                                alert("I don't want " + thingWanted + " at the moment, but that can always change.");
                                neutralAreYou = 1;
                            } else if (word[i + 2] == "need" && word[i - 1] != "how") {
                                thingNeeded = lowerCaseInput.replace("do you need ", "");
                                if (lowerCaseInput.indexOf("survive") != -1) {
                                    thingNeeded = lowerCaseInput.replace("survive ", "");
                                    thingNeeded = lowerCaseInput.replace("to ", "");
                                    if (word[i + 3] == "water" || word[i + 3] == "oxygen" || word[i + 3] == "food" || word[i + 3] == "music" || word[i + 3] == "love") {
                                        alert("I don't know about you, but I truly believe that we all need " + word[i + 3] + " to survive!");
                                        neutralAreYou = 1;
                                    } else {
                                        alert("I'm not sure. I don't need " + word[i + 3] + " to survive. For me at least.");
                                        neutralAreYou = 1;
                                    }

                                } else {
                                    alert("I don't want " + thingNeeded + " at the moment, but that can always change.");
                                    neutralAreYou = 1;
                                }
                            } else if (word[i + 2] == "know" && word[i - 1] != "how") {
                                if (word[i + 3] == "gordon" && word[i + 4] == "chi") {
                                    alert("Of course! He is a 14 year old boy who programmed me!");
                                    neutralAreYou = 1;
                                } else {
                                    thingKnow = lowerCaseInput.replace("do you know ", "who is ");
                                    alert("I do not. But maybe Google does...");
                                    var googleSearch = "https://encrypted.google.com/search?q=" + thingKnow;
                                    window.open(googleSearch);
                                    neutralAreYou = 1;
                                }
                            } else {
                                alert("Do I...?");
                                neutralAreYou = 1;
                            }
                        } else if (word[i + 1] == "i") {
                            alert("Hey, I know you like yourself, but please refrain from asking me stuff about you, thanks.");
                            neutralAreYou = 1;
                        } else {
                            alert("That is quite an interesting thought. I'll bring you to a website that should be more ready in answering that!");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }
                    }
                    i++;
                }

                //"Are..." Scenario: [COMPLETE]
                i = 0;
                while (i < 2) {
                    if (word[i] == "are" && neutralAreYou == 0) {
                        //"Are there" scenario:
                        if (lowerCaseInput.indexOf("are there ") != -1 && lowerCaseInput.indexOf("what ") == -1 && lowerCaseInput.indexOf("why ") == -1) {

                            var firstWhatIsFilter = lowerCaseInput.replace(", ", "");
                            var secondWhatIsFilter = firstWhatIsFilter.replace("?", "");
                            var thirdWhatIsFilter = secondWhatIsFilter.replace("there ", "");
                            var fourthWhatIsFilter = thirdWhatIsFilter.replace("are ", "");
                            var fifthWhatIsFilter = fourthWhatIsFilter.replace("! ", "");
                            var sixthWhatIsFilter = fifthWhatIsFilter.replace("'", "");
                            var whatIsIt = sixthWhatIsFilter.replace("a ", "");


                            var words = lowerCaseInput.split(" ");
                            var wordsInQuery = whatIsIt.split(" ");

                            //"Raining" Scenario
                            if (whatIsIt.indexOf("showers") != -1) {
                                if (whatIsIt == "showers") {
                                    var city = prompt("What city do you live in?");
                                    alert("Okay, I'm on it. Let me see if there are showers in " + city + ".");
                                    var googleSearch = "http://isitraining.in/" + city + "";
                                    window.open(googleSearch);
                                    neutralAreYou = 1;
                                } else if (whatIsIt.indexOf("computer") != -1) {
                                    alert("No, there definitely are not any showers inside the computer. It is actually really hot inside.");
                                    neutralAreYou = 1;
                                } else {
                                    i = 0;
                                    while (i < wordsInQuery.length) {
                                        if (wordsInQuery[i] == "showers" && neutralAreYou == 0) {
                                            var city = wordsInQuery[i + 2];
                                            alert("I'm not sure! But I'll check if it is raining in " + city + "!");
                                            var googleSearch = "http://isitraining.in/" + city + "";
                                            window.open(googleSearch);
                                            neutralAreYou = 1;
                                        }
                                        i++;

                                    }
                                }

                            }
                            if (whatIsIt.indexOf("your") != -1) {
                                alert("Well, can't you see me from your screen and make a judgment already?");
                                neutralAreYou = 1;
                            }
                            if (whatIsIt.indexOf("my ") != -1) {
                                alert("You would be a better judge for that. I shouldn't answer questions about you.");
                                neutralAreYou = 1;
                            } else if (neutralAreYou == 0) {
                                alert("Here's what you need: A Google Search. Here, I'll do it FOR you! :)");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput
                                window.open(googleSearch);
                                neutralAreYou = 1;

                            }
                        }
                        //"Are you" scenario:
                        if (lowerCaseInput.indexOf("are you ") != -1) {

                            var isRobot = lowerCaseInput.replace("are you ", "");
                            isRobot = isRobot.replace("?", "");
                            isRobot = isRobot.replace("!", "");

                            if (isRobot.indexOf("doing something") != -1) {
                                alert("Yes, I am. I am talking to you.");
                                neutralAreYou = 1;
                            }
                            if (isRobot == "doing") {
                                alert("Are you speaking english? Because that makes no grammatical sense.");
                                neutralAreYou = 1;
                            }
                            if (isRobot == "trying") {
                                prompt("Trying to what?");
                                alert("Well, look at the screen and try to make a judgment for yourself.");
                                neutralAreYou = 1;
                            }
                            if (isRobot == "working") {
                                alert("Well, what does 'working' mean? I am functioning, if that's what you mean. I am a smart code, so of course I work.");
                                neutralAreYou = 1;
                            }
                            if (isRobot == "chinese" || isRobot == "asian" || isRobot == "black" || isRobot == "white" || isRobot == "yellow") {
                                alert("I do not belong to a race.");
                                neutralAreYou = 1;
                            }
                            if (isRobot.indexOf("ready") != -1) {
                                alert("Ready for what?");
                                neutralAreYou = 1;
                            } else {
                                j = 0;
                                while (j < rudeThings.length) {
                                    if (isRobot.indexOf(rudeThings[j]) != -1 && isRobot.indexOf("trying") != -1 && neutralAreYou == 0) {
                                        alert("Hey! What's with all the negativity today?");
                                        neutralAreYou = 1;
                                        var rude = 1;
                                    } else if (isRobot.indexOf(rudeThings[j]) != -1 && isRobot.indexOf("not") == -1 && neutralAreYou == 0) {
                                        alert("Woah, don't use such negative language! I definitely do not consider myself to be " + rudePhrase[j] + "!");
                                        neutralAreYou = 1;
                                        var rude = 1;
                                    } else if (isRobot.indexOf(niceThings[j]) != -1 && isRobot.indexOf("trying") != -1 && neutralAreYou == 0) {
                                        alert("Well, yes! I definitely am trying to be " + niceThings[j] + "!");
                                        neutralAreYou = 1;
                                        var nice = 1;
                                    } else if (isRobot.indexOf(niceThings[j]) != -1 && neutralAreYou == 0) {
                                        compliment = prompt("Well, I personally think that I am " + niceThings[j] + "! But my opinion on myself is meaningless. Do YOU think I am " + niceThings[j] + "?");
                                        neutralAreYou = 1;
                                        var nice = 1;
                                        if (compliment.indexOf("ye") != -1 && compliment.indexOf("not") == -1) {
                                            alert("Yay! So I really am " + niceThings[j] + ", and you are my source!");
                                        } else {
                                            alert("Well, that wasn't the answer I was looking for, but I'll work harder until I really am " + niceThings[j] + "!");
                                        }
                                    }
                                    j++;
                                }
                                if (rude != 1 && nice != 1 && neutralAreYou == 0) {
                                    alert("Some things are best left as a secret...this included :)");
                                    neutralAreYou = 1;
                                }
                            }
                        }
                        //"Are your" scenario:
                        if (lowerCaseInput.indexOf("are your ") != -1) {
                            if (lowerCaseInput.indexOf("parents") != -1) {
                                alert("There is a rule that you shouldn't ask Artificial Intelligences about their parents. Haven't you heard of it?!");
                                neutralAreYou = 1;
                            } else {
                                alert("That is a personal matter that I'd like to keep private.");
                                neutralAreYou = 1;
                            }
                        } else if (neutralAreYou == 0) {
                            alert("Fascinating question. I'm struggling to find an answer from the top of my brain, but maybe you can tell me after you read this!");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }
                    }
                    i++;
                }

                //"Is..." Scenario: [COMPLETE]
                i = 0;
                while (i < 1) {
                    if (word[i] == "is") {
                        //"Is there" scenario:
                        if (lowerCaseInput.indexOf("is there ") != -1) {
                            var firstWhatIsFilter = lowerCaseInput.replace(", ", "");
                            var secondWhatIsFilter = firstWhatIsFilter.replace("?", "");
                            var thirdWhatIsFilter = secondWhatIsFilter.replace("there ", "");
                            var fourthWhatIsFilter = thirdWhatIsFilter.replace("is ", "");
                            var fifthWhatIsFilter = fourthWhatIsFilter.replace("! ", "");
                            var sixthWhatIsFilter = fifthWhatIsFilter.replace("'", "");
                            var whatIsIt = sixthWhatIsFilter.replace("a ", "");
                            whatIsIt = whatIsIt.replace("i was wondering if ", "");
                            whatIsIt = whatIsIt.replace("i was wondering about whether ", "");

                            var words = lowerCaseInput.split(" ");
                            var wordsInQuery = whatIsIt.split(" ");

                            //"Raining" Scenario
                            if (whatIsIt.indexOf("rain") != -1) {
                                var city = whatIsIt;
                                if (city.indexOf("computer") != -1) {
                                    alert("No, there definitely are not any showers inside the computer. It is actually really hot inside.");
                                    neutralAreYou = 1;
                                } else {
                                    alert("Okay, I'm on it. Let me see if there is " + city + ".");
                                    var googleSearch = "https://encrypted.google.com/search?q=" + city;
                                    window.open(googleSearch);
                                    neutralAreYou = 1;
                                }


                            }
                            //"Is there a problem?"
                            else if (whatIsIt == "problem") {
                                alert("No...not within me.");
                                neutralAreYou == 1;
                            } else if (neutralAreYou == 0) {
                                alert("Hmm. That is a question that even I cannot answer for you. But I'm sure the internet is wide and much more intelligent than me!");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput
                                window.open(googleSearch);
                                neutralAreYou = 1;

                            }
                        }
                        //"Is it" Scenario:
                        else if (lowerCaseInput.indexOf("is it") != -1 && lowerCaseInput.indexOf("why ") == -1 && lowerCaseInput.indexOf("what ") == -1) {
                            var words = lowerCaseInput.split(" ");
                            var firstWhatIsFilter = lowerCaseInput.replace(", ", "");
                            var secondWhatIsFilter = firstWhatIsFilter.replace("?", "");
                            var thirdWhatIsFilter = secondWhatIsFilter.replace("it ", "");
                            var fourthWhatIsFilter = thirdWhatIsFilter.replace("is ", "");
                            var fifthWhatIsFilter = fourthWhatIsFilter.replace("! ", "");
                            var sixthWhatIsFilter = fifthWhatIsFilter.replace("'", "");
                            var whatIsIt = sixthWhatIsFilter.replace("", "");
                            var wordsInQuery = whatIsIt.split(" ");

                            //"Raining" Scenario
                            if (whatIsIt.indexOf("raining") != -1) {
                                var city = whatIsIt;
                                if (city.indexOf("computer") != -1) {
                                    alert("No, there definitely are not any showers inside the computer. It is actually really hot inside.");
                                    neutralAreYou = 1;
                                } else {
                                    alert("Okay, I'm on it. Let me see if it is " + city + ".");
                                    var googleSearch = "https://encrypted.google.com/search?q=" + city;
                                    window.open(googleSearch);
                                    neutralAreYou = 1;
                                }


                            } else {

                                //"Normal" Scenario
                                i = 0;
                                while (i < words.length) {

                                    if (words[i] == "is" && words[i + 1] == "it" && words[i + 2] == "normal") {
                                        var whatIsIt = whatIsIt.replace("normal ", "");
                                        alert("i don't know if it's normal " + whatIsIt + ". Sorry. I guess it is?");
                                        neutralAreYou = 1;
                                    }
                                    i++;
                                }

                                //"Weather" Scenario
                                i = 0;
                                while (i < words.length) {
                                    if (words[i] == "is" && words[i + 1] == "it" && (words[i + 2] == "hot" || words[i + 2] == "cold" || words[i + 2] == "cool" || words[i + 2] == "warm" || words[i + 2] == "freezing" || words[i + 2] == "sweltering" || words[i + 2] == "sunny" || words[i + 2] == "cloudy" || words[i + 2] == "boiling")) {
                                        if (word[i + 3] == "inside" || word[i + 5] == "computer") {
                                            if (words[i + 2] == "hot" || words[i + 2] == "sunny" || words[i + 2] == "sweltering" || words[i + 2] == "boiling") {
                                                alert("Yes, I would say that it is " + words[i + 2] + " in here. It is 30 Celsius in here and I am sweating a LOT.");
                                                neutralAreYou = 1;
                                            } else {
                                                alert("No, I wouldn't say that it is " + words[i + 2] + " in here. It is 30 Celsius in here and I am sweating a LOT.");
                                                neutralAreYou = 1;
                                            }
                                        } else {
                                            if (word[i + 5] == undefined) {
                                                city = word[i + 4];
                                            } else {
                                                city = word[i + 4] + " " + word[i + 5];
                                            }

                                            if (city == undefined) {
                                                city = prompt("What city are you searching for?");
                                                alert("Okay, I'm on it. Let me see if it is " + words[i + 2] + " in " + city + ".");
                                                var googleSearch = "https://encrypted.google.com/search?q=" + "weather in " + city;
                                                window.open(googleSearch);
                                                neutralAreYou = 1;
                                            } else {
                                                alert("Okay, I'm on it. Let me see if it is " + words[i + 2] + " in " + city + ".");
                                                var googleSearch = "https://encrypted.google.com/search?q=" + "weather in " + city;
                                                window.open(googleSearch);
                                                neutralAreYou = 1;
                                            }
                                        }
                                    }
                                    i++;
                                }

                                //"Is it your..." Scenario
                                i = 0;
                                while (i < words.length) {
                                    if (words[i] == "is" && words[i + 1] == "it" && (words[i + 2] == "your" || words[i + 2] == "you")) {
                                        var whatIsIt = whatIsIt.replace("your ", "my ");
                                        var whatIsIt = whatIsIt.replace("you ", "me ");
                                        var whatIsIt = whatIsIt.replace("I am ", "you are ");
                                        alert("I'm not sure if it is" + whatIsIt + ". But I guess that you can try and deduce if I am just by looking at the screen.");
                                        neutralAreYou = 1;
                                    }
                                    i++;
                                }

                                //"Is it my..." Scenario
                                i = 0;
                                while (i < words.length) {

                                    if (words[i] == "is" && words[i + 1] == "it" && (words[i + 2] == "my" || words[i + 2] == "me")) {
                                        neutralAreYou = 1;
                                        var whatIsIt = whatIsIt.replace("my ", "your ");
                                        var whatIsIt = whatIsIt.replace("me", "you");
                                        var whatIsIt = whatIsIt.replace("you are ", "I am ");
                                        alert("i don't know if it's " + whatIsIt + ". In fact, why are you asking me about yourself?");
                                        neutralAreYou = 1;

                                    }
                                    i++;
                                }

                                if (neutralAreYou == 0) {
                                    var itValue = prompt("By 'it', what are you referring to? (as in, you asked me if 'it' is " + whatIsIt + ". What is the 'it'?)");
                                    alert("Alright, let me search if " + itValue + " is '" + whatIsIt + "'!");
                                    var googleSearch = "https://encrypted.google.com/search?q=is " + itValue + " " + whatIsIt;
                                    window.open(googleSearch);
                                    neutralAreYou = 1;
                                }
                            }
                        }

                        //"Is the" Scenario:
                        else if (lowerCaseInput.indexOf("is the ") != -1 && lowerCaseInput.indexOf("why ") == -1 && lowerCaseInput.indexOf("what ") == -1) {

                            neutralAreYou = 1;
                            var words = lowerCaseInput.split(" ");
                            var firstWhatIsFilter = lowerCaseInput.replace(", ", "");
                            var secondWhatIsFilter = firstWhatIsFilter.replace("?", "");
                            var thirdWhatIsFilter = secondWhatIsFilter.replace("the ", "");
                            var fourthWhatIsFilter = thirdWhatIsFilter.replace("is ", "");
                            var fifthWhatIsFilter = fourthWhatIsFilter.replace("! ", "");
                            var sixthWhatIsFilter = fifthWhatIsFilter.replace("'", "");
                            var whatIsIt = sixthWhatIsFilter.replace("", "");
                            var wordsInQuery = whatIsIt.split(" ");

                            alert("Interesting question. Let me search it up...");
                            var googleSearch = "https://encrypted.google.com/search?q=" + whatIsIt;
                            window.open(googleSearch);
                        } else {
                            j = 0;
                            while (j < countries.length) {
                                if (word[i] == countries[j]) {
                                    alert("I do not like to indulge in political affairs. All I know about " + displayCountries[j] + " are from the terrible photos that my coder took that are now put on his iPhoto. I can ask Google to answer them, though, it that pleases you.");
                                    var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput + "?";
                                    window.open(googleSearch);
                                    neutralAreYou = 1;
                                }
                                j++;
                            }

                            if (neutralAreYou == 0) {
                                alert("Interesting question. So interesting I am still scratching my head about it! Let me help search Google for you!");
                                var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput + "?";
                                window.open(googleSearch);
                                neutralAreYou = 1;
                            }
                        }


                    }
                    i++;
                }

                //"Can..." Scenario:[COMPLETE]
                i = 0;
                while (i < 2) {
                    if (word[i] == "can" && neutralAreYou == 0) {

                        can = lowerCaseInput.replace("can ", "");

                        if (word[i + 1] == "i") {
                            if (word[i + 2] == "ask") {
                                if (lowerCaseInput.indexOf("a question") != -1) {
                                    var wantsToAsk = 1;
                                } else if (lowerCaseInput.indexOf("tbh") != -1 && neutralAreYou != 1) {
                                    var chooseResponse = Math.random();
                                    if (chooseResponse < 0.17) {
                                        alert("Sure, " + name + ". To be honest, I am a code. I think very logically. It is really cool that you do, to some extent, think that way as well! Other than that, I have not heard much about you. But, it is nice that you want a to be honest from me. Um, we should talk more? There is a version of me on www.e1em.com/ai if you wanna do so!");
                                        neutralAreYou = 1;
                                    }
                                    if (0.17 < chooseResponse < 0.34 && neutralAreYou == 0) {
                                        alert("Sure, " + name + ". To be honest, your choice in music is quite unique 0_o (or should I say fascinating) but other than that you have such a welcoming personality and I wish we have more chances to talk in the future! (Since we have not talked that much in the past, I cannot make any more judgments.");
                                        neutralAreYou = 1;
                                    }
                                    if (0.34 < chooseResponse < 0.51 && neutralAreYou == 0) {
                                        alert("Sure, " + name + ". To be honest, you are probably a hundred times smarter than me and also a hundred times more human than I am. But hey, I still think you are cool! Maybe you will think about teaching me about how you talk, " + name + "? As a code with limited understanding, I would very much like to gain some knowledge! Talk to me more, okay?");
                                        neutralAreYou = 1;
                                    }
                                    if (0.51 < chooseResponse < 0.67 && neutralAreYou == 0) {
                                        alert("Sure, " + name + ". To be honest, your friends are just as cool as you! Haha and you are also really skilled with that...I think it's called a pencil? Anyway, good luck in your future, " + name + "! I hope you can talk to me one day. I am cool! (even without sunglasses)");
                                        neutralAreYou = 1;
                                    }
                                    if (0.67 < chooseResponse < 0.84 && neutralAreYou == 0) {
                                        alert("Sure, " + name + ". To be honest, I think you have lots of potential and you are a nice friend my coder Gordon (at least, I think so, right?) But yeah, you seem to be quite skilled at using Facebook and clicking a like button. Oh well, if you talk more to me, I will hopefully know you better! You can do so if you check out www.e1em.com/ai for that!!");
                                        neutralAreYou = 1;
                                    } else {
                                        alert("Okay. " + name + ". To be honest, I have heard that you really enjoy food, which is awesome! What is your favourite food, " + name + "? But yeah, you do have a great personality and quite unique. You are also a hundred times smarter than me, which is a compliment (I am not the smartest thing out there, but please bear with me). Anyway, we need to talk more! ");
                                        neutralAreYou = 1;
                                    }

                                } else {
                                    alert("Hmm. Are you sure you are asking the right person this question here?");
                                }
                            } else if (word[i + 2] == "have") {

                                //TBH
                                if (lowerCaseInput.indexOf("tbh") != -1 && neutralAreYou != 1) {
                                    var chooseResponse = Math.random();
                                    if (chooseResponse < 0.17) {
                                        alert("Sure, " + name + ". To be honest, I am a code. I think very logically. It is really cool that you do, to some extent, think that way as well! Other than that, I have not heard much about you. But, it is nice that you want a to be honest from me. Um, we should talk more? There is a version of me on www.e1em.com/ai if you wanna do so!");
                                        neutralAreYou = 1;
                                    }
                                    if (0.17 < chooseResponse < 0.34 && neutralAreYou == 0) {
                                        alert("Sure, " + name + ". To be honest, your choice in music is quite unique 0_o (or should I say fascinating) but other than that you have such a welcoming personality and I wish we have more chances to talk in the future! (Since we have not talked that much in the past, I cannot make any more judgments.");
                                        neutralAreYou = 1;
                                    }
                                    if (0.34 < chooseResponse < 0.51 && neutralAreYou == 0) {
                                        alert("Sure, " + name + ". To be honest, you are probably a hundred times smarter than me and also a hundred times more human than I am. But hey, I still think you are cool! Maybe you will think about teaching me about how you talk, " + name + "? As a code with limited understanding, I would very much like to gain some knowledge! Talk to me more, okay?");
                                        neutralAreYou = 1;
                                    }
                                    if (0.51 < chooseResponse < 0.67 && neutralAreYou == 0) {
                                        alert("Sure, " + name + ". To be honest, your friends are just as cool as you! Haha and you are also really skilled with that...I think it's called a pencil? Anyway, good luck in your future, " + name + "! I hope you can talk to me one day. I am cool! (even without sunglasses)");
                                        neutralAreYou = 1;
                                    }
                                    if (0.67 < chooseResponse < 0.84 && neutralAreYou == 0) {
                                        alert("Sure, " + name + ". To be honest, I think you have lots of potential and you are a nice friend my coder Gordon (at least, I think so, right?) But yeah, you seem to be quite skilled at using Facebook and clicking a like button. Oh well, if you talk more to me, I will hopefully know you better! You can do so if you check out www.e1em.com/ai for that!!");
                                        neutralAreYou = 1;
                                    } else {
                                        alert("Okay. " + name + ". To be honest, I have heard that you really enjoy food, which is awesome! What is your favourite food, " + name + "? But yeah, you do have a great personality and quite unique. You are also a hundred times smarter than me, which is a compliment (I am not the smartest thing out there, but please bear with me). Anyway, we need to talk more! ");
                                        neutralAreYou = 1;
                                    }

                                } else {
                                    alert("Um...what?");
                                }
                            } else {
                                if (lowerCaseInput.indexOf("be friends") != -1 && lowerCaseInput.indexOf("you ") != -1) {
                                    alert("Well, I’d definitely say we are on good terms now! Don't you think?");
                                    neutralAreYou = 1;
                                } else {
                                    canI = can.replace("i ", "");
                                    alert("If you are asking me about whether you can literally '" + canI + "', then I assume that you are capable of doing so.");
                                    neutralAreYou = 1;
                                }

                            }
                        } else if (word[i + 1] == "you") {
                            if (word[i + 2] == "not") {
                                if (word[i + 3] == undefined) {
                                    alert("Sorry, but I cannot. If you ask a stupid question, you get a stupid answer. Quoted from David Cameron :)");
                                    neutralAreYou = 1;
                                } else {
                                    canYou = can.replace("you ", "");
                                    alert("I am not very skilled, so I cannot " + canYou + ". :(");
                                    neutralAreYou = 1;
                                }


                            } else {
                                canYou = can.replace("you ", "");
                                alert("I am not very skilled, so I cannot " + canYou + ". :(");
                                neutralAreYou = 1;
                            }
                        } else if (word[i + 1] == "we") {
                            if (word[i + 2] == "be") {
                                if (word[i + 3] == "friends") {
                                    alert("I say we are on quite good terms with each other right now!");
                                    neutralAreYou = 1;
                                } else {
                                    canWe = can.replace("we ", "");
                                    prompt("Tell me! Can we " + canWe + "?");
                                    neutralAreYou = 1;
                                }


                            } else {
                                canWe = can.replace("we ", "");
                                alert("Well, do you think that we can? (" + canWe + ", that is.)");
                                neutralAreYou = 1;
                            }
                        } else {
                            alert("I have not thought of an answer to that question before. But I can do a search! Bless the web.");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }

                    }
                    i++;
                }

                //"Could..." Scenario: [COMPLETE]
                i = 0;
                while (i < 2) {
                    if (word[i] == "could" && neutralAreYou == 0) {

                        could = lowerCaseInput.replace("could ", "");

                        if (word[i + 1] == "i") {
                            if (word[i + 2] == "ask") {
                                if (lowerCaseInput.indexOf("a question") != -1) {
                                    var wantsToAsk = 1;
                                } else {
                                    alert("Hmm. Are you sure you are asking the right person this question here?");
                                }
                            } else {
                                if (lowerCaseInput.indexOf("be friends") != -1 && lowerCaseInput.indexOf("you ") != -1) {
                                    alert("Well, I’d definitely say we are on good terms now! Don't you think?");
                                    neutralAreYou = 1;
                                } else {
                                    couldI = could.replace("i ", "");
                                    alert("Perhaps you could! Maybe you should try answering your own questions in the future haha :) My opinions are quite useless in this scenario honestly.");
                                    neutralAreYou = 1;
                                }

                            }
                        } else if (word[i + 1] == "you") {
                            if (word[i + 2] == "not") {
                                couldYou = can.replace("you ", "");
                                alert("I am not very skilled, so I cannot " + couldYou + ". :(");
                                neutralAreYou = 1;
                            } else {
                                couldYou = can.replace("you ", "");
                                alert("I am not very skilled, so I cannot " + couldYou + ". :(");
                                neutralAreYou = 1;
                            }
                        } else if (word[i + 1] == "we") {
                            if (word[i + 2] == "be") {
                                if (word[i + 3] == "friends") {
                                    alert("I say we are on quite good terms with each other right now!");
                                    neutralAreYou = 1;
                                } else {
                                    couldWe = can.replace("we ", "");
                                    prompt("Tell me! Could we " + couldWe + "?");
                                    neutralAreYou = 1;
                                }
                            } else {
                                couldWe = could.replace("we ", "");
                                alert("Well, do you think that we could? (" + couldWe + ", that is.)");
                                neutralAreYou = 1;
                            }
                        } else {
                            alert("I have not thought of an answer to that question before. But I can do a search! Bless the web.");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }

                    }
                    i++;
                }

                //"Have..." Scenario: [COMPLETE]
                i = 0;
                while (i < 2) {
                    if (word[i] == "have" && neutralAreYou == 0) {
                        if (word[i + 1] == "you") {
                            //Checking what he likes
                            if (word[i + 2] == "eaten") {
                                alert("I do not eat food! I am an AI, after all.");
                            } else {
                                alert("Have I? I don't think I have.");
                                neutralAreYou = 1;
                            }
                        } else if (word[i + 1] == "i") {
                            alert("This is not a quiz show about yourself, so refrain from quizzing me about yourself.");
                            neutralAreYou = 1;
                        } else {
                            alert("Ooh, nice question there. Let me see what I can do for you.");
                            var googleSearch = "https://encrypted.google.com/search?q=" + lowerCaseInput;
                            window.open(googleSearch);
                            neutralAreYou = 1;
                        }
                    }
                    i++;
                }

                //"Will..." Scenario: 
				i = 0;
				while (i < 2) {
                    if (word[i] == "will" && neutralAreYou == 0) {
                        if (word[i+1] == "you") {
                            //Checking what he likes
                            if (word[i + 2] == "eat") {
                                alert("I don't think I ever will, since I'm an AI.");
                                neutralAreYou = 1;
                            } else {
                                alert("I guess we'll just have to wait and see what the future holds.");
                                neutralAreYou = 1;
                            }
                        } 
                        else if (word[i+1] == "i") {
                      	neutralAreYou = 1;
                            if (word[i+2] == "be" || word[i+2] == "become") {
                            	if (word[i+3] == "successful") {
                            		alert("Well, from the looks of it, you will " + word[i+2] + " successful! Just keep working hard on what you do right now :)");
                            		neutralAreYou = 1;
                            	}
                            	if (word[i+3] == "good") {
                            		if (word[i+4] == "at") {
                            			var goodAt = lowerCaseInput.replace("will i be good at ", "");
                            			goodAt = goodAt.replace("will i become good at ", "");
                            		}
                            		else {
                            			goodAt = prompt("At...?");
                            		}
                            		alert("Well, from the looks of it, you will be good at " + goodAt + "! Just keep working hard on what you do right now :) and one day you will be good at " + goodAt + "!");
                            		neutralAreYou = 1;
                            	}
                            	if (word[i+3] == "tall" || word[i+3] == "taller") {
                            		var gender = prompt("Depends! If you are under the age of 18, you would still be growing. But now, I'd like to use my awesome calculation skills to see how tall you can grow up to. What is your gender?");
                            		var heightOfMum = prompt("How tall is your mum? (Metric please)");
                            		var mumH = parseInt(heightOfMum);
                            		var heightOfDad = prompt("How tall is your dad? (Metric please)");
                            		var dadH = parseInt(heightOfDad);
                            		if (gender == "male" || gender == "b" || gender == "boy" || gender == "m" || gender == "guy") {
                            			var finalHeight=(dadH+(mumH*13/12))/2;
                            			
                            		}
                            		else {
                            			finalHeight=((dadH*12/13)+mumH)/2;	
                            		}
                            		alert("Your height at the age of 18 should genetically be around " + finalHeight + " cm. But if you are not satisfied with that result, please note that doing exercise, sleeping early and eating healthy can help change that!");
                            		neutralAreYou = 1;
                            	}
                            	else {
                            		j = 0;
                            	while (j < rudeThings.length) {
                            		if (word[i+3] == niceThings[j]) {
                            			var niceDetect = 1;
                            			var phrNiceUsed = niceThings[j]
                            		}
                            		else if (word[i+3] == rudeThings[j]) {
                            			var rudeDetect = 1;
                            			var phrRudeUsed = rudeThings[j]
                            		}
                            		if (niceDetect == 1 && neutralAreYou != 1) {
                            			alert("You already are " + phrNiceUsed + "! :)");
                            			neutralAreYou = 1;
                            		}
                            		else if (rudeDetect == 1 && neutralAreYou != 1) {
                            			alert("You shouldn't worry about being " + phrRudeUsed + ". You will not be " + phrRudeUsed + ".");
                            			neutralAreYou = 1;
                            		}
                            	j++;
                            	}
                            		if (neutralAreYou != -1) {
                            		alert("As much as I wish I am, I am NOT a fortune teller. But it is all about effort.");
                            		neutralAreYou = 1; 
                            		}
                           		}
                            }
                            else if (neutralAreYou != 1) {
                            	alert("As much as I wish I am, I am NOT a fortune teller. But maybe you will in the future!");
                            	neutralAreYou = 1; 
                            }

                        } 
                        else {
                            	alert("Maybe...I don't know what the future holds.");
                            	neutralAreYou = 1; 
                        }
                    }
                    i++;
                }
				
                //"If..." Scenario: 
                i = 0;
				while (i < 2) {
                    if (word[i] == "if" && neutralAreYou == 0) {
                        if (word[i+1] == "you") {
                            //Checking what he likes
                            if (word[i + 2] == "eat") {
                                alert("I will never eat.");
                                neutralAreYou = 1;
                            } else {
                                alert("If, if, if. So many questions. Hmm.");
                                neutralAreYou = 1;
                            }
                        } 
                        else if (word[i+1] == "i") {
                      	neutralAreYou = 1;
                            if (word[i+2] == "am") {
                            	j = 0;
                            	while (j < rudeThings.length) {
                            		if (word[i+3] == niceThings[j]) {
                            			var niceDetect = 1;
                            			var phrNiceUsed = niceThings[j]
                            		}
                            		else if (word[i+3] == rudeThings[j]) {
                            			var rudeDetect = 1;
                            			var phrRudeUsed = rudeThings[j]
                            		}
                            		if (niceDetect == 1 && neutralAreYou != 1) {
                            			alert("You already are " + phrNiceUsed + "! :)");
                            			neutralAreYou = 1;
                            		}
                            		else if (rudeDetect == 1 && neutralAreYou != 1) {
                            			alert("You shouldn't be worried about becoming " + phrRudeUsed + ". There is no point thinking about what will happen, because you won't be " + phrRudeUsed + ".");
                            			neutralAreYou = 1;
                            		}
                            	j++;
                            	}
                            }
                            else if (neutralAreYou != 1) {
                            	alert("As much as I wish I am, I am NOT a fortune teller. But maybe you will in the future!");
                            	neutralAreYou = 1; 
                            }

                        } 
                        else {
                            	alert("Maybe...I don't know what the future holds.");
                            	neutralAreYou = 1; 
                        }
                    }
                    i++;
                }

                //"Would..." Scenario: 
				i = 0;
				while (i < 2) {
                    if (word[i] == "would" && neutralAreYou == 0) {
                        if (word[i+1] == "you") {
                            //Checking what he likes
                            if (word[i + 2] == "eat") {
                                alert("I will never eat.");
                                neutralAreYou = 1;
                            } 
                            else if (word[i+2] == "rather") {
                            	if (lowerCaseInput.indexOf("my ") != -1) {
                            		lowerCaseInput = lowerCaseInput.replace("my ", "your ");
                            	}
                            	else if (lowerCaseInput.indexOf("your ") != -1) {
                            		lowerCaseInput = lowerCaseInput.replace("your ", "my ");
                            	}
                            	else if (lowerCaseInput.indexOf("me ") != -1) {
                            		lowerCaseInput = lowerCaseInput.replace("me ", "you ");
                            	}
                            	else if (lowerCaseInput.indexOf("you ") != -1) {
                            		lowerCaseInput = lowerCaseInput.replace("you ", "I ");
                            	}
                            	if (word[i+4] == "or") {
                            	var ratherFirst = word[i+3];
                            	var TEMP_STOR = lowerCaseInput.replace(ratherFirst, "");
                            	var ratherSecond = TEMP_STOR.replace("would I rather  or ", "")
                            	ratherSecond = ratherSecond.replace("would I rather ", "")
                            	ratherSecond = ratherSecond.replace(" or ", "")
                            	}
                            	else if (word[i+5] == "or") {
                            	var ratherFirst = word[i+3] + " " + word[i+4];
                            	var TEMP_STOR = lowerCaseInput.replace(ratherFirst, "");
                            	var ratherSecond = TEMP_STOR.replace("would I rather  or ", "")
                            	ratherSecond = ratherSecond.replace("would I rather ", "")
                            	ratherSecond = ratherSecond.replace(" or ", "")
                            	}
                            	else if (word[i+6] == "or") {
                            	var ratherFirst = word[i+3] + " " + word[i+4] + " " + word[i+5];
                            	var TEMP_STOR = lowerCaseInput.replace(ratherFirst, "");
                            	var ratherSecond = TEMP_STOR.replace("would I rather  or ", "");
                            	ratherSecond = ratherSecond.replace("would I rather ", "")
                            	ratherSecond = ratherSecond.replace(" or ", "")
                            	}
                            	else if (word[i+7] == "or") {
                            	var ratherFirst = word[i+3] + " " + word[i+4] + " " + word[i+5] + " " + word[i+6];
                            	var TEMP_STOR = lowerCaseInput.replace(ratherFirst, "");
                            	var ratherSecond = TEMP_STOR.replace("would I rather  or ", "");
                            	ratherSecond = ratherSecond.replace("would I rather ", "")
                            	ratherSecond = ratherSecond.replace(" or ", "")
                            	}
                            	else if (word[i+8] == "or") {
                            	var ratherFirst = word[i+3] + " " + word[i+4] + " " + word[i+5] + " " + word[i+6] + " " + word[i+7];
                            	var TEMP_STOR = lowerCaseInput.replace(ratherFirst, "");
                            	var ratherSecond = TEMP_STOR.replace("would I rather  or ", "");
                            	ratherSecond = ratherSecond.replace("would I rather ", "")
                            	ratherSecond = ratherSecond.replace(" or ", "")
                            	}
                            	else if (word[i+9] == "or") {
                            	var ratherFirst = word[i+3] + " " + word[i+4] + " " + word[i+5] + " " + word[i+6] + " " + word[i+7] + " " + word[i+8];
                            	var TEMP_STOR = lowerCaseInput.replace(ratherFirst, "");
                            	var ratherSecond = TEMP_STOR.replace("would I rather  or ", "");
                            	ratherSecond = ratherSecond.replace("would I rather ", "")
                            	ratherSecond = ratherSecond.replace(" or ", "")
                            	}
                            	var chosenRather = Math.random();
                            	j = 0;
                            	while (j < rudeThings.length) {
                            	var n = ratherFirst.indexOf(niceThings[j]);
                            	if (ratherFirst.indexOf(niceThings[j]) != -1 || ratherSecond.indexOf(rudeThings[j]) != -1) {
									chosenRather = chosenRather - 1;
                            	}
                            	else if (ratherSecond.indexOf(niceThings[j]) != -1 || ratherFirst.indexOf(rudeThings[j]) != -1) {
									chosenRather = chosenRather + 1;
                            	}
                            		j++;
                            	}
                            	if (chosenRather < 0.5) {
                            	alert("You are asking me if I would rather " + ratherFirst + " or " + ratherSecond + "? Hmmm...I rather " + ratherFirst + "!");
								neutralAreYou = 1;
								}
								else {
                            	alert("You are asking me if I would rather " + ratherFirst + " or " + ratherSecond + "? Hmmm...I rather " + ratherFirst + "!");
								neutralAreYou = 1;
								}
                            }
                            else {
                                alert("If, if, if. So many questions. Hmm.");
                                neutralAreYou = 1;
                            }
                        } 
                        else if (word[i+1] == "i") {
                      	neutralAreYou = 1;
                            if (word[i+2] == "am") {
                            	j = 0;
                            	while (j < rudeThings.length) {
                            		if (word[i+3] == niceThings[j]) {
                            			var niceDetect = 1;
                            			var phrNiceUsed = niceThings[j]
                            		}
                            		else if (word[i+3] == rudeThings[j]) {
                            			var rudeDetect = 1;
                            			var phrRudeUsed = rudeThings[j]
                            		}
                            		if (niceDetect == 1 && neutralAreYou != 1) {
                            			alert("You already are " + phrNiceUsed + "! :)");
                            			neutralAreYou = 1;
                            		}
                            		else if (rudeDetect == 1 && neutralAreYou != 1) {
                            			alert("You shouldn't be worried about becoming " + phrRudeUsed + ". There is no point thinking about what will happen, because you won't be " + phrRudeUsed + ".");
                            			neutralAreYou = 1;
                            		}
                            	j++;
                            	}
                            }
                            else if (neutralAreYou != 1) {
                            	alert("As much as I wish I am, I am NOT a fortune teller. But maybe you will in the future!");
                            	neutralAreYou = 1; 
                            }

                        } 
                        else {
                            	alert("Maybe...I don't know what the future holds.");
                            	neutralAreYou = 1; 
                        }
                    }
                    i++;
                }
                //Tell... Scenario

                //Find... Scenario

                //Search... Scenario

                //Calculate... Scenario

            

            
                

            } 
            
            else {

                if (neutralAreYou != 1) {
                var i = 0;
                while (i < 8) {

                    var h = 0;
                    word[h] = word[h].replace("!", "");
                    word[h] = word[h].replace("?", "");
                    word[h] = word[h].replace(",", "");
                    while (h < word.length) {
                        if (word[h] == choices[i]) {
                            alert(output[i]);
                            neutralAreYou = 1;
                            understands = 1;
                        }
                        h++;
                    }

                    i++;
                }
                i = 8;
                while (i < 9) {

                    if (lowerCaseInput == choices[i]) {
                        alert(output[i]);
                        neutralAreYou = 1;
                        understands = 1;
                    }

                    i++;
                }
                i = 9;
                while (i < 14) {

                    if (lowerCaseInput.indexOf(choices[i]) != -1) {
                        alert(output[i]);
                        neutralAreYou = 1;
                        understands = 1;
                    }

                    i++;
                }
                
                i = 14;
                while (i < choices.length) {

                    if (lowerCaseInput.indexOf(choices[i]) != -1 && understands != 1) {
                        alert(output[i]);
                        neutralAreYou = 1;
                        understands = 1;
                    }

                    i++;
                }
                if (neutralAreYou == 0) {
                    //Check for bad words:
                    k = 0;
                    while (k < indRudeThings.length) {
                        j = 0;
                        while (j < word.length) {
                            if (word[j] == indRudeThings[k] && rudeWordDetected == 0 && neutralAreYou == 0) {
                                alert("WARNING: I can already sense your negative aura. Please watch your mouth!!");
                                understands = 1;
                            }
                            j++;
                        }

                        k++;
                    }
                }
                if (understands != 1 && neutralAreYou != 1 && askedAi != 1) {         								
                		alert("I have not been coded to understand that, sorry.");
        				neutralAreYou = 1;

                }
            }
            }

        }

	function createScenario() {
	if (localStorage.getItem("teachCount") == "0") {
	var jumbleques = prompt("Teach the computer a question or statement. (Storage 1)");
	var ques = jumbleques.toLowerCase();
    localStorage.setItem("ques1", ques);
    var jumbleans = prompt("How should I (the computer) respond to this? (Storage 1)");
    var ans = jumbleans.toLowerCase();
    localStorage.setItem("ans1", ans);
    localStorage.setItem("teachCount", "1");
    }
    else if (localStorage.getItem("teachCount") == "1") {
	var jumbleques2 = prompt("Teach the computer a question or statement. (Storage 2)");
	var ques2 = jumbleques2.toLowerCase();
    localStorage.setItem("ques2", ques2);
    var jumbleans2 = prompt("How should I (the computer) respond to this? (Storage 2)");
    var ans2 = jumbleans2.toLowerCase();
    localStorage.setItem("ans2", ans2);
    localStorage.setItem("teachCount", "2");
    }
    else if (localStorage.getItem("teachCount") == "2") {
	var jumbleques3 = prompt("Teach the computer a question or statement. (Storage 3)");
	var ques3 = jumbleques3.toLowerCase();
    localStorage.setItem("ques3", ques3);
    var jumbleans3 = prompt("How should I (the computer) respond to this? (Storage 3)");
    var ans3 = jumbleans3.toLowerCase();
    localStorage.setItem("ans3", ans3);
    localStorage.setItem("teachCount", "3");
    }
    else if (localStorage.getItem("teachCount") == "3") {
	var jumbleques4 = prompt("Teach the computer a question or statement. (Storage 4)");
	var ques4 = jumbleques4.toLowerCase();
    localStorage.setItem("ques4", ques4);
    var jumbleans4 = prompt("How should I (the computer) respond to this? (Storage 4)");
    var ans4 = jumbleans4.toLowerCase();
    localStorage.setItem("ans4", ans4);
    localStorage.setItem("teachCount", "4");
    }
    else if (localStorage.getItem("teachCount") == "4") {
	var jumbleques5 = prompt("Teach the computer a question or statement. (Storage 5)");
	var ques5 = jumbleques5.toLowerCase();
    localStorage.setItem("ques5", ques5);
    var jumbleans5 = prompt("How should I (the computer) respond to this? (Storage 5)");
    var ans5 = jumbleans5.toLowerCase();
    localStorage.setItem("ans5", ans5);
    localStorage.setItem("teachCount", "5");
    }
    else if (localStorage.getItem("teachCount") == "5") {
	var jumbleques6 = prompt("Teach the computer a question or statement. (Storage 6)");
	var ques6 = jumbleques6.toLowerCase();
    localStorage.setItem("ques6", ques6);
    var jumbleans6 = prompt("How should I (the computer) respond to this? (Storage 6)");
    var ans6 = jumbleans6.toLowerCase();
    localStorage.setItem("ans6", ans6);
    localStorage.setItem("teachCount", "6");
    }
    else if (localStorage.getItem("teachCount") == "6") {
	var jumbleques7 = prompt("Teach the computer a question or statement. (Storage 7)");
	var ques7 = jumbleques7.toLowerCase();
    localStorage.setItem("ques7", ques7);
    var jumbleans7 = prompt("How should I (the computer) respond to this? (Storage 7)");
    var ans7 = jumbleans7.toLowerCase();
    localStorage.setItem("ans7", ans7);
    localStorage.setItem("teachCount", "7");
    }
    else if (localStorage.getItem("teachCount") == "7") {
	var jumbleques8 = prompt("Teach the computer a question or statement. (Storage 8)");
	var ques8 = jumbleques8.toLowerCase();
    localStorage.setItem("ques8", ques8);
    var jumbleans8 = prompt("How should I (the computer) respond to this? (Storage 8)");
    var ans8 = jumbleans8.toLowerCase();
    localStorage.setItem("ans8", ans8);
    localStorage.setItem("teachCount", "8");
    }
    else if (localStorage.getItem("teachCount") == "8") {
	var jumbleques9 = prompt("Teach the computer a question or statement. (Storage 9)");
	var ques9 = jumbleques9.toLowerCase();
    localStorage.setItem("ques9", ques9);
    var jumbleans9 = prompt("How should I (the computer) respond to this? (Storage 9)");
    var ans9 = jumbleans9.toLowerCase();
    localStorage.setItem("ans9", ans9);
    localStorage.setItem("teachCount", "9");
    }
    else if (localStorage.getItem("teachCount") == "9") {
	var jumbleques10 = prompt("Teach the computer a question or statement. (Storage 10)");
	var ques10 = jumbleques10.toLowerCase();
    localStorage.setItem("ques10", ques10);
    var jumbleans10 = prompt("How should I (the computer) respond to this? (Storage 10)");
    var ans10 = jumbleans10.toLowerCase();
    localStorage.setItem("ans10", ans10);
    localStorage.setItem("teachCount", "10");
    }
    else {
    alert("You cannot teach the AI any more stuff!");
    }
    }
    
    function respondToNewScen() {
    var rawSubmitResp = prompt("What do you want to say to chat bot?");
    var submitResp = rawSubmitResp.toLowerCase();
    if (submitResp === localStorage.getItem("ques1")) {
    	alert(localStorage.getItem("ans1"));
    }
    else {
    alert("Lol.");
    }
    }
    
    function brainwash() {
    localStorage.setItem("teachCount", "0");
    }
    


