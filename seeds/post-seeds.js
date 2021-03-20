const { Post } = require('../models');

const postdata = [
  {
    title: 'MVP...er MVC',
    content: 'Model View Controller. One fat, one short, one lean',
    user_id: 10
  },
  {
    title: 'Postman vs Insomnia',
    content: 'Hello, come again, and good bye, that is what happens during this battle of routes',
    user_id: 8
  },
  {
    title: 'JavaScript and Syntactic Sugar',
    content: 'I feel like old JS coding veterans invented this term b/c they like reading confusing code',
    user_id: 1
  },
  {
    title: 'Blog Post 3',
    content: 'Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. ',
    user_id: 4
  },
  {
    title: 'Blog Post 4ish',
    content: 'Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog.  ',
    user_id: 7
  },
  {
    title: 'CSS features',
    content: 'Flexbox, CSS grid, float. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. ',
    user_id: 4
  },
  {
    title: 'With CSS Grid',
    content: 'You can create responsive periodic tables of elements. You can make tables of data easily especially if the are formatted from a JSON string. Blog blog blog. ',
    user_id: 1
  },
  {
    title: 'What really happens when using Flexbox',
    content: 'If flex-basis is 100% under the wrapper element, the element takes up all available space, forces other elements to stack.',
    user_id: 1
  },
  {
    title: 'Once upon a time...',
    content: 'There was boy who cried April Fools! Then another who cried May Day!',
    user_id: 9
  },
  {
    title: 'HTML for life',
    content: 'Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog.  ',
    user_id: 5
  },
  {
    title: 'Third Party APIs are the bomb heres why',
    content: 'Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog.  ',
    user_id: 3
  },
  {
    title: 'Web API Whoas',
    content: 'Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog.',
    user_id: 10
  },
  {
    title: 'Web API Hell Yeahs',
    content: 'Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog.',
    user_id: 8
  },
  {
    title: 'Server-side APIs',
    content: 'Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog.',
    user_id: 3
  },
  {
    title: 'Project Week',
    content: 'Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog.',
    user_id: 3
  },
  {
    title:
      'Node.js Express.js Sqlite3 MySQL Nodemon dotenv NPM',
      content: 'Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog.',
    user_id: 7
  },
  {
    title: 'Object Oriented Programming',
    content: 'Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog.',
    user_id: 6
  },
  {
    title: 'Express.js Train',
    content: 'Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog.',
    user_id: 4
  },
  {
    title: 'Nobody knows the ORM I\'m in',
    content: 'Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog.',
    user_id: 6
  },
  {
    title: 'Project Week Part 2',
    content: 'Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog. Blog blog blog.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
