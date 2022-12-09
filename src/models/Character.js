const mongoose = require('mongoose')

const CharSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            
        },
        gender:{
            type: String
        },
        status:{
            type: String
        },
        species:{
            type: String
        },
        id:{
            type:Number
        },
        origin:{
          type:String
        }
    }
  );

const modelChar = mongoose.model('Character', CharSchema);

module.exports = modelChar