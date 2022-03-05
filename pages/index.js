import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import HubspotForm from '../components/hubspotForm'
import Link from 'next/link'
import Footer from '../components/footer'
import Slider from '../components/slider'

import utilStyles from '../styles/utils.module.css'
import homeStyles from '../styles/home.module.css'





export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Vetted Trainers - Home</title>
        <link rel="canonical" href="https://vettedtrainers.com/" />

      </Head>
      <main className={homeStyles.body}>

      <section className={homeStyles.heroBanner}>
      <div className={homeStyles.heroBannerContent}>
        <h1 className={homeStyles.mainHeader}>
        Are you ready to <br />MOVE better, <br />FEEL better, <br />and BE better?
        </h1>
        <p className={homeStyles.subHead}>
        Vetted Trainers are dedicated to the success of our clients and will provide you with the knowledge and guidance to reach your goals!


        </p>
        </div>

    </section>



    <section className={homeStyles.about}>

      <h1 className={homeStyles.contentHeader}>What is Vetted Trainers?</h1>

      <hr className={homeStyles.divider} />

      <p className={` ${homeStyles.content} ${homeStyles.centered} `}>Vetted Trainers is a team of top notch trainers who combine the best of strength training, mobility, and tissue work to optimize your human movement. We also use various modalities (private gym sessions, in home sessions, and virtual sessions) to meet the needs of our clients so you can become stronger and healthier no matter where you are!</p>
<img className={utilStyles.bestOfLogo} src="/images/best-of-frederick.jpg" alt="Woman doing barbell squats in front of a mirror with a personal trainer"/>

        <img src="/images/joel_nicole_squats.jpg" alt="Woman doing barbell squats in front of a mirror with a personal trainer"/>

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



    <section className={homeStyles.servicesContainer}>

<h2 className={homeStyles.contentHeader}>PERSONAL TRAINING SERVICES</h2>
<hr className={homeStyles.divider} />

<div className={homeStyles.services}>
      <div className={homeStyles.singleService}>
        <img src="/images/IMG_5923.jpg" alt="Woman boxing and working out with a trainer at her personal gym"/>
        <h2>Private Gym <br className={homeStyles.breakFix} />Personal Training</h2>
        <hr className={homeStyles.divider} />

        <p>Are you concerned with going to a big commercial gym due to the Covid-19 pandemic? Come train in our appointment only, private gym.</p>

        <Link href="/private-gym-training-intake">
        <a className={utilStyles.colorInherit}>
        <div className={homeStyles.button}>
          Book Now
        </div>
        </a>
        </Link>
      </div>

      <div className={homeStyles.singleService}>
      <img src="/images/VT-36.jpg" alt="Personal trainer helping older woman stretch in-home"/>
      <h2>In Home <br className={homeStyles.breakFix} />Personal Training</h2>
      <hr className={homeStyles.divider} />

      <p>A Vetted Trainer will take you through a workout from the privacy and comfort of your own home. You don't even need any equipment. Stay safe and in shape while you exercise from home!</p>

      <Link href="/in-home-training-intake">
      <a className={utilStyles.colorInherit}><div className={homeStyles.button}>
        Schedule
      </div></a>
      </Link>
      </div>

      <div className={homeStyles.singleService}>
      <img src="/images/VT-33.jpg" alt="Woman excercising virtually with her laptop near a pool" />
      <h2>Virtual <br className={homeStyles.breakFix} />Training</h2>
      <hr className={homeStyles.divider} />

      <p>This is your germ free option! Your Vetted Trainer will remotely take you through a mobility, flexibility, and strength workout.
</p>

<Link href="/virtual-training-intake">
  <a className={utilStyles.colorInherit}><div className={homeStyles.button}>
    Sign Up
    </div></a>
</Link>
      </div>
</div>

    </section>

    <section className={homeStyles.servicesContainer}>

<h2 className={homeStyles.contentHeader}>VETTED NUTRITION</h2>
<hr className={homeStyles.divider} />
<div className={homeStyles.smallContainer}>
<p className={homeStyles.homeText}>Vetted Nutrition Philosophy: We teach people to feed their body and good bacteria in a sustainable way that promotes a healthy gut which promotes fat loss and lean muscle growth.</p>
<Link href="/vetted-nutrition">
  <a className={utilStyles.colorInherit}><div className={homeStyles.button}>
    Learn More
    </div></a>
</Link>
<br />
<img src="/images/G_Vetted Nutrition white clear background.png" className={homeStyles.imgResponsive}></img>
<br />
<br />
</div>


    </section>

    <Slider />



<Footer />



      </main>
    </Layout>
  )
}
