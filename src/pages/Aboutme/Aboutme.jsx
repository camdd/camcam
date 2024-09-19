import React from 'react'
import Layout from '../../layouts/Layout'
import { GroupBoxDemo } from '../../components/GroupBox/GroupBox'
import { Anchor } from 'react95'
import { Monitor } from 'react95'
import './Aboutme.css'
export default function Aboutme() {
  return (
    <Layout>
      <GroupBoxDemo label="🪼⋆｡𖦹°🫧⋆.ೃ࿔*: …" >
        <div className='descriptionContent'>
          <div className='descriptionText'>
            I'm an artist and jr web developer from Buenos Aires, Argentina👽
            <br />

            Pronouns: she/they
            <br />

            🔭 I’m currently working on creating projects that aim to make a difference and promote accessibility, especially for neurodivergent individuals.
            <br />

            🌱 I’m always learning new skills and technologies: I study Electronic Arts at UNTREF.
            <br />

            👯 I’m looking to collaborate on innovative projects that can positively impact society.
            <br />

            📫 How to reach me: <Anchor href='https://www.linkedin.com/in/camdambrosio/'> https://www.linkedin.com/in/camdambrosio/ </Anchor>
            <br />

            🎮 Fun fact: In my free time, I enjoy making music and creating illustrations. I also love videogames!
          </div>

          <Monitor backgroundStyles={{ backgroundImage: 'url(src/assets/cato.jpg)', backgroundSize: 'cover', backgroundPosition:'center', backgroundRepeat: 'no-repeat' }} />

        </div>


      </GroupBoxDemo>
    </Layout>
  )
}
