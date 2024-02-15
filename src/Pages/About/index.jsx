import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.About}>
      <div className={styles.Container}>
        <div className={styles.WidthContent}>
          <div className={styles.Header}>Escreva sobre você!!!</div>
          <img className={styles.Img} src="https://static.vecteezy.com/ti/vetor-gratis/p3/2002247-icone-de-avatar-de-mulher-negra-bonita-gratis-vetor.jpg" alt="" />
          <div className={styles.Name}>Rebeca Gaspar Miguel Miguel</div>
          <div className={styles.Cargo}>Desenvolvedora Front-End</div>
          <div className={styles.Desc}>Sou a Rebeca Gaspar Miguel, angolana residente em São Paulo. Sou formada em Administração Pública pela Universidade Federal UNILAB. Tenho formação em Programação Back End pela Toti e estou em fase de transição de carreira. Atualmente estou cursando desenvolvimento Front-End na instituiçao Pretalab.</div>
        </div>
      </div>
      <div className={styles.ContainerDash}>
        <div className={styles.Hath}>
          <img className={styles.ImgDash} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyTeHnidtugtttTcp467U3iITVOI9FoghzA&usqp=CAU" alt="" />
          <div className={styles.DescDash}>Este guia estruturado direciona as devas desde os conceitos básicos até as nuances avançadas do React, proporcionando uma compreensão abrangente da biblioteca.</div>
        </div>
      </div>
      <div className={styles.ContainerVideo}>
        <div className={styles.HathVideo}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_7mJDIFYe0o?si=O5I02EGXebMMMpEZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <div className={styles.DescVideo}>Aprenda com as duas Amandas a deixar seu Linkedin potente como você!!!</div>
        </div>
      </div>
    </div>
  )
}
