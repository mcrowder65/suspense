import React from "react"

import "./styles.css"
import { fetchProfileData } from "./fakeApi"

const resource = fetchProfileData()

function ProfilePage() {
  return (
    <React.Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails />
      <React.Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfileTimeline />
      </React.Suspense>
    </React.Suspense>
  )
}

function ProfileDetails() {
  // Try to read user info, although it might not have loaded yet
  const user = resource.user.read()
  return <h1 aria-label="the user's name">{user.name}</h1>
}

function ProfileTimeline() {
  // Try to read posts, although they might not have loaded yet
  const posts = resource.posts.read()
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  )
}

export default ProfilePage
