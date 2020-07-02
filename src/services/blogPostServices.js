import api from '../config/api';
// Returns a single post based on the id provided
export function getPostFromId(blogPosts,id) {
  
    const post =  blogPosts.find((post) =>  post._id === id)
    return post
}

export async function getAllBlogPosts() {
    const response = await api.get('/posts');
    return response.data
}

export async function addBlogPost(newPost) {
    const response = await api.post('/posts', newPost);
    return response.data
}
