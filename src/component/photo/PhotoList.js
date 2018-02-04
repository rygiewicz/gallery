import React from 'react';
import PropTypes from 'prop-types';
import Immutable from "immutable";
import InfiniteScroll from 'react-infinite-scroller';

import Photo from './Photo';
import PhotoActions from "../../data/photo/PhotoActions";

function PhotoList(props) {
    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={props.hasMore}
        >
            <PhotoListPhotos {...props}/>
            <PhotoListLoader {...props}/>
        </InfiniteScroll>
    );
}

function PhotoListPhotos(props) {
    if (!props.photos.count()) {
        return null;
    }

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

function PhotoListLoader(props) {
    if (!props.loading) {
        return null;
    }

    return (<div className="loader"/>)
}

PhotoList.propTypes = {
    photos: PropTypes.instanceOf(Immutable.List),
    hasMore: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired
};

export default PhotoList;

function getClassName(props) {
    if (props.loading) {
        return 'busy';
    }

    return null;
}

function loadFunc(page) {
    PhotoActions.getPhotos(page);
}