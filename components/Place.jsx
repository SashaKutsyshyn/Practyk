import React from "react";

function Place (props)
{
    return (<div className="container place-styled">

        <div className="row">
            <h1 className="place-page-ttl">{props.place.name}</h1>
            <div className="row">
                <div className="col-12"><hr/></div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 place-page-info">{props.place.infoShort}</div>
            <div className="col-md-8">
                <img src={props.place.mainPhoto} alt="" className="place-page-img"/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-2"><hr/></div>
            <div className="col-md-1 place-page-ttl">Деталі</div>
            <div className="col-md-9"><hr/></div>
        </div>
        <div className="row">
            <div className="col-md-4 place-page-info">{props.placeMore.infoLong}</div>
            <div className="col-md-8"></div>
        </div>
        <div className="row">
            <div className="col-md-2"><hr/></div>
            <div className="col-md-2 place-page-ttl">Розташування</div>
            <div className="col-md-8"><hr/></div>
        </div>
        <div className="row">
            <div className="col-md-4 place-page-info">
                <br/>
                {props.placeMore.region}
                <br/>
                {props.placeMore.adress}
            </div>
            <div className="col-md-8">
                
            </div>
        </div>
        

    </div>);
}

export default Place; 