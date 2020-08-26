import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import HubspotForm from '../components/hubspotForm'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import servicesStyles from '../styles/virtual.module.css'
import formStyles from '../styles/forms.module.css'
import VirtualTrainingForm from '../components/virtualTrainingForm'
import Footer from '../components/footer'


export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>Virtual Training - Vetted Trainers</title>
        <link rel="canonical" href="https://vettedtrainers.com/virtual-training-service" />

      </Head>
      <body className={servicesStyles.body}>

        <section className={servicesStyles.serviceSection}>

        <div className={servicesStyles.iframeContainerLeft}>
  <iframe width="100%" height="515" src="https://www.youtube.com/embed/hbzNT-N01c8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>


          <div className={servicesStyles.serviceContent}>
            <h1 className={servicesStyles.contentHeader}>
      Virtual Training
      </h1>

            <hr className={servicesStyles.divider} />
            <div className={servicesStyles.iframeContainer}>
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/hbzNT-N01c8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

            <p>During these unprecedented times, we need to stay strong and healthy together! Vetted Trainers has been conducting virtual sessions since 2015. We developed this service to keep people healthy who travel for a living and have little access to equipment. We will also tailor make your program with your injuries and physical limitations in mind. It is all about YOU! Whether you’re a professional athlete to a fitness novice, we can create a challenging program and show you how to execute it with precision. Don’t let the quarantine get you down, join our fitness family and use this extra time to invest in the most wonderful thing you own, your body!</p>

            <h2 className={servicesStyles.contentSubhead}>
    How Does it Work?
      </h2>
            <hr className={servicesStyles.divider} />

            <p>After you schedule your first appointment, a program specialist will contact you via email to get a list of equipment that you have and a picture of the space that you will be exercising in. They will ask you a few questions about your goals and any prior injuries. Your program will be created and your Vetted Trainer will take you through it!</p>
            <Link href="/virtual-training-intake">
            <a className={utilStyles.colorInherit}>
            <div className={servicesStyles.button}>
              Go Virtual
            </div></a>
            </Link>
          </div>
        </section>

        <section className={formStyles.mainContent}>

          <div className={formStyles.contentContainer}>

            <h2>Fill out the form below and a trainer will reach out to you shortly to follow up with information about our <span className={utilStyles.blue}>Virtual Training Program.</span></h2>

            <p></p>

          </div>

  <div className={formStyles.formContainer}>
          <VirtualTrainingForm />
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
