/* run on server startup */
Debates.remove({});
Debates.insert({
  title : "Giuliani-Romney Immigration Debate Presidential Election",
  slug : "test",
  url : "http://www.cnn.com/2007/POLITICS/11/28/debate.transcript/",
  description : "Ernie Nardi: This is Ernie Nardi from Dyker Heights in Brooklyn, New York, with a question for the ex-Mayor Giuliani.",
  points : [
    {
      _id: new Meteor.Collection.ObjectID()._str,
      votes: 10,
      type: "point",
      evaluation: null,
      text : "Did New York City [operate] as a sanctuary city, aiding and abetting illegal aliens?",
      children : [
        {
          _id: new Meteor.Collection.ObjectID()._str,
          votes : 12,
          type : "con",
          evaluation: null,
          text : "Giuliani: New York City was not a sanctuary city.",
          children : [
            {
              _id: new Meteor.Collection.ObjectID()._str,
              votes : 19,
              type : "pro",
              evaluation: null,
              text : "single illegal immigrant that New York City could find that either committed a crime or was suspected of a crime.",
              children : []
            },
            {
              _id: new Meteor.Collection.ObjectID()._str,
              votes : 7,
              type : "con",
              evaluation: null,
              text : " confusion, three areas in which NYC made exceptions",
              children : [
                {
                  _id:  new Meteor.Collection.ObjectID()._str,
                  votes : 8,
                  type : "con",
                  evaluation: null,
                  text : "New York City allowed the children of illegal immigrants to go to school [was an exception]",
                  children : []
                }
              ]
            }
          ]
        },
        {
          _id: new Meteor.Collection.ObjectID()._str,
          type : "con",
          votes : 5,
          evaluation : null,
          text : "Did New York City [operate] as a sanctuary city, aiding and abetting illegal aliens?",
          children : []
        }
      ]
    }
  ]
});