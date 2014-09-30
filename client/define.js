


Template.define.events({
	'click #add': function () {
		Router.go("createSchema");
	}

});



Template.createSchema.helpers({

	dataTypes: function(){
		return [
			{label: "Text", value: "Text"},
			{label: "Number", value: "Number"},
			{label: "Date", value: "Date"}

		]
	},

	formAction: function() {
		return Session.get("formAction");
	},

	editingDoc: function() {
    	return this;
  	}
});



AutoForm.hooks({
  schemaForm: {
    onSuccess: function (operation, result, template) {
      Router.go("define");
      return false;
  }
  },

});
