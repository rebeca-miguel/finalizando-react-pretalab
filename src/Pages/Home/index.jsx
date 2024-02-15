import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.Full}>
        <div className={styles.Text}>Projete o seu Futuro com a gente!</div>
        <img src="https://media.istockphoto.com/id/1511315040/pt/foto/smile-tablet-and-search-with-black-woman-in-office-for-technology-corporate-and-communication.jpg?s=1024x1024&w=is&k=20&c=dzOLeiXozgj5MDKZJwY2L9u9c0v_z6iJO7GBOwTFIc0=" alt="" className={styles.Img} />
      </div>
      <div className={styles.FullSegunde}>
        <div className={styles.TextSecund}>Esse é o site do projeto final do módulo de React do Ciclo formativo Básico da Pretalab. Projeto desenvolvido em React abordando todos os tópicos vistos durante a aula (Componentes, Props, Estados, Listas e Keys, Hooks, onChange e onClick, Context API em React, React Router DOM imagens e modularização do CSS, TDD).</div>
      </div>
      <div className={styles.Conteiner}>
        <div className={styles.Heder}>Razões para se tornar uma pessoa desenvolvedora</div>
        <div className={styles.Content}>
          <div className={styles.CardHome}>
          <img className={styles.Image} alt='' src='https://cotia.sp.gov.br/public_html/imagens/noticias/346430c8739af96e485403186a9d093c.png'/>
            <div className={styles.TextContent}>
              <div className={styles.Title}>Vagas</div>
              <div className={styles.Desc}>Tecnologia é o mercado que mais cresce no mundo. Estima-se que até 2025, no Brasil, 800 mil vagas de pessoas desenvolvedoras não serão preenchidas por falta de pessoas qualificadas.</div>
            </div>
          </div>
          <div className={styles.CardHome}>
            <img className={styles.Image} src='https://diarioistmo.blob.core.windows.net/images/2023/10/04/salario-minimo-focus-0-0-732-549.jpg' alt=''/>
            <div className={styles.TextContent}>
              <div className={styles.Title}>Salários</div>
              <div className={styles.Desc}>Os salários e benefícios são muito atrativos chegando a valer mais do dobro do salário médio no Brasil, até para pessoas iniciantes ou estagiárias.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
