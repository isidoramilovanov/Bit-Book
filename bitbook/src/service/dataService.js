import TextPost from '../entities/TextPost';
import ImagePost from '../entities/ImagePost';
import VideoPost from '../entities/VideoPost';
import User from '../entities/User';
import Comment from '../entities/Comment'

class DataServices {

    getPosts = (n, m) => {
        return fetch(`http://bitbookapi.azurewebsites.net/api/Posts?$top=10&$skip=${(m-n)*10}`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
            .then((response) => {
                if (response.ok === false) {
                    var error = new Error(response.statusText);
                    throw error
                }
                return response.json()
            })
            .then((postList) => {
                let textPosts = postList.filter((post) => post.type === "text");
                let videoPosts = postList.filter((post) => post.type === "video");
                let imagePosts = postList.filter((post) => post.type === "image")
                let objectPosts = {
                    textPosts: textPosts.map((post) => new TextPost(post)),
                    videoPosts: videoPosts.map((post) => new VideoPost(post)),
                    imagePosts: imagePosts.map((post) => new ImagePost(post))
                }

                return objectPosts
            })
            .catch((error) => {
                return { error: error.message }
            })
    }
    getPostsCount = () =>{
        return fetch(`http://bitbookapi.azurewebsites.net/api/posts/count`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
            .then(response=> response.json())
    }

    getTextPost = (id) => {
        return fetch(`http://bitbookapi.azurewebsites.net/api/TextPosts/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
            .then((response) => {
                if (response.ok === false) {
                    var error = new Error(response.statusText);
                    throw error
                }

                return response.json()
            })
            .then((postItem) => new TextPost(postItem))
            .catch((error) => {
                return { error: error.message }
            })
    }

    getImagePost = (id) => {
        return fetch(`http://bitbookapi.azurewebsites.net/api/ImagePosts/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
            .then((response) => {
                if (response.ok === false) {
                    var error = new Error(response.statusText);
                    throw error
                }

                return response.json()
            })
            .then((postItem) => new ImagePost(postItem))
            .catch((error) => {
                return { error: error.message }
            })
    }

    getVideoPost = (id) => {
        return fetch(`http://bitbookapi.azurewebsites.net/api/VideoPosts/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
            .then((response) => {
                if (response.ok === false) {
                    var error = new Error(response.statusText);
                    throw error
                }

                return response.json()
            })
            .then((postItem) => new VideoPost(postItem))
            .catch((error) => {
                return { error: error.message }
            })
    }

    getUsers = () => {
        return fetch('http://bitbookapi.azurewebsites.net/api/users', {
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
            .then((response) => {
                if (response.ok === false) {
                    var error = new Error(response.statusText);
                    throw error
                }
                return response.json()
            })
            .then((userList) => userList.map((user) => new User(user)))
            .catch((error) => {
                return { error: error.message }
            })
    }

    getUser = (id) => {
        return fetch(`http://bitbookapi.azurewebsites.net/api/users/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
            .then((response) => {
                if (response.ok === false) {
                    var error = new Error(response.statusText);
                    throw error
                }

                return response.json()
            })
            .then((user) => new User(user))
            .catch((error) => {
                return { error: error.message }
            })
    }

    addNewTextPost = (newTextPost) => {
        return fetch('http://bitbookapi.azurewebsites.net/api/TextPosts', {

            // body: JSON.stringify(newTextPost),
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'POST',
            body: JSON.stringify({
                text: newTextPost
            })
        })
            .then((response) => {
                if (response.ok === false) {
                    var error = new Error(response.statusText);
                    throw error
                }
                return response.json()
            })
            .catch((error) => {
                return { error: error.message }
            })
    }

    addNewImagePost = (newImagePost) => {
        return fetch('http://bitbookapi.azurewebsites.net/api/ImagePosts', {
            // body: JSON.stringify(newImagePost),
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'POST',
            body: JSON.stringify({
                imageUrl: newImagePost
            })
        })
            .then((response) => {
                if (response.ok === false) {
                    var error = new Error(response.statusText);
                    throw error
                }
                return response.json()
            })
            .catch((error) => {
                return { error: error.message }
            })
    }


    addNewVideoPost = (newVideoPost) => {
        return fetch('http://bitbookapi.azurewebsites.net/api/VideoPosts', {
            // body: JSON.stringify(newVideoPost),
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'POST',
            body: JSON.stringify({
                videoUrl: newVideoPost
            })
        })
            .then((response) => {
                if (response.ok === false) {
                    var error = new Error(response.statusText);
                    throw error
                }
                return response.json()
            })
            .catch((error) => {
                return { error: error.message }
            })
    }


    addComment = (data) => {
        return fetch('http://bitbookapi.azurewebsites.net/api/comments', {
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            body: JSON.stringify(data),
            method: 'POST'
        })
            .then((response) => {
                if (response.ok === false) {
                    var error = new Error(response.statusText);
                    throw error
                }
                return response.json()
            })
            .catch((error) => {
                return { error: error.message }
            })
    }

    getComment = (id) => {
        return fetch(`http://bitbookapi.azurewebsites.net/api/comments?postId=${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
            .then((response) => {
                if (response.ok === false) {
                    var error = new Error(response.statusText);
                    throw error
                }
                return response.json()
            })
            .then((comments) => comments.map((comment) => new Comment(comment)))
            .catch((error) => {
                return { error: error.message }
            })
    }


    uploadPhoto = (data) => {
        console.log(data)
        return fetch('http://bitbookapi.azurewebsites.net/api/upload/', {
            headers: {
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94',
            },
            body: data,
            method: 'POST'
        })
            .then((response) => {
                if (response.ok === false) {
                    var error = new Error(response.statusText);
                    throw error
                }
                return response.json()
            })
            .catch((error) => {
                return { error: error.message }
            })
    }

    changeProfile = (data) => {
        return fetch('http://bitbookapi.azurewebsites.net/api/profiles', {
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            body: JSON.stringify(data),
            method: 'PUT'
        })
            .then((response) => {
                if (response.ok === false) {
                    var error = new Error(response.statusText);
                    throw error
                }
                return response
            })
            .catch((error) => {
                return { error: error.message }
            })
    }

    deletePosts = (id) => {
        return fetch(`http://bitbookapi.azurewebsites.net/api/Posts/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbook',
                'SessionId': '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'DELETE'
        })
            .then((response) => {
                if (response.ok === false) {
                    var error = new Error(response.statusText);
                    throw error
                }
                return response.json()
            })
            .catch((error) => {
                return { error: error.message }
            })
    }

}

export const dataServices = new DataServices();