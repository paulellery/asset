




Session.setDefault("schema", null);
Session.setDefault("reload", true);




Template.schemaPicker.events({
    'change #sPicker': function (evt, tpl) {
        var x = tpl.find("select").value;
        Session.set("schema", null);

        if (x){
          s = Meteor.subscribe("useSchema", x, function(){
              setSchema(x);
              Session.set("schema", x);
          });
        }
        else{
                Session.set("schema", x);
              }


        


    }
});


Template.record.helpers({
  chosenSchema: function() {
        return Session.get("schema");
    }
});
