
Meteor.methods ({

	saveSchema: function(name, fields){
		check(name, String);
		// TODO: check the fields 

		Schemas.insert({name: name, fields: fields})
		return true;
	},


	insertAsset: function(doc){
		console.log("Add method:", doc)

		// validate assetType
		if (!Schemas.findOne({schemaName: doc.assetType})){
			throw new Meteor.Error(500, "Unknown asset type")
		}
		
		// Validate the doc against the appropriate schema
		check(doc, getSchema(doc.assetType));

		setSchema(doc.assetType);
		AssetData.insert(doc);
		return true;
	}
})