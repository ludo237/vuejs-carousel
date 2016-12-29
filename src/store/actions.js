import Axios from "axios";

export const actions = {

    /**
     * Load the photo from the source provided by
     * the gallery
     *
     * @param commit
     * @param {String} source
     */
    loadPhotos: ({commit}, source) => {
        Axios.get(source).then(function (response) {
            commit("writePhotos", response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
};
