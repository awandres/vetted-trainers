import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import VirtualTrainingForm from '../components/virtualTrainingForm'
import Footer from '../components/footer'

import utilStyles from '../styles/utils.module.css'
import formStyles from '../styles/intake.module.css'
export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>Vetted Nutrition Form - Vetted Trainers</title>
        <link rel="canonical" href="https://vettedtrainers.com/vetted-nutrition-intake" />

      </Head>
      <body className={formStyles.body}>


      <section className={formStyles.mainContent}>

        <div className={formStyles.contentContainer}>

          <h2>Fill out the form below and a specialist will reach out to you shortly to follow up with information about our <span className={utilStyles.blue}>Vetted Weight Loss System.</span></h2>

        </div>

<div className={formStyles.formContainer}>
        <VirtualTrainingForm />
</div>

      </section>





<Footer />

      </body>
    </Layout>
  )
}
