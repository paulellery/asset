

Template.define.events({
	'click #add': function () {
		Session.set("currentFields",[] );
		Router.go("createSchema");
	}
});


Template.fieldRow.isChecked = function(){
	return this.optional ? "checked" : "" ;
}

Template.createSchema.fields = function(){
	return Session.get("currentFields");
}






Template.createSchema.helpers({
	schemaSchema: function () {
		    return Schema.schema;

	},
	fieldsSchema: function () {
		    return Schema.fields;

	},
	dataTypes: function(){
		return [
			{label: "Text", value: "Text"},
			{label: "Number", value: "Number"},
			{label: "Date", value: "Date"}

		]
	},

	schemaFormError : function() { return Session.get("schemaFormError");}
});





AutoForm.hooks({
  contactForm: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
    	console.log("here")
      if (addFieldToSchema(insertDoc)) {
        this.resetForm();
        this.done();
      }
      return false;
    }
  },
  schemaForm: {
    onSubmit: function (insertDoc, updateDoc, currentDoc) {
    	
      if (saveSchema(insertDoc)) {
        Router.go("define")
      }
	  this.done();
      return false;
    }
  },

});


addFieldToSchema = function(field){

	var fields = Session.get("currentFields");
	if (!fields){ fields = [] }
	fields.push(field)
	Session.set("currentFields",fields);
	Session.set("schemaFormError",null)
	return true;
}

saveSchema = function(s){
	var name = s.name;
	var fields = Session.get("currentFields");;

	if (fields && fields.length > 0 ){
		var x = Meteor.call('saveSchema', name, fields)
		return true;
	}
	else
	{
		Session.set("schemaFormError", "Please add one or more fields");
		
	}

	return false;
	
}