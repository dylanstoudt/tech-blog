//Import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment')

// Relationship between Users and Posts
User.hasMany(Post, {
    foreignKey: 'user_id'
})

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

// Relationship between Users and Comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

// Relationship between Post and Comment
Post.hasMany(Comment,{
    foreignKey: 'post_id'

})

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
})

module.exports = { User, Post, Comment }