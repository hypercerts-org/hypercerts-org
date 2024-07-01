// src/components/MediaItem.js

import React from 'react';

const MediaItem = ({ tags, title, titleLink, authors }) => {
  // Join authors' names with a comma
  const authorsList = authors.map(author => (
    <a 
      key={author.name} 
      href={author.link} 
      target="_blank" 
      className="author-font" 
      rel="noopener noreferrer"
    >
      {author.name}
    </a>
  )).reduce((prev, curr) => [prev, ', ', curr]);

  return (
    <div className="media-item" style={{ padding: '10px' }}>
      <div style={{ marginBottom: '5px' }}>
        {tags.map((tag, index) => (
          <span key={index} className="greyTag" style={{ marginRight: '5px', padding: '2px 5px' }}>
            {tag}
          </span>
        ))}
      </div>
      <a href={titleLink} target="_blank" className="heading-font" rel="noopener noreferrer" style={{ display: 'block', marginBottom: '5px' }}>{title}</a>
      <p style={{ margin: 0 }}>{authorsList}</p>
      <hr style={{ marginTop: '10px' }} />
    </div>
  );
};

export default MediaItem;
