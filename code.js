var nouns = ["cat","dog","goat"];
var verbs = ["goating","jump","fly"];
var adverbs = ["goatly","nicely","badly"];
var adjectives = ["kind", "goated","pumped"];

var words = [["kind", "goated","pumped"],["cat","dog","goat"],["goating","jump","fly"],["goatly","nicely","badly"]];

function randomsentence(){
    var sentence = "The ";
    var result = "";
    for (let i = 0; i < 4; i++) {
        console.log("hi");
        var randint = Math.floor(Math.random() * 3);
        console.log(randint);
        var tempstring = words[i][randint];
        console.log(tempstring);
        var result = sentence.concat(tempstring, " ");
        var sentence = result;
      }
    console.log(sentence);
}

addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
