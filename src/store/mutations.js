export const mutations = {
    writePhotos(state, photos) {
        state.photos = photos;
    },

    changeSelectedPhoto(state, payload) {
        if (Object.keys(payload).length <= 0) {
            state.selectedPhoto = {};
        } else {
            if ("index" in payload) {
                payload.photo.index = payload.index;
            }

            state.selectedPhoto = payload.photo;
        }
    },
};
