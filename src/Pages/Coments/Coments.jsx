import styles from './Coments.module.css'
import Banner from '../../Components/Banner'
import Comentarios from '../../Components/Comentarios/Index'

export default function Coments() {
  return (
    <div className={styles.Coments}>
      <Banner url="https://st.depositphotos.com/1008768/4171/i/450/depositphotos_41716609-stock-photo-comments-button.jpg" text="Deixe um comentário" />
      <Comentarios />
    </div>
  )
}
