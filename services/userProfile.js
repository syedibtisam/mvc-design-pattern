async function createProfile(model,data){
    return await model.create(data);
}

async function getProfile(model,filter){
    return await model.findById({_id:filter.userId}).exec();
}

async function updateProfile(model,filter,updateData){
    return await model.findOneAndUpdate({_id:filter.userId},{$set:updateData},{new:true});
}

async function deleteProfile(model,filter){
    return await model.findOneAndDelete({_id:filter.userId});
}

module.exports = {
    createProfile,
    getProfile,
    updateProfile,
    deleteProfile
}