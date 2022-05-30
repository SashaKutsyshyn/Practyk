import {dbConnect} from '../utils/dbConnect'
import Link from "next/link"
import fetch from 'isomorphic-unfetch';
import GalleryItem from '../components/GalleryItem';
    
const Gallery = ({placesList}) => {
    console.log({placesList})
  return ( <>
    <div className="container">
      <GalleryItem  placesList={placesList}/>
    </div>
  </> 
  )
}

Gallery.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/places');
  const { data } = await res.json();

  return { placesList: data }
}

export default Gallery;
