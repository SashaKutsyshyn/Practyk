import React from "react";
import Link from "next/link"

function Navbar ()
{
    return (
            <div className="container navbar-styled">
                <div className="row">
                <div className="col-md-2">
               
                            {/*<div className=" logo"><img src='/logo.png' alt='LOGO' className="logo navbar-img"/></div>*/}
                            <div className=" logo logo-text">Compass</div><div className="logo logo-second-text"><p>Відкрий Україну по-новому</p></div>
        
                </div>
                <div className="col-md-5"></div>
                <div className="col-md-1"> <Link href="/"><div className="navbar-item">Головна</div></Link></div>
                <div className="col-md-1"><Link href="/random"><div className="navbar-item">Куди поїхати?</div></Link></div>
                <div className="col-md-1"><Link href="/gallery"><div className="navbar-item">Каталог</div></Link></div>
                <div className="col-md-1"><Link href="/equipment"><div className="navbar-item">Спорядження</div></Link></div>
                <div className="col-md-1"><Link href="/signup"><div className="navbar-item">Профіль</div></Link></div>
                </div>
                <div className="row"><hr/></div>
            </div>
    );
}

export default Navbar;