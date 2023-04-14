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

export interface FlickrState {
    searchVal: string
    photos: FlickrPhotoInterface[]
    status: LoadingStatusEnum
    error: string
}

export enum LoadingStatusEnum {
    LOADING = 'loading',
    FAILED = 'failed',
    IDLE = 'idle',
}

export interface ParsePhotoThunkInterface {
    params: string,
    method: flickrMethodsEnum
}