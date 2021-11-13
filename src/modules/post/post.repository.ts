import IPost from './post.interface';
import axios from 'axios';

export default class PostRepository{
    constructor(){

    }

    public async getPosts(): Promise<IPost[]>{
        const postUri = process.env.POST_URI ? process.env.POST_URI : 'https://jsonplaceholder.typicode.com/posts'
        const { data } = await axios.get(postUri);
        return data;
    }
}