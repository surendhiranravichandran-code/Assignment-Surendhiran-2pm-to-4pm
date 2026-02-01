import { useState } from "react";
import Button from "../Buttons/Button";

function Profile() {
  const [profile, setProfile] = useState({
    username: "",
    bio: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", profile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Profile</h2>

      <input
        placeholder="Username"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />

      <textarea
        placeholder="Bio"
        value={profile.bio}
        onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
      />

      <Button type="submit" text="Update" />
    </form>
  );
}

export default Profile;
