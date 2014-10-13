
AutoForm.hooks({
    insertAssetForm: {

        before: {
            insertAsset: function(doc, template){
                console.log("here")
                
                if (AutoForm.validateForm("assetAttributeForm"))
                {
                    var assetAttr = AutoForm.getFormValues("assetAttributeForm").insertDoc
                    _.extend(doc, assetAttr)

                    this.done;                    
                    return doc;
                }
                
                return false;

            },
        },

        onError: function(operation, error, template){
            console.log("onError", operation, error)
            if (Session.get("chosenSchema")){
                AutoForm.validateForm("assetAttributeForm");
            }
            this.done;
        },

        onSuccess: function(o,r,t){
            Router.go('/list')
        }
    }
})