import React from "react";
import Post from './post';

export default React.createClass({

  _renderPosts() {
    var self = this
    var data = [
      {
        avatarName: 'sam',
        author: 'Sam Soffes',
        content: 'How to Get Inspired: the Right Way - Designmodo <a href="#">bit.ly/1hqgbQA</a> Good stuff from <a href="#">@designmodo</a>!',
        mediaPath: null,
        timeSincePosted: '3m'
      },
      {
        avatarName: 'meg',
        author: 'Meg Robichaud',
        content: 'My view this morning is simply beautiful... <a href="#">instagram.com/p/mV0PUrHRwQ/</a>',
        mediaPath: 'meg-image',
        timeSincePosted: '25m'
      },
      {
        avatarName: 'kerem',
        author: 'Kerem Suer',
        content: '8 Apps to Turn Your Pipe Dreams Into Prototypes <a href="#">on.mash.to/1oubyu8</a>',
        mediaPath: null,
        timeSincePosted: '50m'
      },
      {
        avatarName: 'liang',
        author: 'Liang Shi',
        content: 'How to get animations out of your head. <a href="#">bit.ly/1q7BngO</a> <br /> Funny and useful.',
        mediaPath: null,
        timeSincePosted: '1h'
      }
    ]

    var posts = data.map(function(post, index) {
      return (
        <Post data={ post } key={ index } />
      );
    });

    return posts;
  },

  render() {
    return (
     <section className="posts">
      { this._renderPosts() }
     </section>
    );
  },
});
