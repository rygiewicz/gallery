import React from 'react';
import PropTypes from 'prop-types';
import Immutable from "immutable";

import Photo from './Photo';

function PhotoList(props) {
    return (
        <div id="photo-list" className={getClassName(props)}>
            {
                props.photos.map((photo, index) =>
                    (
                        <Photo
                            key={index}
                            photo={photo}
                        />
                    )
                )
            }
        </div>
    );
}

PhotoList.propTypes = {
    photos: PropTypes.instanceOf(Immutable.List)
};

export default PhotoList;

function getClassName(props) {
    if (props.loading) {
        return 'busy';
    }

    return null;
}