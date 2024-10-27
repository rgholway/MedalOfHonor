import Links from "../components/Links"
import styles from '../styles/Home.module.css';

function Quotes() {
  return (
    <div className={styles.container}>
      <Links />
      <div className={styles.textContainer}>
        <h1>
          Quotes
        </h1>
        <p>
          In our pursuit of the US Government to reverse their decision, one of the early objections of the USAF Decorations Board was that there were no eye-witnesses. So we set out to find some individuals who were part of the mission or had direct knowledge of it.  Fortunately with the internet and a lot of research, we were able to track down a handful of eye-witnesses even after all these years. We are extremely fortunate that these brave men were willing to share their memories of the mission. Their letters of support are in the documents section of this website and below are a few of their quotes.
        </p>
        <p className={styles.textContainerQuote}>
          “I retired in 2004 after 40 years in CIA special operations, serving in many trouble spots around the world in that time frame. I have seen several acts of the highest level of courage in my career, but none came close to Phil Conran’s actions at Muang Phin. I strongly believe he should have been awarded the Medal of Honor and never understood why he could be awarded the Air Force Cross for actions in Laos and not the Medal of Honor performed in the same country.
        </p>
        <p className={styles.textContainerQuote}>
          I knew I was watching an airman and his crew making what was likely to become their ultimate sacrifice in their attempt to rescue their comrades trapped on the ground. Phil Conran knew

          his chances of surviving were slim. It was an amazing act of courage, without regard to loss of life. I have no doubt that Conran’s actions in the air and on the ground were primary in saving

          those American lives at Moung Phine on October 6, 1969."
        </p>
        <p className={styles.textContainerQuoteBoldRight}>
          Bruce Lehfeldt, CIA Special Operations, Case Officer at Savannakhet, Laos assigned to support Red Battalion
        </p>
        <p className={styles.textContainerQuote}>
          “He could have exited the area because of the extreme high risk and let us fend for ourselves and nobody would have questioned his decision, but he didn’t. I know I lived to see another day because Conran risked his life to save me and my crew.”
        </p>
        <p className={styles.textContainerQuoteBoldRight}>
          Claret D. Taylor, Col USAF (Ret) Aircraft Commander on Knife 61, the first helicopter that was shot down
        </p>
        <p className={styles.textContainerQuote}>
          “It is important to note that if he had not made this spontaneous decision, we would have probably lost those on the ground plus those on board the emergency resource.”
        </p>
        <p className={styles.textContainerQuoteBoldRight}>
          Peter L. Costa, Maj. USAF (Ret) Co-Pilot on Knife 62
        </p>
        <p className={styles.textContainerQuote}>
          “While decisions were being made, Conran continued the ground fight calling in airstrikes around his position, marshalling dwindling munitions and protecting his troops.”
        </p>
        <p className={styles.textContainerQuoteBoldRight}>
          Charles D. Langham, LTC USAF (Ret) aircraft commander of the HH-3 Jolly Green Rescue helicopter driven off by enemy fire
        </p>
        <p className={styles.textContainerQuote}>
          “I witnessed the bravery of Philip J. Conran, throughout the day as he led and fought while wounded and brought back guns, ammunition and other supplies from one of the downed aircraft.

          I still feel I owe my life to [Major Conran] because, before he joined us on the ground, I didn’t think we would survive the day.”
        </p>
        <p className={styles.textContainerQuoteBoldRight}>
          C. Wesley Cossiboom, Door Gunner on Knife 61
        </p>
        <p className={styles.textContainerQuote}>
          “…we marvel at the fact that anybody escaped the trap that the NVA set that day at Moung Phine. His actions in organizing the resistance of the downed troops and directing the firepower of the air support aircraft saved what seemed to me to be a hopeless situation.”
        </p>
        <p className={styles.textContainerQuoteBoldRight}>
          Ken S. Hessel, CIA Savannakhet Air Operations Officer, 10/1/1968 to 10/1/1973
        </p>
      </div>
    </div>
  )
}

export default Quotes
