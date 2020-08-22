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
        <title>{siteTitle}</title>

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

//     <section className={homeStyles.contentBlock}>
//       <div className={homeStyles.contentContainer}>
//         <h1 className={homeStyles.contentHeader}>
//           Vetted Trainers<span> Virtual Training</span>
//           </h1>
//
//       <hr className={homeStyles.divider} />
//
//       <p className={` ${homeStyles.content} ${homeStyles.centered} `}>We have deployed our new virtual training program so you can have a personalized training program right from your own home!</p>
//       <div className={homeStyles.iframeContainer}>
// <iframe width="100%" height="315" src="https://www.youtube.com/embed/hbzNT-N01c8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// </div>
//
//     <Link href="/virtual-training-intake">
//       <a className={utilStyles.colorInherit}>
//       <div className={homeStyles.button}>
//         Go Virtual
//       </div></a>
//     </Link>
//
//
//       </div>
//     </section>

    <section className={homeStyles.about}>

      <h1 className={homeStyles.contentHeader}>What is Vetted Trainers?</h1>

      <hr className={homeStyles.divider} />

      <p className={` ${homeStyles.content} ${homeStyles.centered} `}>Vetted Trainers is a team of top notch trainers who combine the best of strength training, mobility, and tissue work to optimize your human movement. We also use various modalities (private gym sessions, in home sessions, and virtual sessions) to meet the needs of our clients so you can become stronger and healthier no matter where you are!</p>


        <img src="/images/joel_nicole_squats.jpg" />

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
        <img src="/images/IMG_5923.jpg" />
        <h2>Private Gym Personal Training</h2>
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
      <img src="/images/VT-36.jpg" />
      <h2>In Home Personal Training</h2>
      <hr className={homeStyles.divider} />

      <p>A Vetted Trainer will take you through a workout from the privacy and comfort of your own home. You don't even need any equipment. Stay safe and in shape while you exercise from home!</p>

      <Link href="/in-home-training-intake">
      <a className={utilStyles.colorInherit}><div className={homeStyles.button}>
        Schedule
      </div></a>
      </Link>
      </div>

      <div className={homeStyles.singleService}>
      <img src="/images/VT-33.jpg" />
      <h2>Virtual Training</h2>
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

    <Slider />



<Footer />



      </main>
    </Layout>
  )
}
