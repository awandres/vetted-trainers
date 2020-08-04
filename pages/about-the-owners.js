import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import JoinOurTeamForm from '../components/joinOurTeamForm'

import utilStyles from '../styles/utils.module.css'
import ownerStyles from '../styles/owners.module.css'
import Footer from '../components/footer'

export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>

      </Head>
      <body className={ownerStyles.body}>


      <section className={ownerStyles.bioContainer}>

        <div className={ownerStyles.bioContent}>

          <div className={ownerStyles.bioText}>
            <h1>About The Owners</h1>
            <hr className={ownerStyles.divider} />

            <p>Joel and Nicole are a husband and wife fitness super duo! Joel has been ranked as the top trainer on the east coast, brought many people to victory at various competitions, and has over 11 years in personal training experience. Nicole has been coaching gymnastics for 14 years and high school cheerleading and special olympics for 3 years. They met at the gym, but they have many passions outside of fitness. They both love Mexican food (Nicole however, is only interested in the vegetarian options) and traveling to Colorado to spend time with family. Nicole enjoys sewing and designing clothing in her free time, while Joel enjoys learning and comedy.</p>
          </div>

          <img className={ownerStyles.bioImage} src="/images/meet-owners.JPG" />
        </div>

      </section>





<Footer />

      </body>
    </Layout>
  )
}
