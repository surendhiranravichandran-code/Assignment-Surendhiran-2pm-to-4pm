import React from "react";
import "./ProfileCard.css";

function ProfileCard({ name, role, image, description }) {
  return (
    <div className="profile-card">
      <img src={image} alt={`${name}'s avatar`} className="profile-image" />
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-role">{role}</p>
        <p className="profile-description">{description}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
