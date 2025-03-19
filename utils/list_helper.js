const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    var likes = blogs.reduce((sum,blog) => sum+blog.likes, 0)
    return likes
}

const favoriteBlog = (blogs) => {
    var favourite = blogs.reduce((best, current) => {
        return best.likes > current.likes 
            ? best 
            : current
    }, {likes: -1})

    return favourite.likes === -1
        ? {}
        : favourite
}



const mostBlogs = (blogs) => {

    var allAuthours = blogs.reduce((authours, blog) => {
        let authour = authours.find(authour => authour.author == blog.author) || null;
 
        if(!authour){
            authour = {author: blog.author, blogs: 1}
            authours.push(authour)
        }else{
            authour.blogs = authour.blogs + 1
        }
        return authours
    }, [])

    return allAuthours.reduce((best, current) => best.blogs>current.blogs ? best : current, {})

}
const mostLikes = (blogs) => {

    var allAuthours = blogs.reduce((authours, blog) => {
        let authour = authours.find(authour => authour.author == blog.author) || null;
 
        if(!authour){
            authour = {author: blog.author, likes: blog.likes}
            authours.push(authour)
        }else{
            authour.likes = authour.likes + blog.likes
        }
        return authours
    }, [])

    return allAuthours.reduce((best, current) => best.likes>current.likes ? best : current, {})
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}

