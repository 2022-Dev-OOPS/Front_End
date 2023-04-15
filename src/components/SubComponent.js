import React from 'react';
import '../css/SubComponent.css';
function SubComponent(props) {
  return (
    <div className="white-box" style={{ width: props.width }}>
        <h2 className="subcomponent-title">{props.title}</h2>
        {props.videoSrc && (
        <video width="200" controls>
          <source src={props.videoSrc} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      )}
      {props.imageSrc &&  <img src={props.imageSrc} alt={props.title} width="90%" height="80%" />}
        <p>{props.description}</p>
    </div>
  );
}

export default SubComponent;