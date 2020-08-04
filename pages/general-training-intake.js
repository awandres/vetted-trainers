import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import GeneralTrainingForm from '../components/generalTrainingForm'

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

          <h2>Fill out the form below and a trainer will reach out to you shortly to discuss your fitness goals and create a personalized <br /><span className={utilStyles.blue}>Vetted Training Program</span> <br /></h2>

          <p></p>

        </div>

<div className={formStyles.formContainer}>
        <GeneralTrainingForm />
</div>

      </section>





        <section className={formStyles.footer}>

          <div className={formStyles.logo}>
            <img src='/images/vetted-logo.png' />
          </div>

          <div className={formStyles.footerContact}>

            <h3>5712 Industry Lane Unit E, Frederick MD, 21703</h3>
            <h3>vettedtrainers@gmail.com</h3>
            <h3>(240)-409-2975</h3>

            <div className={formStyles.socialMedia}>
              <img src='/images/yt-red.png' />
              <img src='/images/fb-icon.png' />
              <img src='/images/ig-icon.png' />

            </div>
          </div>

        </section>

      </body>
    </Layout>
  )
}
