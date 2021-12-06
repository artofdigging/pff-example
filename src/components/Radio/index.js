import react from 'react';
import styles from './radio.module.css';
import EpisodeTile from '../EpisodeTile';
import ModuleHeader from '../ModuleHeader';

import ruby from '../../images/ruby.png';
import mint from '../../images/mint.png';
import ego from '../../images/ego.png';

const Radio = () => {
  return (
    <div className={styles.radio}>
      <ModuleHeader title="ART OF DIGGIN RADIO" />
      <div className={styles.radioContainer}>
        <EpisodeTile 
          title="Episode 1" 
          description="Ruby Moutain Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
          date="March 29th 2021"
          image={ruby}
        />
        <EpisodeTile 
          title="Episode 2" 
          description="Mint Beats Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
          date="March 30th 2021"
          image={mint}
        />
        <EpisodeTile 
          title="Episode 3" 
          description="Ego Dead Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
          date="March 31st 2021"
          image={ego}
        />
      </div>
    </div>
  )
}

export default Radio;