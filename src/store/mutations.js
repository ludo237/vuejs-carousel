export const mutations = {

    /**
     * Write the photos inside the Vuex store
     * so we can use them
     * 
     * @param state
     * @param {Array} photos
     */
    writePhotos(state, photos) {
        state.photos = photos;
    },

    /**
     * Change the current photo on the theater if
     * exists otherwise we set the current photo to 
     * an empty object and the theater will close automatically
     * 
     * @param state
     * @param {Object} photo
     */
    changeSelectedPhoto(state, photo) {
        state.selectedPhoto = ((photo !== undefined && photo !== null) && Object.keys(photo).length > 0) ? photo : {};
    },

    /**
     * If the index is equal to -1 we need to get the last photo of the gallery
     * so we can create that chain effect that we want instead of closing
     * the theater which is not intended at the moment.
     * 
     * @param state
     * @param {number} index
     */
    previousPhotoOfIndex(state, index) {
        index = (index + 1 === 0) ? state.photos.length - 1 : index;
        state.selectedPhoto = state.photos[index];   
    },

    /**
     * If we reach the latest element of the array we want to go back to the first one
     * creating the second part of the chain for the photo gallery.
     * 
     * @param state
     * @param {number} index
     */
    nextPhotoOfIndex(state, index) {
        index = (index - state.photos.length === 0) ? 0 : index;
        state.selectedPhoto = state.photos[index];
    }
};
