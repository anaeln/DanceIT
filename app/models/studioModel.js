const {Schema, model}= require('mongoose');

const StudioSchema=new Schema({
    studioName: {
        type: String,
        required: true,
        unique:false
    },
    City: {
        type: String,
        required: true,
    },
    Coords: {
        type: Array,
        required: true,
    }
})


module.exports=model('Studio',StudioSchema);