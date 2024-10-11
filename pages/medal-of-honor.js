import Links from "../components/Links";
import styles from '../styles/Home.module.css';

import "../styles/Home.module.css"

export default function MedalOfHonor() {
  return (
    <div className={styles.container}>
      <Links />
      <div className={styles.textContainer}>
        <h1>
          Medal Of Honor Recommendation
        </h1>
        <p>
          For these heroic actions, Major Conran was recommended for the Medal of Honor in 1970. Details of the mission are in the Recommendation for Decoration form submitted by his commanding officer.
        </p>
        <p>
          However, on May 20, 1970, at a ceremony to present an award to Major Conran, Vice Commander Pacific Air Forces Lt. Gen. Lucius D. Clay, Jr. stated that the original Medal of Honor recommendation was initially approved but then downgraded by higher authorities because his classified mission occurred in Laos, which was in violation of the existing Southeast Asia Treaty. He was then awarded the Air Force Cross, which is the highest medal one may receive by the USAF in a small ceremony. If the Medal of Honor had been awarded, it would likely have been presented by the President in a public ceremony at the White House.
        </p>
        <p>
          On July 25, 1969, President Nixon announced his foreign policy which included a statement that the United States would not maintain any troops in Laos. In fact, during a news conference on March 6, 1970, President Nixon reiterated his stance asserting once again that there were no troops and would never be American ground forces in Laos. Obviously, President Nixon was not telling the American public the truth and awarding the Medal of Honor in a public ceremony would have certainly revealed that lie.
        </p>
        <p>
          Despite the undeniable heroism, the Medal of Honor was never awarded to Major Conran.
        </p>
      </div>
    </div>
  )
}
