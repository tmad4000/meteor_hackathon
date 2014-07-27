/* run on server startup */
Debates.remove({});
Points.remove({});
var debate = Debates.insert({
  title : "Giuliani-Romney Immigration Debate Presidential Election",
  slug : "test",
  url : "http://www.cnn.com/2007/POLITICS/11/28/debate.transcript/",
  description : "Ernie Nardi: This is Ernie Nardi from Dyker Heights in Brooklyn, New York, with a question for the ex-Mayor Giuliani."
});
var parent = Points.insert({
  parent: debate,
  votes : 5,
  type : "con",
  evaluation: null,
  text : "Did New York City [operate] as a sanctuary city, aiding and abetting illegal aliens?"
});
var parent = Points.insert({
  parent: debate,
  votes : 10,
  type : "point",
  evaluation : null,
  text : "sadfasdf sdaf sdaf asdf dsafdsafasdfds gal aliens?"
});
Points.insert({
  parent: parent,
  votes : 12,
  type : "con",
  evaluation: null,
  text : "single illegal immigrant that New York City could find that either committed a crime or was suspected of a crime."
});
var parent = Points.insert({
  parent: parent,
  votes : 4,
  type : "con",
  evaluation: null,
  text : "Giuliani: New York City was not a sanctuary city."
});
Points.insert({
  parent: parent,
  votes : 12,
  type : "con",
  evaluation: null,
  text : "Giulianadsf adsf dsaf dsaf  a sanctuary city."
});
Points.insert({
  parent: parent,
  votes : 12,
  type : "con",
  evaluation: null,
  text : "3213123 123 213 anctuary city."
});

 