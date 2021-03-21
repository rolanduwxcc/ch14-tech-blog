const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// post belongs to user fk userId onDelete cascade
// post hasmany comment fk postId onDelete cascade
// comment belongs to user fk userId onDeletecascade

//Association creation
User.hasMany(Post, { 
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});






module.exports = { User, Post, Comment };