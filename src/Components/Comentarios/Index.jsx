import { useEffect } from 'react';
import styles from './Comentarios.module.css'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function Comentarios() {
    const [res, setRes] = useState([])
    const handerSave = async (e)=>{
        e.preventDefault();
        var data = {
            id: uuidv4(),
            text: e.target[0].value
        }
        try {
            const response = await fetch("http://localhost:3000/coment", {
                method: 'POST',
                body: JSON.stringify(data),
            });
            if(response){
                const respo = await fetch("http://localhost:3000/coment");
                const dt = await respo.json();
                setRes(dt)
            }
            e.target[0].value = ""
        } catch (error) {
            alert("Erro ao Deletar!")
        }
    }

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await fetch("http://localhost:3000/coment");
              const data = await response.json();
              setRes(data)
              console.log(data)
            } catch (error) {
              // Trate o erro aqui
            }
          };
          fetchData()
    }, [])

    const Delete = async (id)=>{
        try {
            const response = await fetch(`http://localhost:3000/coment/${id}`, {
                    method: 'DELETE'
                });
            if(response){
                const respo = await fetch("http://localhost:3000/coment");
                const dt = await respo.json();
                setRes(dt)
            }
        } catch (error) {
            alert("Erro ao Deletar!")
        }
    }

    // console.log(cookies)
  return (
    <div className={styles.Comentarios}>
      <form className={styles.Form} onSubmit={handerSave}>
        <input type="text" className={styles.Input} placeholder='Diguite aqui...' />
        <div className={styles.ContButton}>
            <button className={styles.Button}>Salvar</button>
        </div>
      </form>
      <div className={styles.Conteiner}>
        <div className={styles.hath}>

            {res.map((r)=>(
                <div className={styles.Content} key={r.id}>
                    <div className={styles.ContentText}>
                        <div className={styles.Text}>{r.text}</div>
                        <div className={styles.Icon}>
                            <img onClick={()=> Delete(r.id)} className={styles.ImgBacket} src="data:image/png;base64,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" alt="" />
                        </div>
                    </div>
                    <div className={styles.Taco}></div>
                </div>
            ))}

        </div>
      </div>
    </div>
  )
}
