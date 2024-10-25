import Links from '../components/Links';
import styles from '../styles/Home.module.css';
import PapaPhilPhoto from "../public/assets/images/PapaPhilPhoto.png"
import FlightMap from "../public/assets/images/flightmap.png"
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Links />
      <div className={styles.textContainer}>
        <Image
          src={PapaPhilPhoto}
          className={styles.containerImage}
          alt="Photo of Philip Conran"
        />
        <h1>Ret. Colonel Philip Conran</h1>
        <p>
          This site describes a rescue mission in Laos during the Vietnam War, the heroic efforts of a USAF helicopter pilot risking his life to save his comrades, and the pursuit by his family, friends, and members of Congress to have the President of the United States reinstate the original recommendation to award this pilot with the Congressional Medal of Honor.
        </p>
        <p>
          How can you help support these efforts? Write to your Congressman asking for their support of House Bill 9325.
        </p>
        <Image
          src={FlightMap}
          className={styles.containerImage}
          alt="Photo of Philip Conran"
        />
        <p>US Air Base at Nakon Phanom Royal Thai Air Force Base (NKP) in Thailand was the home base where the US conducted irregular warfare operations along the Ho Chi Minh Trial in Laos. The mission, which included five helicopters left this base and headed south to the Airstrip (LS-235) just north of the city Xeno, where they picked up the Laotian troops from the Savannakhet SGU Red Battalion and flew to a landing zone at the Moung Phine Airstrip (LS-300).</p>
        <p>
          Moung Phine (spelled now Muang Phin) was a pivotal location along routes 9 and 23 and the Xe Chon River near Xepon (Tchepone), which was a short distance from the Ho Chi Minh Trail. Xepon was a primary transit center between the Ho Chi Minh Trail and route 9 which is only about 25 miles to the South Vietnam border.
        </p>
      </div>
    </div>
  )
}
