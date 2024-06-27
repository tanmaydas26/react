import React, { useEffect, useState } from 'react'

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/tanmaydas26')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
  })
  return (
    <div>
      <h1>Github Followers: { data.followers }</h1>
    </div>
  )
}

export default Github
