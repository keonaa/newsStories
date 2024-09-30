import React from "react";
import './story.css';


const Story = ({ story, onRemove }) => {
  return (
    <div className="story">
        <div className="content">
            <div className="photo">
                <img src={story.image_url || "https://placehold.co/300x200?text=place+holder"} alt={story.title} />
            </div>
            <div className="info">
                <div className="newsTitle">
                    <h2>{story.title}</h2>
                </div>
                <div className="text">
                    {story.creator && <h4>By: {story.creator}</h4>}
                    <a href={story.link} target="_blank" rel="noopener noreferrer">
                    Read More
                    </a>
                    <p>{story.description ? story.description.slice(0, 130) + (story.description.length > 100 ? " ..." : "") : "No description available"}</p>
                </div>
            </div>
            <div className="buttonContainer">
                        <button onClick={() => onRemove(story.title)}>x</button>
            </div>
        </div>
    </div>
  );
};  

export default Story;