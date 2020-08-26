import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import GeneralTrainingForm from '../components/generalTrainingForm'
import Footer from '../components/footer'

import utilStyles from '../styles/utils.module.css'
import formStyles from '../styles/intake.module.css'
export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>Request Consultation - Vetted Trainers</title>
        <link rel="canonical" href="https://vettedtrainers.com/general-training-intake" />

      </Head>
      <body className={formStyles.body}>


      <section className={formStyles.mainContent}>

        <div className={formStyles.contentContainer}>

          <h2>Fill out the form below and a trainer will reach out to you shortly to discuss your fitness goals and create a personalized <br /><span className={utilStyles.blue}>Vetted Training Program</span> <br /></h2>

          <p></p>

        </div>

<div className={formStyles.formContainer}>
        <GeneralTrainingForm />
</div>

      </section>





<Footer />

      </body>
    </Layout>
  )
}
