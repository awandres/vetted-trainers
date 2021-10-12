import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import JoinOurTeamForm from '../components/joinOurTeamForm'
import Footer from '../components/footer'

import trainers from '../styles/trainers.module.css'
import joinStyles from '../styles/join.module.css'
export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>Meet The Trainers - Vetted Trainers</title>
        <link rel="canonical" href="https://vettedtrainers.com/meet-the-trainers" />

      </Head>
      <body className={joinStyles.body}>



      <section className={joinStyles.mainContent}>

        <div className={joinStyles.contentContainer}>
        <div className={trainers.flexContainer}>
              <div className={trainers.flexRow}>
                <div className={trainers.flexCol}>
                <img className={trainers.bioImage} src="/images/Joey_VT_Trainer.jpg" />
                <h2>Joey</h2>
                </div>
                <div className={trainers.flexCol}>
                <img className={trainers.bioImage} src="/images/Jose_VT_Trainer.jpg" />
                <h2>Jose</h2>
                </div>
                <div className={trainers.flexCol}>
                <img className={trainers.bioImage} src="/images/Kade_VT_Trainer.jpg" />
                <h2>Kade</h2>
                </div>
                </div>
                <div className={trainers.flexRow}>

                <div className={trainers.flexCol}>
                <img className={trainers.bioImage} src="/images/Mike_VT_Trainer.jpg" />
                <h2>Mike</h2>
                </div>
                <div className={trainers.flexCol}>
                <img className={trainers.bioImage} src="/images/Nick_VT_Trainer.jpg" />
                <h2>Nick</h2>
                </div>
                <div className={trainers.flexCol}>
                <img className={trainers.bioImage} src="/images/Tim_VT_Trainer.jpg" />
                <h2>Tim</h2>
                </div>
                </div>

            </div>
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
