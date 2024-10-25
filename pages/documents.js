import Links from "../components/Links"
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import LinkOut from "../components/linkOut";
import Link from "next/link";

function Documents() {
  return (
    <div className={styles.container}>
      <Links />
      <div className={styles.textContainer}>
        <h1>
          Documents
        </h1>
        <p>
          Below are a variety of articles and letters that tell the story of this mission in Laos during the Vietnam War and the support from Government Officials, eye-witnesses, and family and friends.
        </p>
        <div className={styles.documentGrid}>
          <LinkOut
            link="/assets/docs/OriginalMoh.pdf"
            linkDescription="Original citation of medal"
            text="Original MOH Citation 1970"
          />
          <LinkOut
            link="/assets/docs/airforcecross.pdf"
            linkDescription="Air Force Cross"
            text="Philip Conran Air Force Cross Citation"
          />
          <LinkOut
            link="/assets/docs/bill9325.pdf"
            linkDescription="House Bill"
            text="House Bill 9325 – Introduced August 2024"
          />
          <LinkOut
            link="/assets/docs/survivetrap.pdf"
            linkDescription="Letter to Congress"
            text="Surviving the Trap, Air Commando Journal Article – Volume 12: Issue 3 2024"
          />
          <LinkOut
            link="/assets/docs/letterCongress.pdf"
            linkDescription="Letter to Congress"
            text="Letter to Secretary of Defense – Senator Blumenthal, Senator Padilla, Senator Butler, Congressman Carbajal, April 9, 2024"
          />
          <LinkOut
            link="/assets/docs/honringhero.pdf"
            linkDescription="Letter to Congress"
            text="Honoring an American Hero – The Hartford Courant by Barry Barnett"
          />
          <LinkOut
            link="/assets/docs/MOH2023.pdf"
            linkDescription="Letter to Congress"
            text="Letter to Secretary of the Air Force – By Conran Children, May 29, 2023"
          />
          <LinkOut
            link="/assets/docs/carbajalletter.pdf"
            linkDescription="Carbahal letter"
            text="Letter to Secretary of the Air Force – Congressman Carbajal"
          />
          <LinkOut
            link="/assets/docs/dpaustin.pdf"
            linkDescription="Dennis letter"
            text="Letter to Secretary of Defense – By Dennis Peterson, Jan 11, 2023 "
          />
          <LinkOut
            link="/assets/docs/dp2022.pdf"
            linkDescription="Dennis letter"
            text="Letter to Secretary of the Air Force – By Dennis Peterson, April 13, 2022"
          />
          <LinkOut
            link="/assets/docs/dp2021.pdf"
            linkDescription="Dennis letter"
            text="Letter to Secretary of the Air Force – By Dennis Peterson, October, 19 2021"
          />
          <LinkOut
            link="/assets/docs/dpgeneralbrown.pdf"
            linkDescription="Dennis letter"
            text="Letter to Chief of Staff USAF – By Dennis Peterson, May 25, 2021"
          />
          <LinkOut
            link="/assets/docs/ConranLOV.pdf"
            linkDescription="Dennis letter"
            text="Legion of Valor History Project – Ian Holmes August 30, 2018"
          />
          <LinkOut
            link="/assets/docs/mesaliving.pdf"
            linkDescription="Dennis letter"
            text="The Mesa Living - July 2021"
          />
        </div>
        <h1>
          Eye-Witness Letters of Support
        </h1>
        <div className={styles.documentGrid}>
          <LinkOut
            link="/assets/docs/clarettaylor.PDF"
            linkDescription="Dennis letter"
            text="Claret D. Taylor, Colonel USAF (Ret)"
          />
          <LinkOut
            link="/assets/docs/wesleyeyewitness.pdf"
            linkDescription="Dennis letter"
            text="C. Wesley Cossiboom, Door Gunner on Knife 61 (Ret)"
          />
          <LinkOut
            link="/assets/docs/petercosta.pdf"
            linkDescription="Dennis letter"
            text="Peter Costa, Major USAF (Ret)"
          />
          <LinkOut
            link="/assets/docs/charleslangham2018.pdf"
            linkDescription="Dennis letter"
            text="Charles D. Langham, LTC USAF (Ret)"
          />
          <LinkOut
            link="/assets/docs/kenhessel.pdf"
            linkDescription="Dennis letter"
            text="Ken S. Hessel, CIA Air Operations (Ret)"
          />
          <LinkOut
            link="/assets/docs/BruceLehfeldt2023.pdf"
            linkDescription="Dennis letter"
            text="Bruce Lehfeldt, CIA Special Operations (Ret)"
          />
        </div>
        <h1>
          Web Links
        </h1>
        <div className={styles.documentGrid}>
          <Link legacyBehavior href={"https://www.youtube.com/watch?v=m_Wo9FmzNUg"}>
            <a target="_blank" rel="noopener noreferrere">The Trap: How a U.S. Air Force Pilot’s Heroics Overcame a North Vietnamese Ambush by Dr. Paul T. Carter PhD Thai Studies</a>
          </Link>
          <Link legacyBehavior href={"https://legionofvalor.org/?s=conran"}>
            <a target="_blank" rel="noopener noreferrere">The Legion of Valor</a>
          </Link>
          <Link legacyBehavior href={"https://www.govtrack.us/congress/bills/118/hr9325/text"}>
            <a target="_blank" rel="noopener noreferrere">House Bill 9325</a>
          </Link>
          <Link legacyBehavior href={"https://www.youtube.com/watch?v=okqSkQZHP9Y&t=2100s&ab_channel=NewsChannel3-12"}>
            <a target="_blank" rel="noopener noreferrere">Veterans Day Speech 2023</a>
          </Link>
          <Link legacyBehavior href={"https://www.airandspaceforces.com/Congressman-Leads-Push-to-Upgrade-Special-Ops-Helo-Pilots-Air-Force-Cross-to-MOH/"}>
            <a target="_blank" rel="noopener noreferrere">Congressman Leads Push to Upgrade Special Ops Helo Pilot’s Air Force Cross to MOH</a>
          </Link>
          <Link legacyBehavior href={"https://www.airforcetimes.com/news/your-air-force/2019/04/17/should-this-airman-receive-the-medal-of-honor-for-laos-battle-a-congressman-thinks-so/"}>
            <a target="_blank" rel="noopener noreferrere">Should this Airman receive the Medal of Honor for Laos battle? A congressman thinks so</a>
          </Link>
          <Link legacyBehavior href={"https://www.mcclatchydc.com/news/nation-world/national/national-security/article58652478.html"}>
            <a target="_blank" rel="noopener noreferrere">Congresswoman Champions Medal of Honor for Vietnam Vet who fought in Laos</a>
          </Link>
          <Link legacyBehavior href={"https://www.defensemedianetwork.com/stories/should-air-force-col-philip-j-conran-receive-the-medal-of-honor/"}>
            <a target="_blank" rel="noopener noreferrere">Should Air Force Col. Philip J. Conran Receive the Medal of Honor?  DefenseMediaNetwork</a>
          </Link>
          <Link legacyBehavior href={"http://www.veterantributes.org/TributeDetail.php?recordID=445"}>
            <a target="_blank" rel="noopener noreferrere">Veteran Tributes Honoring Those Who Served</a>
          </Link>
        </div>
        <p>

        </p>
      </div>
    </div>
  )
}

export default Documents
