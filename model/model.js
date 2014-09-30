


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

Schema.schema = new SimpleSchema({
	schemaName: {
		type: String,
		label: "Name",
		max: 50
	},
	fields: { 
		type: [Object],
		minCount: 1,
		maxCount: 10
	},
	"fields.$.name": {
		type: String,
		label: "Name",
		max:50
	},
	"fields.$.label": {
		type: String,
		label: "Label",
		max:50
	},
	"fields.$.type": {
		type: String,
		label: "Type",
	},
	"fields.$.optional": {
		type: Boolean,
		label: "Optional?"
	}
})

Schemas = new Mongo.Collection("schemas")
Schemas.attachSchema(Schema.schema);


AssetData = new Mongo.Collection("assets");
