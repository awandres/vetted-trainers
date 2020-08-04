import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import JoinOurTeamForm from '../components/joinOurTeamForm'
import Footer from '../components/footer'

import utilStyles from '../styles/utils.module.css'
import joinStyles from '../styles/join.module.css'
export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>

      </Head>
      <body className={joinStyles.body}>

        <section className={joinStyles.heroBanner}>
          <div className={joinStyles.heroBannerContent}>
            <h1 className={joinStyles.mainHeader}>
Join Our Team</h1>
          </div>

        </section>


      <section className={joinStyles.mainContent}>

        <div className={joinStyles.contentContainer}>

          <h2>Do you have a passion for fitness? A drive to help others realize their health goals? Become a Vetted Trainer and start doing the work you love</h2>

          <p>We are looking for motivated trainers that are willing to learn and ready to be successful. </p>

          <ul>
            <li>Competitive compensation</li>
            <li>Flexible Hours</li>
            <li>We provide the knowledge and programming to take your training and your clients results to the next level</li>
          </ul>
        </div>

<div className={joinStyles.formContainer}>
        <JoinOurTeamForm />
</div>

      </section>





<Footer />

      </body>
    </Layout>
  )
}
