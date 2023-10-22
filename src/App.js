import './App.css';
import VideoPlayer from './components/video-player/video-player';
import imagem from './exclusivo.png'
import { FaUnlock } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import Header from './components/header/header';
import ButtonSales from './components/button-sales/button-sales';
import CounterBanner from './components/counte-banner/counter-banner';
import Disclaimer from './components/main-disclaimer/disclaimer';
import SocialProve from './components/social-prove/social-prove';

function App() {
  const [finishTimer, setFinishTimer] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFinishTimer(true)
    }, 1080000)
  }, [])

  return (
    <div className="App">
      <Header>
        <CounterBanner></CounterBanner>
      </Header>
      <Disclaimer></Disclaimer>
      <p className='duracao'>Esse vídeo tem 7 minutos</p>
      <div className='video-container'>
        <VideoPlayer></VideoPlayer>
      </div>
      <div className='description'><FaUnlock className='unlock-icon'/> SEU ACESSO SERÁ LIBERADO NO FINAL DO VÍDEO </div>

      { finishTimer &&
      <ButtonSales></ButtonSales>
      }
      <SocialProve></SocialProve>
      <div className="text-footer-container">
          <div>Copyright 2023 - Códigos Lucrativos <span className="copy">®</span></div>
          <div>Todos os direitos reservador</div>
          <div><a className="terms" href="https://pepper.com.br/termos-de-uso.html">Termos de Uso . Privacidade</a></div>
      </div>
    </div>
  );
}

export default App;
