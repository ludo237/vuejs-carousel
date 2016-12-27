export const mutations = {
    writePhotos(state, photos) {
        state.photos = photos;
    },

    changeSelectedPhoto(state, photo) {
        state.selectedPhoto = (photo != null && Object.keys(photo).length > 0) ? photo : {};
    }
};
