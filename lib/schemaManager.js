
  setSchema = function(name){

            var x = Schemas.findOne({schemaName: name});

            var out = {}
            if (x){

                x = x.fields

                //for(var key in x)
                for (var i = 0; i < x.length; i++)
                {
                        if ( x[i].type == "String")  { x[i].type = String}
                        if ( x[i].type == "Date")  { x[i].type = Date}

                        out[x[i].name] = {
                            label: x[i].label,
                            optional: x[i].optional,
                            type: x[i].type
                        };

                    
                }
              AssetData.removeSchema();
              AssetData.attachSchema(new SimpleSchema(out));

            }
}