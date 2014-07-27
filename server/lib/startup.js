/* run on server startup */
Meteor.startup(function () {
  if (Debates.find().count() == 0){
    Debates.remove({});
    Points.remove({});
    var debate = Debates.insert({
      title : "Giuliani-Romney Immigration Debate Presidential Election",
      slug : "test",
      url : "http://www.cnn.com/2007/POLITICS/11/28/debate.transcript/",
      description : "Ernie Nardi: This is Ernie Nardi from Dyker Heights in Brooklyn, New York, with a question for the ex-Mayor Giuliani.",
      dt : new Date()
    });
    var parent = Points.insert({
      parent: debate,
      votes : 5,
      type : "con",
      evaluation: null,
      text : "Did New York City [operate] as a sanctuary city, aiding and abetting illegal aliens?",
      dt : new Date()
    });
    var parent = Points.insert({
      parent: debate,
      votes : 10,
      type : "point",
      evaluation : null,
      text : "sadfasdf sdaf sdaf asdf dsafdsafasdfds gal aliens?",
      dt : new Date()
    });
    Points.insert({
      parent: parent,
      votes : 12,
      type : "con",
      evaluation: null,
      text : "single illegal immigrant that New York City could find that either committed a crime or was suspected of a crime.",
      dt : new Date()
    });
    var parent = Points.insert({
      parent: parent,
      votes : 4,
      type : "con",
      evaluation: null,
      text : "Giuliani: New York City was not a sanctuary city.",
      dt: new Date()
    });
    Points.insert({
      parent: parent,
      votes : 12,
      type : "con",
      evaluation: null,
      text : "Giulianadsf adsf dsaf dsaf  a sanctuary city.",
      dt : new Date()
    });
    Points.insert({
      parent: parent,
      votes : 12,
      type : "con",
      evaluation: null,
      text : "3213123 123 213 anctuary city.",
      dt : new Date()
    });
  }
});