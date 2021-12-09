const { Post } = require('../models');

const postData = [
  {
    title: 'Twitter is the latest platform to test a TikTok copycat feature',
   content: "Twitter posted today that it’s testing a feature that would turn its in-app explore page into a TikTok-like video feed, complete with even a “For You” tab. This feature is testing on both Android and iOS for users in certain countries who use Twitter in English.",
   author: 5,
  },
  {
    title: 'Kickstarter plans to move its crowdfunding platform to the blockchain',
   content: "Authentication confirms that users are who they say they are. Authorization gives those users permission to access a resource.",
   author: 15,
  },
  {
    title: 'What is Object–relational mapping?',
   content: "Crowdfunding platform Kickstarter is making a big bet on the blockchain, announcing plans to create an open source protocol “that will essentially create a decentralized version of Kickstarter’s core functionality.” The company says the goal is for multiple platforms to embrace the protocol, including, eventually, Kickstarter.com.",
   author: 25,
  },
  {
    title: 'Upmesh closes $7.5M pre-Series A, launches its livestream shopping app for Instagram Live merchants',
   content: "Two months after its seed round announcement, Singapore-based startup Upmesh has raised a $7.7 million pre-Series A round led by Monk’s Hill Ventures. The new funding brings its total raised so far to $10.5 million.  ",
   author: 35,
  },
];

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;