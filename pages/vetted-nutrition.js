import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import HubspotForm from '../components/hubspotForm'
import Link from 'next/link'
import Footer from '../components/footer'

import utilStyles from '../styles/utils.module.css'
import servicesStyles from '../styles/services.module.css'
import homeStyles from '../styles/home.module.css'
export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>Services - Vetted Trainers</title>
        <link rel="canonical" href="https://vettedtrainers.com/services" />

      </Head>
      <body className={servicesStyles.body}>

        <section className={servicesStyles.nutritionBanner}>
          <div className={servicesStyles.nutritionBannerContent}>
            <h1 className={servicesStyles.nutritionHeader}>
Vetted Nutrition</h1>
          </div>

        </section>

        <section className={homeStyles.about}>

          <h1 className={homeStyles.contentHeader}>The Vetted Weight Loss System</h1>

          <hr className={homeStyles.divider} />


          <h2 className={homeStyles.contentHeaderSmall}><span className={utilStyles.blue}>What is The Vetted Weight Loss System?</span></h2>

                    <p className={` ${homeStyles.content} ${homeStyles.centered} `}>A medically supervised program that uses foods that you enjoy and can digest efficiently at the correct times in adequate portions to support healthy lean weight while losing fat.</p>
                    <Link href="/vetted-nutrition-intake">
                    <a className={utilStyles.colorInherit}>
                    <div className={servicesStyles.button}>
                      Let's Talk
                    </div></a>
                    </Link>
                    <br />


                    <h2 className={homeStyles.contentHeaderSmall}><span className={utilStyles.blue}>Why was it Started?</span></h2>

                              <p className={` ${homeStyles.content} ${homeStyles.centered} `}>Our Fitness Family was constantly craving more knowledge about nutrition. We give the people what they want so we have created a system with rules and pictures to help you make good food decisions simple. Now you can stay on track and eat clean at home, on vacation, and even while gallivanting through your local restaurants!</p>
                              <h2 className={homeStyles.contentHeaderSmall}><span className={utilStyles.blue}>How does it Work?</span></h2>

                                        <p className={` ${homeStyles.content} ${homeStyles.centered} `}>You Start with Objective Data. You will be measured to have a starting lean weight, fat weight, and circumference measurements. We use these numbers to set weekly goals and to track progress. We will update these measurements monthly to keep you accountable and moving in the desired direction.</p>

                                        <p className={` ${homeStyles.content} ${homeStyles.centered} `}>You will receive supplements to bridge nutritional gaps and support detoxification mechanisms.</p>

                                        <p className={` ${homeStyles.content} ${homeStyles.centered} `}>You will be part of a supportive community. We will provide daily help with meal choices, timing, and combinations in our exclusive Rate my Plate Group. You take a picture of any meal that you have questions about, post it to the group, and POOF our Director of Nutrition will educate you.</p>
<br />
                                        <Link href="/vetted-nutrition-intake">
                                        <a className={utilStyles.colorInherit}>
                                        <div className={servicesStyles.button}>
                                          Start Now
                                        </div></a>
                                        </Link>

        </section>




        <section className={homeStyles.mail}>
        <div className={homeStyles.overlay}>
          <div>
            <h3>Keep up with your fitness goals</h3>
            <p>Enter your email to join our mailing list and receive the latest training videos, excercises, promotions, and more. </p>


    <HubspotForm />

          </div>

          <div>
          </div>
    </div>
        </section>




<Footer />

      </body>
    </Layout>
  )
}
