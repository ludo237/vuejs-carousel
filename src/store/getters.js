export const getters = {

    /**
     * Return the current array of
     * photos from the state property
     *
     * It doesn't matter if the array is
     * empty.
     *
     * @param state
     * @returns {Array}
     */
    photos: state => {
        return state.photos;
    },

    /**
     * Return the current selected photo as
     * an object.
     *
     * @param state
     * @returns {state.selectedPhoto|{}}
     */
    selectedPhoto: state => {
        return state.selectedPhoto;
    },

    /**
     * Returns a boolean that determine if there is
     * a selected photo or an empty object for the
     * "selectedPhoto" state
     *
     * @param state
     * @returns {boolean}
     */
    isPhotoSelected: (state) => {
        return Object.keys(state.selectedPhoto).length > 0;
    },

    /**
     *
     * @param state
     * @returns {number}
     */
    photoIndex: state => {
        return state.photos.indexOf(state.selectedPhoto);
    }
};
