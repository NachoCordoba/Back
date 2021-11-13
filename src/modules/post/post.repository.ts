import IPost from './post.interface';
import axios from 'axios';

export default class PostRepository{
    constructor(){

    }

    public async getPosts(): Promise<IPost[]>{
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}