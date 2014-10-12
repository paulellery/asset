

Meteor.publish('schemas', function () {
	return Schemas.find({})
});


Meteor.publish('useSchema', function(name) {
    setSchema(name)
    return Schemas.find({schemaName: name});
});

Meteor.publish('assetdata', function(){
	return AssetData.find({})
});

Meteor.publish('thisasset', function(id){
	return AssetData.find({_id: id})
});