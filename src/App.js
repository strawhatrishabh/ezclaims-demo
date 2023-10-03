import './App.css';
import Header from './component/header/Header';
import Menu from './component/header/menu';
import {Example, Item} from './component/carousel/carousel';
import Claim from './component/claim/claim';

import { useEffect } from 'react';

import { getToken } from 'firebase/messaging';
import { messaging } from './firebase';

function App() {

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if(permission === 'granted') {
      // Generate token
      const token = await getToken(messaging, { vapidKey: 'BJAnDSls58Da8FwnsKWBBJEzlb3JWxYCWWo_MaIh1c2Qqopm_zwElF4YoACBd0jH1JcgvQzkKP3tTB5eztsfPQY' });
      console.log("Token Gen", token)
    } else if (permission === 'denied') {
      // Permission Denied
    }
  };

  useEffect(() => {
    requestPermission();
  }, [])

  return (
    <main>
      <Header/>
      <Menu/>
      <Example/>
      <Claim/>
    </main>
  );
}

export default App;
