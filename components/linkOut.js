import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import styles from "../styles/Home.module.css"

function LinkOut({ link, linkDescription, text }) {
  return (
    <a target="_blank" href={link} alt={linkDescription} >
      {text}
      <FontAwesomeIcon icon={faDownload} style={{ marginLeft: '8px' }} />
    </a>
  )
}

export default LinkOut
