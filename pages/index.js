import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Slider from '../components/Slider';



export default function Home() {
  return (
    <div className={styles.container}>
      <div className='page-contant main-page text-center shadow-1'>
            <div className='main-page-first-tll'>Compass</div><br/><br/>
            <div className='main-page-second-tll'>Відкрий Україну</div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Link href="/random"><a className='equipment-butt'>Розпочніть Подорож</a></Link>
       </div>

{/*
import Hosme from './equipment.js'    
<div className='App'>
<Hosme/>
</div>

  */}

<div className='slider bg-6 color-1'>
  <br/><br/><br/><br/>
  <div class="slider-line">    
    <hr/>
    <div class="text-line">Вас Вітають Чернівці</div>
      <div className='row'>
        <div className='col-12 col-md-6 text-left'>
          Чернівці́ — адміністративний, політичний і релігійний центр . . . Хіба це все? Звичайно, що ні. Відкрийте для себе одне з найкрасивіших міст Європи, 
          австрійська архітектура, західний колорит, та теплий прийом, не дозволять вам засумувати, ні на хвилину.
        </div>
      <div className='col-12 col-md-6 text-left'>
          <Slider/>
    </div>
  </div>
  </div>
  
  <br/><br/><br/><br/>
  <div class="slider-line">    
    <hr/>
    <div class="text-line">Вас Вітають Чернівці</div>
      <div className='row'>
        <div className='col-12 col-md-6 text-left'>
          Чернівці́ — адміністративний, політичний і релігійний центр . . . Хіба це все? Звичайно, що ні. Відкрийте для себе одне з найкрасивіших міст Європи, 
          австрійська архітектура, західний колорит, та теплий прийом, не дозволять вам засумувати, ні на хвилину.
        </div>
      <div className='col-12 col-md-6 text-left'>
          <Slider/>
    </div>
  </div>


</div>


</div>




    </div>

  )
}
