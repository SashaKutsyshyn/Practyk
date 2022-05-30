import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const userE = {login:"Login", photo:"mainpage.jpg"};

export default function Home() {
  return (
    <div className='shadow-1 container profile-page'>
        <div className='row'>
            <div className='col-md-6 col-12 personal-info color-1'>
                <img src={'imj/'+ userE.photo} alt='LOGO' className='profile-photo text-center'/>
                <br/>
                <div className='font-ttl text-center'>{userE.login}</div>
                <hr/>
            </div>
            <div className='col-md-6 col-12 personal-lists'>
                А тут буде якась інфа зі списочками. Або не буде. Взагалі, яка різниця?
            </div>
        </div>
    </div>
  )
}