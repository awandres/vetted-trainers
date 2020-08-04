import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import HubspotForm from '../components/hubspotForm'
import Link from 'next/link'
import Footer from '../components/footer'

import utilStyles from '../styles/utils.module.css'
import servicesStyles from '../styles/services.module.css'
export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>

      </Head>
      <body className={servicesStyles.body}>

        <section className={servicesStyles.heroBanner}>
          <div className={servicesStyles.heroBannerContent}>
            <h1 className={servicesStyles.mainHeader}>
Services</h1>
          </div>

        </section>

        <section className={servicesStyles.contentBlock}>
          <div className={servicesStyles.contentContainer}>
            <div className={servicesStyles.services}>

            <Link href="/virtual-training-service">
            <a className={utilStyles.colorInherit}>
              <div className={servicesStyles.singleService}>
                <img src='/images/VT-33.jpg' />
                <h2>Virtual Training</h2>
                <hr className={servicesStyles.divider} />

              </div>
              </a>
              </Link>

              <Link href="/private-gym-training-service">
              <a className={utilStyles.colorInherit}>
              <div className={servicesStyles.singleService}>
                <img src='/images/IMG_5923.jpg' />
                <h2>Private Gym Personal Training</h2>
                <hr className={servicesStyles.divider} />

              </div>
              </a>
              </Link>


              <Link href="/in-home-training-service">
              <a className={utilStyles.colorInherit}>
              <div className={servicesStyles.singleService}>
                <img src='/images/VT-36.jpg' />
                <h2>In Home Personal Training</h2>
                <hr className={servicesStyles.divider} />

              </div>
              </a>
              </Link>
            </div>
          </div>

        </section>

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

        <section className={servicesStyles.serviceSectionBlack}>

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
            <Link href='private-gym-training-intake'>
            <a className={utilStyles.colorInherit}>
            <div className={servicesStyles.button}>
              Sign Me Up
            </div>
            </a>
            </Link>
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
