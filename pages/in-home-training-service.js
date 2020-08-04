import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import HubspotForm from '../components/hubspotForm'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import servicesStyles from '../styles/inHome.module.css'
import formStyles from '../styles/forms.module.css'
import Footer from '../components/footer'

import InHomeTrainingForm from '../components/inHomeTrainingForm'

export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>

      </Head>
      <body className={servicesStyles.body}>

      <section className={servicesStyles.serviceSection}>

        <div className={servicesStyles.leftImage} />

        <div className={servicesStyles.serviceContent}>

          <h1 className={servicesStyles.contentHeader}>
    In-Home<br /> Personal Training
    </h1>
          <hr className={servicesStyles.divider} />

          <p>A Vetted Trainer will take you through a workout from the privacy and comfort of your own home. You don't even need any equipment. Stay safe and in shape while you exercise from home!</p>

          <ul>
            <li>A Vetted Trainer will arrive to your home with a massage table and other equipment necessary for you session</li>
            <li>We will wear masks and gloves and will cater to the client to take further safety measures if asked</li>
            <li>In Home training can take Inside or Outside of your home. You get to decide.</li>
          </ul>

          <Link href="/in-home-training-intake">
          <a className={utilStyles.colorInherit}>
          <div className={servicesStyles.button}>
            I'm Ready
          </div>
          </a>
          </Link>
        </div>
      </section>


        <section className={formStyles.mainContent}>

          <div className={formStyles.contentContainer}>

            <h2>Fill out the form below and a trainer will reach out to you shortly to follow up with information about our <br /><span className={utilStyles.blue}>In-Home Training Program.</span></h2>

            <p></p>

          </div>

  <div className={formStyles.formContainer}>
          <InHomeTrainingForm />
  </div>

        </section>

        <section className={servicesStyles.mail}>
          <div className={servicesStyles.overlay}>
            <div>
              <h3>Keep up with your fitness goals</h3>
              <p>Enter your email to join our mailing list and receive the latest training videos, excercises, promotions, and more. </p>

              <HubspotForm />

            </div>

            <div />
          </div>
        </section>




<Footer />

      </body>
    </Layout>
  )
}
