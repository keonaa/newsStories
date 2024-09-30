import React, { useState } from 'react';  
import news_feed from './sample_news_stories.json';  
import Story from '../components/Story/StoryDetails';

function App() {

  const [stories, theStories] = useState(news_feed.results);

  const removeStory = (title) => {
    theStories(stories.filter((story) => story.title !== title));
  };

  return (
    <div className="App">
      <h1>New's Feed</h1>
      {stories.map((story) => (
        <Story key={story.title} story={story} onRemove={removeStory} />
      ))}
    </div>
  );
}

export default App;