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
     * Get Listed Post
     * @returns 
     */
    public async getPosts(): Promise<IPost[]>{
        return this.postRepository.getPosts();
    }

    /**
     * Get Paginated Post
     * @returns 
     */
     public async getPaginatedPosts(page: number, limit: number): Promise<IPost[]>{
        return this.postRepository.getPaginatedPosts(page, limit);
    }
}