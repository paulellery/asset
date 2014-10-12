
baseSchema = new SimpleSchema({
	assetId: {
		type: String,
		label: "Asset ID",
		max: 50,
		optional: false
	},
	location: {
		type: String,
		label: "Location"
	},
	dateCreated: {
		type: Date,
		label: "Date created",
		denyUpdate: true,
		defaultValue: Date.now()
	},
	assetType: {
		type: String,
		label: "Asset type"
	}

})

