
Meteor.methods ({

	saveSchema: function(name, fields){
		check(name, String);
		// TODO: check the fields 

		Schemas.insert({name: name, fields: fields})
		return true;
	}
})