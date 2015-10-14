import React from "react";

export default React.createClass({
  render() {
    return (
     <section className="posts">
      <div className="post">
        <img src={ require('./img/avatars/sam.png') } className="avatar" />
        <div className="content">
          <h2>Sam Soffes</h2>
          <p>
            How to Get Inspired: the Right Way - Designmodo <a href="#">bit.ly/1hqgbQA</a> Good stuff from <a href="#">@designmodo</a>!
          </p>
          <a href="#" className="expand">Expand</a>
        </div>
        <div className="meta">
          <ul>
            <li><a href="#" className="reply"></a></li>
            <li><a href="#" className="like"></a></li>
            <li><a href="#">3m</a></li>
          </ul>
        </div>
      </div>
      <div className="post has-media">
        <img src={ require('./img/avatars/meg.png') } className="avatar" />
        <div className="content">
          <h2>Meg Robichaud</h2>
          <p>
            My view this morning is simply beautiful... <a href="#">instagram.com/p/mV0PUrHRwQ/</a>
          </p>
        </div>
        <div className="meta">
          <ul>
            <li><a href="#" className="reply"></a></li>
            <li><a href="#" className="like"></a></li>
            <li><a href="#">25m</a></li>
          </ul>
        </div>
        <div className="media">
          <img src={ require('./img/meg-image.png') } />
        </div>
      </div>
      <div className="post">
        <img src={ require('./img/avatars/kerem.png') } className="avatar" />
        <div className="content">
          <h2>Kerem Suer</h2>
          <p>
            8 Apps to Turn Your Pipe Dreams Into Prototypes <a href="#">on.mash.to/1oubyu8</a>
          </p>
        </div>
        <div className="meta">
          <ul>
            <li><a href="#" className="reply"></a></li>
            <li><a href="#" className="like"></a></li>
            <li><a href="#">50m</a></li>
          </ul>
        </div>
      </div>
      <div className="post">
        <img src={ require('./img/avatars/liang.png') } className="avatar" />
        <div className="content">
          <h2>Liang Shi</h2>
          <p>
            How to get animations out of your head. <a href="#">bit.ly/1q7BngO</a> <br /> Funny and useful.
          </p>
        </div>
        <div className="meta">
          <ul>
            <li><a href="#" className="reply"></a></li>
            <li><a href="#" className="like"></a></li>
            <li><a href="#">1h</a></li>
          </ul>
        </div>
      </div>
     </section>
    );
  },
});
