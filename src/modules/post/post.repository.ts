import IPost from './post.interface';
import axios from 'axios';

/**
 * Post Repository
 */
export default class PostRepository{
    constructor(){

    }

    /**
     * Get Posts from Uri
     * @returns 
     */
    public async getPosts(): Promise<IPost[]>{
        const postUri = process.env.POST_URI ? process.env.POST_URI : 'https://jsonplaceholder.typicode.com/posts'
        const { data } = await axios.get(postUri);
        return data;
    }

    /**
     * Get Paginated Posts from Uri
     * @returns 
     */
     public async getPaginatedPosts(page: number, limit: number): Promise<any>{
        const post = await this.getPosts();
        return {
            page,
            limit,
            count: post.length,
            data: post.slice(page * limit, (page * limit) + limit)
        };
    }
}