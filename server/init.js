
/* Initialise some test data */

Meteor.startup( function(){
	if (Schemas.find().count() === 0 ){
		Schemas.insert({
			schemaName: "Cars",
			fields: [
				{
					name: "Make",
					label: "Make (eg. Renault)",
					type: "String",
					optional: false
				},
				{
					name: "Model",
					label: "Model (eg. Clio)",
					type: "String",
					optional: false
				},
				{
					name: "Reg Date",
					label: "Date of registration",
					type: "Date",
					optional: false
				},
				{
					name: "Price",
					label: "Price (£)",
					type: "Number",
					optional: true
				}
			]
		});

		Schemas.insert({
			schemaName: "Phones",
			fields: [
				{
					name: "Brand",
					label: "Brand (eg. Apple)",
					type: "String",
					optional: false
				},
				{
					name: "Model",
					label: "Model (eg. iPhone)",
					type: "String",
					optional: false
				},
				{
					name: "Storage",
					label: "Storage (GB)",
					type: "Number",
					optional: true
				}
			]
		})

	}
})