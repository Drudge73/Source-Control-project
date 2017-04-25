function myFunction() {
  var x = document.getElementById("textBox").value;
  var numWords = 1;
  var numSentences = 0;
  var avgWordsSentence = 0;
  var numSpaces = 0;

  for (i = 0; i < x.length; i++) {
    if (x[i] == ' '){
      numSpaces++;
      numWords++;
    }

    if (x[i] == '!' || x[i] == '?' || x[i] == '.'){
      numSentences++;
    }
  }
  avgWordsSentence = numWords/numSentences;

  document.getElementById("row1").innerHTML = "Number of spaces = " + numSpaces;
  document.getElementById("row2").innerHTML = "Number of words = " + numWords;
  document.getElementById("row3").innerHTML = "Number of sentences = " + numSentences;
  document.getElementById("row4").innerHTML = "Average words per sentence = " + avgWordsSentence;

}
