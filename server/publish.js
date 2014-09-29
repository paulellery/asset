

Meteor.publish('schemas', function () {
	return Schemas.find({})
});