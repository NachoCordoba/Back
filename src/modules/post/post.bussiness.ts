import IPost from "./post.interface";
import PostRepository from "./post.repository";

/**
 * Post Bussiness Logic
 */
export default class PostBussiness{
    private postRepository: PostRepository;

    /**
     * Bussiness Logic connected with Post Repository
     * @param postRepository 
     */
    constructor(postRepository: PostRepository = new PostRepository()){
        this.postRepository = postRepository;
    }

    /**
     * Get Pagginated Post
     * @returns 
     */
    public async getPosts(): Promise<IPost[]>{
        return this.postRepository.getPosts();
    }
}