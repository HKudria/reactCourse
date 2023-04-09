import {Color} from 'react-bootstrap/types';
import {useState} from 'react';
import {json} from 'react-router-dom';

const API_KEY = "16b6008f7224409dd68424b013cbbdcc"
const SECRET = '97cb550e9414da59'
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
    farm: 9,
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
        `${URL}${props.method}&api_key=${API_KEY}&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1`
    ).then(response => {
        return response.json()
    })
}