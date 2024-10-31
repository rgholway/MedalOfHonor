import Link from "next/link";
import Links from "../components/Links";
import styles from '../styles/Home.module.css';
import FamilyPhoto from "../public/assets/images/FamilyWithClay.jpeg"
import Image from 'next/image';

function AboutPhil() {
  return (
    <div className={styles.container}>
      <Links />
      <div className={styles.textContainer}>
        <h1>
          The Life of Phil Conran
        </h1>
        <p>
          Retired Colonel Philip J. Conran was born in Hartford, Connecticut and attended Fordham University graduating in 1958. From 1953 – 1958, he served in the Connecticut Air National Guard before joining the ROTC while at Fordham. Upon graduation he embarked on his career in the United States Air Force. He has been married to Margaret (Tierney) Conran, also from Connecticut, for the past 60+ years and has four children (Shane, Patrick, Kelly, Michael), eight grandchildren and one great grandchild. After serving our country for over 30 years in the USAF he and Margaret retired and are living in Santa Barbara, CA.
        </p>
        <p>
          Over his career he was Command Pilot with over 6,500 hours in single and multiengine fixed wing aircraft and helicopters.
        </p>
        <Image
          src={FamilyPhoto}
          className={styles.containerImage}
          alt="Phil Conran Family"
        />
        <div className={styles.bold}>
          USAF Assignments:
        </div>
        <p className={styles.paddingLeft}>
          1958: Lackland AFB, San Antonio, TX. (Preflight training)
        </p>
        <p className={styles.paddingLeft}>
          1959: Spence Air Base, Multrie, GA (Primary flight training – T-34 & T-28)
        </p>
        <p className={styles.paddingLeft}>
          1959-1960: Laredo AFB, TX (Basic flight training – T-33)
        </p>
        <p className={styles.paddingLeft}>
          1960: Stead AFB, NV (Helicopter flight training)
        </p>
        <p className={styles.paddingLeft}>
          1960-62: Selfridge AFB, MI (Rescue helicopter pilot)
        </p>
        <p className={styles.paddingLeft}>
          1962-65: Kindley AFB, Bermuda (Rescue Aircraft Commander)
        </p>
        <p className={styles.paddingLeft}>
          1965-68: Occidental College, CA  AFROTC (Professor of aerospace studies)
        </p>
        <p className={styles.paddingLeft}>
          1968-69: Nakhon Phanom Royal Thai AFB, Thailand (Combat helicopter pilot)
        </p>
        <p className={styles.paddingLeft}>
          1970-73: Hickham AFB, HI  (Group Chief of Standardization & Evaluation)
        </p>
        <p className={styles.paddingLeft}>
          1973-74: Los Angeles AFS, CA (Executive Officer – AF Satellite Control Facility)
        </p>
        <p className={styles.paddingLeft}>
          1974-77: New Boston Satellite Tracking Station, NH (Commander)
        </p>
        <p className={styles.paddingLeft}>
          1977-78: Naval War College, Newport, RI (Senior Service School)
        </p>
        <p className={styles.paddingLeft}>
          1978: Fort Belvoir, VA (Defense Systems Management College – student)
        </p>
        <p className={styles.paddingLeft}>
          1979-81: Hanscom AFB, MA (Director-Physical Security Systems for DOD)
        </p>
        <p className={styles.paddingLeft}>
          1981-82: Eglin AFB, FL (AF Systems Command Director of Inspections)
        </p>
        <p className={styles.paddingLeft}>
          1982-86: Arnold AFB, TN (Commander Arnold Engineering Development Center)
        </p>
        <p className={styles.paddingLeft}>
          1986-88: London, England (Commander – European Office of Aerospace R & D)
        </p>
        <p className={styles.paddingLeft}>
          Retired as a USAF Colonel in 1988.
        </p>
        <p className={styles.bold}>
          Major military words and decorations
        </p>
        <p className={styles.paddingLeft}>
          Air Force Cross: October 6, 1969
        </p>
        <p className={styles.paddingLeft}>
          Legion of Merit and One Oak Leaf Cluster
        </p>
        <p className={styles.paddingLeft}>
          Distinguished Flying Cross and Three Bronze Oak Leaf Clusters
        </p>
        <p className={styles.paddingLeft}>
          The Airman’s Medal: January 19, 1969
        </p>
        <p className={styles.paddingLeft}>
          Purple Heart: October 6, 1969
        </p>
        <p className={styles.paddingLeft}>
          Meritorious Service Medal and Three Oak Leaf Clusters
        </p>
        <p className={styles.paddingLeft}>
          The Air Medal and Seven Oak Leaf Clusters
        </p>
        <p className={styles.paddingLeft}>
          Air Force Commendation Medal and Two Oak Leaf Clusters
        </p>
        <p className={styles.paddingLeft}>
          See here for more complete descriptions: <Link legacyBehavior href={"https://valor.militarytimes.com/hero/3605"}>
            <a target="_blank" rel="noopener noreferrere">Military Times</a>
          </Link>
        </p>
        <p className={styles.bold}>
          Education
        </p>
        <p className={styles.paddingLeft}>
          BS Degree - Fordham University, 1958
        </p>
        <p className={styles.paddingLeft}>
          MBA Degree - New Hampshire College, 1977
        </p>
        <p className={styles.paddingLeft}>
          Squadron Officers and Command and Staff Schools by correspondence. 1963 and 1971
        </p>
        <p className={styles.paddingLeft}>
          Naval War College in residence at Newport, RI. 1978
        </p>
      </div>
    </div>
  )
}

export default AboutPhil
