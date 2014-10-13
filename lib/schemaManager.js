
setSchema = function(name){

    AssetData.removeSchema();
    AssetData.attachSchema(baseSchema);

    if (name){
                     
        AssetData.attachSchema(buildSchema(name));
        console.log("Schema changed:", name)
    }
}


getSchema = function(name){

    var x = Schemas.findOne({schemaName: name});
    var out = {}
    if (x){
        x = x.fields

        //for(var key in x)
        for (var i = 0; i < x.length; i++)
        {
            if ( x[i].type == "String")  { x[i].type = String}
            if ( x[i].type == "Date")  { x[i].type = Date}
            if ( x[i].type == "Number")  { x[i].type = Number}

            out[x[i].name] = {
                type: x[i].type,
                label: x[i].label,
                optional: x[i].optional
            };
        }
    }

    return new SimpleSchema(out);
}
