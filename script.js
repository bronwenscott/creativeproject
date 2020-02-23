function generateDefinition(e) {
  e.preventDefault();
  // get form values
  let word = document.getElementById('word').value;
  console.log(word);

  // check if word is empty
  if (word === "") {
    word = "random";
  }



  var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.response);
    parseJson(this.response);
  }
});

xhr.open("GET", "https://wordsapiv1.p.rapidapi.com/words/" + word + "/definitions");
xhr.setRequestHeader("x-rapidapi-host", "wordsapiv1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "77bd9360d3mshb9c915148ace90cp1a1bd8jsnb9ec126806c5");
xhr.responseType = "json";
xhr.send(data);





  function parseJson (json){
    let results = "";
    results += "<h1>" + word.toUpperCase() + "</h1>";
    results += "<div class = 'definitions'>"
    for (let i = 0; i < json.definitions.length; i++) {
        results += "<p class = 'd'><strong>defintion  " + (i + 1) + "</strong>" + ": (" + json.definitions[i].partOfSpeech + ") " + json.definitions[i].definition + "</p>";
        results += "</br>";
    }
    results += "</div>"

    document.getElementById('def').innerHTML  = results;
  }



         }

        




document.getElementById('get').addEventListener('click', generateDefinition);










  //curl --header 'X-Rapidapi-key: 77bd9360d3mshb9c915148acd90cp1a1bd8jsnb9ec126806c5' https://lingua-robot.p.rapidapi.com/language/v1/entries/en/example
