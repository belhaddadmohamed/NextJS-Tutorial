import React from "react";

interface Profile {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface singleProfileProps {
  params: { id: string }
}

const SingleProfile = async ({ params }: singleProfileProps) => {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const profile: Profile = await res.json();

  if (!res) {
    throw new Error("Failed to fetch data");
  }

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>Email: {profile.email}</p>
      <p>Phone: {profile.phone}</p>
      <p>Website: {profile.website}</p>
    </div>
  );
};

export default SingleProfile;