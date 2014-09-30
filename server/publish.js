

Meteor.publish('schemas', function () {
	return Schemas.find({})
});


Meteor.publish('useSchema', function(name) {
    setSchema(name)
    return Schemas.find({name: name});
});

