import styles from './Contacts.module.css'
import Banner from '../../Components/Banner'

export default function Contacts() {
  const hander = (e)=>{
    e.preventDefault();
    e.target[0].value = ""
    e.target[1].value = ""
    e.target[2].value = ""
  }
  return (
    <div className={styles.Contacts}>
      <Banner url="https://etica.ufms.br/files/2013/08/contato.jpg" text="Entre em contato" />
      <div className={styles.content}>
        <form onSubmit={hander} className={styles.Form}>
          <input type="text" className={styles.Input} placeholder='Digite seu nome' />
          <input type="text" className={styles.Input} placeholder='Digite seu Email' />
          <input type="text" className={styles.Input} placeholder='digite sua mensagem' />
          <button type='submit' className={styles.Button}>Enviar mensagem</button>
        </form>
      </div>
    </div>
  )
}
