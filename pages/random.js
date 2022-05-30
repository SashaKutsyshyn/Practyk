import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className='random-page-content shadow-1 container'>
        <div className='row text-center '>
            <div className='col-12 col-md-2'></div>
            <div className='col-md-4 bg-6 col-12 color-1 random-page-plate'>
              <div className='font-ttl'>Куди ж відправитись? </div>
              <br/>
              <div className='random-page-left-discribe'>Використайте новітню систему для того щоб вибрати випадкове нове цікаве місце для відпочинку</div>
              <br/><br/><br/>
              <a className='equipment-butt random-page-btn'>Обрати</a>
            </div>
            <div className='col-md-4 col-5 color-1 random-page-plate'></div>
            <div className='col-12 col-md-2'></div>
        </div>
    </div>
  )
}