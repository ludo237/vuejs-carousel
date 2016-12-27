export const mutations = {
    writePhotos(state, photos) {
        state.photos = photos;
    },

    changeSelectedPhoto(state, photo) {
        state.selectedPhoto = ((photo !== undefined || photo !== null) && Object.keys(photo).length > 0) ? photo : {};
    }
};
