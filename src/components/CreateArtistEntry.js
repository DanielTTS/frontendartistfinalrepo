import React from 'react';
import {Link as RouterLink} from 'react-router-dom';

const CreateArtistEntry=(props)=>{
  const[id, setId]=React.useState(0);
  const[artistName, setArtistName]=React.useState("");
  const[albumName, setAlbumName]=React.useState("");
  const[albumYear, setAlbumYear]=React.useState("");
  const onArtistInput=(e)=>{
    setArtistName(e.target.value);
  }
  const onAlbumInput=(e)=>{
    setAlbumName(e.target.value);
  }
  const onYearInput=(e)=>{
    setAlbumYear(e.target.value);
  }
  const handleCreateClick=(e)=>{
    fetch('http://localhost:8080/artist', {
      method:'post',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        artist: artistName,
        album: albumName,
        year: albumYear
      })
    }).then(()=>{
      props.fetchEntries();
        setArtistName("");
        setAlbumName("");
        setAlbumYear("");
    })
  }

  return(
    <div>
    <h1>Enter artist name, artist album name, album year</h1>
    <input type="text" value={artistName} onChange={onArtistInput} placeholder=" Artist of entry"/>
    <input type="text" value={albumName} onChange={onAlbumInput} placeholder="Album of entry"/>
    <input type="text" value={albumYear} onChange={onYearInput} placeholder="Year of entry"/>
    <RouterLink to="/"><button onClick={handleCreateClick}>Submit</button></RouterLink>
    </div>
  )
}

export default CreateArtistEntry;
