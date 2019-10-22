import React from 'react';

const ShowArtistEntry=(props)=>{
  let artistEntryElArr = props.artistEntry.map((entry, index)=>{
    return(
      <ul key={index}>
        <li>Artist: {entry.artistName}</li>
        <li>Album: {entry.albumName}</li>
        <li>Album Release: {entry.albumYear}</li>
      </ul>
    )
  })
  return(
    <div>
      <h1>Show me all the artists and albums</h1>
      {artistEntryElArr}
    </div>
  )
}

export default ShowArtistEntry;
