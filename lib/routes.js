Router.configure({
    layoutTemplate: "masterLayout"
})

Router.map(function () {
	
	this.route("home", {path: '/'});

	this.route("define", {
		waitOn: function() { return Meteor.subscribe('schemas')},
	    
	    data: function() {
	    	templateData = { schemas: Schemas.find({}) };
	    	return templateData;
	    }

	});

	this.route("createSchema", {
		path: 'define/add'
	})

	this.route("record");



});