import Links from '../components/Links';
import styles from '../styles/Home.module.css';
import PapaPhilPhoto from "../public/assets/images/youngPhil.jpeg"
import FlightMap from "../public/assets/images/flightmap.png"
import Image from 'next/image';
import LinkOut from '../components/linkOut';

export default function Home() {
  return (
    <div className={styles.container}>
      <Links />
      <div className={styles.contentWrapper}>
        <div className={styles.leftSection}>
          <div className={styles.headerTitle}>Ret. Colonel Philip Conran</div>
          <div className={styles.profileAndText}>
            <Image
              src={PapaPhilPhoto}
              className={styles.containerImageYoungPhil}
              alt="Photo of Philip Conran"
            />
            <div className={styles.textContainer}>
              <div className={styles.textContainerQuoteBlue}>
                "There are no American ground combat troops in Laos."
              </div>
              <p className={styles.textContainerQuoteBoldRight}>
                President Richard Nixon, March 6, 1970
              </p>
              <p>
                Major Philip J. Conran was awarded the Air Force Cross on May 20, 1970, a downgrade from the recommended Medal of Honor. Why was it downgraded? President Nixon certainly did not want to disclose we actually did have American troops in Laos.
              </p>
              <p>
                On October 6, 1969, then USAF Major Philip J. Conran, piloting a CH-3 helicopter in Laos, had
                just minutes to make a critical decision whether to rescue his downed comrades or fly
                safely back to the home base. Fortunately for his comrades on the ground, he chose to
                attempt the rescue even though the heavily armed North Vietnamese combat soldiers were
                waiting. He knew that if he didn’t make the attempt to rescue the men, they had very
                little chance of survival.
              </p>
              <p>
                This website describes in detail one of the largest rescue missions during the Vietnam
                War, occuring in Laos; the heroic efforts of a USAF helicopter pilot risking his life
                to save his comrades; and the pursuit by his family, friends, military veterans, and

                Members of Congress to have the President of the United States reinstate the original recommendation to
                award this pilot with the Congressional Medal of Honor.
              </p>
              <h1 style={{ textAlign: "left" }}>
                How can you help support these efforts? Write to your member of Congress asking for their support of <LinkOut
                  link="/assets/docs/bill9325.pdf"
                  linkDescription="houseBill"
                  text="House Bill 9325."
                  hasDownload={false}
                />
              </h1>
              <Image
                src={FlightMap}
                className={styles.containerImage}
                alt="Photo of Philip Conran"
              />
              <p>US Air Base at Nakon Phanom Royal Thai Air Force Base (NKP) in Thailand was the home base where the US conducted irregular warfare operations along the Ho Chi Minh Trial in Laos. The mission, which included five helicopters left this base and headed south to the Airstrip (LS-235) just north of the city Xeno, where they picked up the Lao soldiers from the Savannakhet SGU Red Battalion and flew to a landing zone at the Moung Phine Airstrip (LS-300).</p>
              <p>
                Moung Phine (spelled now Muang Phin) was a pivotal location along routes 9 and 23 and the Xe Chon River near Xepon (Tchepone), which was a short distance from the Ho Chi Minh Trail. Xepon was a primary transit center between the Ho Chi Minh Trail and route 9 which is only about 25 miles to the South Vietnam border.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.centerText}>
        Copyright © 2024
      </div>
    </div>
  )
}
