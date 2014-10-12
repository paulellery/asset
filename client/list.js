Template.assetList.helpers({
    settings: function () {
        return {
            rowsPerPage: 10,
            showFilter: true
        };
    },
    mycollection: function(){
    	return AssetData.find();
    }
});

Template.assetList.events({
	'click .reactive-table tr': function (event) {
    // set the blog post we'll display details and news for
    console.log("/asset/" + this._id)
   	 Router.go("/asset/" + this._id)

  }
});