const Studio = require('../models/studioModel');

class StudioService{
    createStudio = async (studioName, City, Coords) => {
        const studio = new Studio({
            studioName : studioName,
            City: City,
            Coords: Coords
        });


        return await studio.save();
    };

     getStudioById = async (id) => {
        return await Studio.findById(id);
    };

    getStudios = async () => {
        return await Studio.find({});
    };

     updateStudio = async (id, studioName, City, Coords) => {
        const studio = await getStudioById(id);
        if (!studio)
            return null;
        if(studioName){
            studio.Name = studioName
        }
        if(City){
            studio.City = City
        }
        if(Coords){
            studio.Coords = Coords
        }
        await studio.save();
        return studio;
    };
     deleteStudio = async (id) => {
        const studio = await getStudioById(id);
        if (!studio)
            return null;

        await studio.remove();
        return studio;
    };
}


module.exports = new StudioService();
