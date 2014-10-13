
Meteor.methods ({

	saveSchema: function(name, fields){
		check(name, String);
		// TODO: check the fields 

		Schemas.insert({name: name, fields: fields})
		return true;
	},


	insertAsset: function(obj){
		console.log("Add method:", obj)
		
		//	 TODO: VALIDATE THIS DATA

		setSchema(obj.assetType);
		AssetData.insert(obj);
		return true;
	}
})