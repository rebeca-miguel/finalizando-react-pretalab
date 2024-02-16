import styles from './Banner.module.css'

export default function Banner({url, text}) {
  return (
    <div className={styles.banner}>
      <div className={styles.text}>{text}</div>
      <img src={url} alt="" className={styles.img} />
    </div>
  )
}
