class ImagePost {
    constructor(post){
        this.imageUrl = post.imageUrl;
        this.id = post.id;
        this.dateCreated = post.dateCreated;
        this.userId = post.userId;
        this.userDisplayName = post.userDisplayName;
        this.type = post.type;
        this.commentsNum = post.commentsNum;
    }

}

export default ImagePost;