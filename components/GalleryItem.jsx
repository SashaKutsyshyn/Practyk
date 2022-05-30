import React from "react";
import Link from "next/link"

function GalleryItem (props)
{
    return (
          <div className="row">
              {
                  props.placesList.map((place) =>   
                  <div className="col-12 col-md-6 padding-0" key="place._id">
                    <Link href={`/places/${place._id}`} place={place}> 
                    <div id={place.__id} className="container gallery-page-item margin-0">
                        <div className="row">
                            <div className="col-12">
                                <div style={{ backgroundImage: `url(${place.mainPhoto})`}} className="gallery-page-photo">
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="gallery-page-item-ttl">
                                    {place.name}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                  </div>
                 
                 
                  )
              }
          </div>
    );
}

export default GalleryItem;