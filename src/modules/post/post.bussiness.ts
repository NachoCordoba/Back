import IPost from "./post.interface";
import PostRepository from "./post.repository";

export default class UserBussiness{
    private postRepository: PostRepository;

    constructor(postRepository: PostRepository = new PostRepository()){
        this.postRepository = postRepository;
    }

    public async getPosts(): Promise<IPost[]>{
        return this.postRepository.getPosts();
    }
}