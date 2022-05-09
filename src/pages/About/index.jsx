import React from 'react'

import styles from "./About.module.css";
function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About</h1>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reiciendis aliquid culpa aut commodi velit voluptatibus magni, tenetur laboriosam vitae optio eius repellendus dolor minima a architecto nesciunt harum odit!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime in cumque totam corrupti commodi nihil aspernatur debitis perferendis? Possimus tenetur molestias amet iure quia perferendis dolorum, obcaecati eum ab vero.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo optio enim neque laboriosam natus sequi assumenda suscipit quisquam? Quisquam aut unde nesciunt cum, doloremque culpa sapiente dolor eos hic eius!
        </p>
      </div>
      
    </div>
  )
}

export default About