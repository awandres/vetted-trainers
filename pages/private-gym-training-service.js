import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import HubspotForm from '../components/hubspotForm'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import servicesStyles from '../styles/private.module.css'
import formStyles from '../styles/forms.module.css'

import PrivateGymTrainingForm from '../components/privateGymTrainingForm'

export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>

      </Head>
      <body className={servicesStyles.body}>

        <section className={servicesStyles.serviceSection}>

          <div className={servicesStyles.leftImage2} />

          <div className={servicesStyles.serviceContent}>

            <h1 className={servicesStyles.contentHeader}>
    Private Gym<br /> Personal Training
      </h1>
            <hr className={servicesStyles.divider} />

            <p>Are you concerned with going to a big commercial gym due to the Covid-19 pandemic? Come train in our appointment only, private gym. </p>

            <ul>
              <li>Every session will start with myofascial release on a massage table to help prep your tissues for the workout and to help you recover from past injury.</li>
              <li>We use functional equipment like Olympic rings, kettlebells, dumb bells, TRX, and other cutting edge modalities to get you feeling and moving your best!</li>
              <li>We will create a full program for you no matter how many times you train with us a week. Let's say that you need to workout three times a week to achieve your goal, but you only train with us two times a week. We will create a program for you to do on your own for your third day and your trainer can go over any questions that you may have about it when you come in for your sessions.</li>
            </ul>

            <Link href="/private-gym-training-intake">
            <a className={utilStyles.colorInherit}>
            <div className={servicesStyles.button}>
              Sign Me Up
            </div>
            </a>
            </Link>

          </div>
        </section>


        <section className={formStyles.mainContent}>

          <div className={formStyles.contentContainer}>

            <h2>Fill out the form below and a trainer will reach out to you shortly to follow up with information about our <br /><span className={utilStyles.blue}>Private Gym Training Program.</span></h2>

            <p></p>

          </div>

  <div className={formStyles.formContainer}>
          <PrivateGymTrainingForm />
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




        <section className={servicesStyles.footer}>

          <div className={servicesStyles.logo}>
            <img src='/images/vetted-logo.png' />
          </div>

          <div className={servicesStyles.footerContact}>

            <h3>5712 Industry Lane Unit E, Frederick MD, 21703</h3>
            <h3>vettedtrainers@gmail.com</h3>
            <h3>(240)-409-2975</h3>

            <div className={servicesStyles.socialMedia}>
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
