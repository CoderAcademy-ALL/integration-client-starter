// Returns a single post based on the id provided
export function getPostFromId(blogPosts,id) {
    const post =  blogPosts.find((post) =>  post._id === parseInt(id))
    return post
}
