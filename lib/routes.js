Router.configure({
    layoutTemplate: "masterLayout"
})

Router.map(function () {
	
	this.route("home", {path: '/'});

	this.route("define", {
		waitOn: function() { return Meteor.subscribe('schemas')} ,
	    
	    data: function() {
	    	templateData = { schemas: Schemas.find({}) };
	    	return templateData;
	    }

	});

	this.route("createSchema", {
		path: '/define/add',
		onRun: function(){
			Session.set("formAction", "insert");
		}
	})

	this.route("editSchema", {
		path: '/define/edit/:_id',
		waitOn: function() { return Meteor.subscribe('schemas')} ,
		data: function() { 
			return Schemas.findOne(this.params._id);	
		},
		template: "createSchema",
		onRun: function(){
			Session.set("formAction", "update");
		}
	})

	
	this.route("test");




    this.route("record",{    
        template:"record",
        waitOn: function(){ return Meteor.subscribe("schemas")},
		data: function() {
	    	templateData = { schemas: Schemas.find({}) };
	    	return templateData;
	    }

    });
});
