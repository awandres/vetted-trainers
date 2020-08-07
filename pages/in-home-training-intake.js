import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import InHomeTrainingForm from '../components/inHomeTrainingForm'
import Footer from '../components/footer'

import utilStyles from '../styles/utils.module.css'
import formStyles from '../styles/intake.module.css'
export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>

      </Head>
      <body className={formStyles.body}>


      <section className={formStyles.mainContent}>

        <div className={formStyles.contentContainer}>

          <h2>Fill out the form below and a trainer will reach out to you shortly to follow up with information about our <br /><span className={utilStyles.blue}>In-Home Training Program.</span></h2>

        </div>

<div className={formStyles.formContainer}>
        <InHomeTrainingForm />
</div>

      </section>





<Footer />

      </body>
    </Layout>
  )
}
