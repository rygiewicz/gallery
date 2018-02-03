import {ReduceStore} from 'flux/utils';
import PhotoDispatcher from './PhotoDispatcher'
import Immutable from 'immutable';
import PhotoRecord from "../../domain/photo/Photo";
import PhotoActionTypes from './PhotoActionTypes';

const photos = Immutable.List([
    new PhotoRecord({
        author: 'photo1',
        date: new Date('2001-12-10'),
        description: 'photo1 description'
    }),
    new PhotoRecord({
        author: 'photo2',
        date: new Date('2008-05-17'),
        description: 'photo2 description'
    }),
    new PhotoRecord({
        author: 'photo3',
        date: new Date('1997-02-23'),
        description: 'photo3 description'
    })
]);

class PhotoStore extends ReduceStore {
    constructor() {
        super(PhotoDispatcher);
    }

    getInitialState() {
        return Immutable.List();
    }

    reduce(state, action) {
        switch (action.type) {
            case PhotoActionTypes.GET_PHOTOS:
                return photos;
            default:
                return state;
        }
    }
}

export default new PhotoStore();
