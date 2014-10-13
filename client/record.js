

Session.setDefault("assetSchema", null);
Session.setDefault("chosenSchema", null);
Session.setDefault("reload", true);




Template.form.events({
    'change select[name="assetType"]': function (evt, tpl) {
        var x = tpl.find("select").value;

        Session.set("chosenSchema", null);
       // Session.set("assetSchema", {});

        if (x){
            //s = Meteor.subscribe("useSchema", x, function(){
              //setSchema(x);
              Session.set("chosenSchema", x);
              //Session.set("assetSchema", buildSchema(x));
             //});
        }

    }
});


Template.form.helpers({
 
    chosenSchema: function(){
        return Session.get("chosenSchema") 
    },
    chosenAssetSchema: function(){
        return getSchema(Session.get("chosenSchema") )
    },
    typeOptions: function(){
        var opts = [];
        Schemas.find({},{sort: {schemaName:1}}).forEach(function (sch) {
            opts.push({label: sch.schemaName, value: sch.schemaName})
        });
        return opts;
    },
    baseSchema: function(){
        return baseSchema;
    }
});

Template.form.rendered = function(){
    AutoForm.resetForm("insertAssetForm")
    AutoForm.resetForm("assetAttributeForm")
    Session.set("chosenSchema", null);
    Session.set("assetSchema", {});
} 

Template.form.events({
  'click button': function () {
    // ...
  }
});


