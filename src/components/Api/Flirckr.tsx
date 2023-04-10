const API_KEY = '16b6008f7224409dd68424b013cbbdcc'
const URL = 'https://api.flickr.com/services/rest/?method='

export enum flickrMethodsEnum {
    GET_PHOTO = 'flickr.galleries.getPhotos',
    SEARCH_PHOTO = 'flickr.photos.search'
}

export interface FlickrPhotoInterface {
    id: string,
    owner: string,
    secret: string,
    server: string,
    farm: number,
    title: string,
    ispublic: boolean,
    isfriend: boolean,
    isfamily: boolean,
    is_primary: boolean,
    has_comment: boolean
}

export interface FlickrResponseInterface {
    page: number,
    pages: number,
    perpage: number,
    total: number,
    photo: FlickrPhotoInterface[]
}

interface FlickrPropsInterface {
    method: flickrMethodsEnum
    params?: string;
}

export const getData = (props: FlickrPropsInterface) => {
    return fetch(
        `${URL}${props.method}&api_key=${API_KEY}${props.params ?? ''}&format=json&nojsoncallback=1`
    )
}