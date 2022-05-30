import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Hosme() {
  return (
    <div className={styles.container}>
        
        <div className="container shadow-1 page-content">
            <div className='row bg-6  font-ttl '><div className='text-center'><br/>Спорядження напоготові!<br/><br/></div></div>

            <div className='row bg-6 color-1 font-ttl'>
                <div className='col-12 col-md-6 bg-bag equipment-plate text-center'>
                    <a className='equipment-butt' href='https://www.rentok.in.ua/?gclid=Cj0KCQjw1ZeUBhDyARIsAOzAqQJqidRkX8rG-MDNoJ45EoymCeIB-Z_xmD1e3tIMl1ZUlI_ziMXyj7kaAip0EALw_wcB'>Cпорядження</a>
                </div>
                <div className='col-12 col-md-6 bg-ordercar equipment-plate text-center'>
                    <a className='equipment-butt' href='https://rozetka.com.ua/ua/sport-i-uvlecheniya/c4627893/'>АвтоКемпер</a>
                </div>
                
            </div>
        </div>

    </div>
  )
}