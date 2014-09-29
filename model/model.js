

Schemas = new Mongo.Collection("schemas")

// Schema - schema
/*
{
	name:

	fields: [
		{
			name,
			type,
			seq,
			label,
			optional,
			menu: [	options ]
			}
		}
	]
}
*/



Schema = {}

Schema.fields = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max:50
	},
	label: {
		type: String,
		label: "Label",
		max:50
	},
	type: {
		type: String,
		label: "Type",
	},
	optional: {
		type: Boolean,
		label: "Optional?"
	},

})

Schema.schema = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 50
	}
})