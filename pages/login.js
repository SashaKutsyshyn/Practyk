import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='auto shadow-1 container autorisation'>
        <div className='row text-center'>
            <div className='col-12 col-md-1'></div>
            <div className='col-md-5 bg-6 col-12 color-1 auto-page-plate'>
              <form className='margin-top'>
                <label className='font-ttl'>Вхід</label>
                <Link href='\signup'><div className='auto-log-sign-link'>Ще не зараєстровані?</div></Link>
                <br/>
                <input id='email' className='auto-input' placeholder='Електронна пошта'></input>
                <input id='password' className='auto-input' placeholder='Пароль'></input>
                <br/>
                <Link href='\profile'><button className='auto-btn'>Готово</button></Link>

              </form>
            </div>
        </div>
    </div>
  )
}