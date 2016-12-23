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
     * @param getters
     * @returns {boolean}
     */
    isPhotoSelected: (state, getters) => {
        return Object.keys(getters.selectedPhoto).length > 0;
    }
};
