import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import MediaQuery from 'react-responsive'

const name = 'Vetted Trainers'
export const siteTitle = 'Vetted Trainers'
import Footer from './footer'
import Slider from './slider'
import MobileMenu from './mobileMenu'

export default function Layout({ children, home }) {
  return (
    <html lang="en" className={styles.container}>
      <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-169937814-1"></script>

      <script
        dangerouslySetInnerHTML={{
          __html: `

            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-169937814-1');
            `,
        }}
      />
        <link rel="icon" href="/images/vt-favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>


        <meta
          name="description"
          content="Vetted Trainers is a group of personal trainers that give you dedicated workout and training programs to help you achieve your fitness goals."
        />
        <meta
          property="og:image"
          content="http://vettedtrainers.com/images/vt-logo.jpeg"
        />
        <meta
          property="og:image:secure_url"
          content="https://vettedtrainers.com/images/vt-logo.jpeg"
        />
        <meta property="og:title" content="Vetted Trainers" />
        <meta property="og:type" content="website" />

        <meta property="og:description" content="Vetted Trainers is a group of experienced personal trainers that create dedicated workout and training programs to help you achieve your fitness goals." />
        <meta property="og:url" content="https://vettedtrainers.com" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Vetted Trainers" />
        <meta name="twitter:description" content="Personal Training programs tailored to your fitness needs" />
        <meta name="twitter:image" content="http://vettedtrainers.com/images/vt-logo.jpeg" />
        <meta name="twitter:site" content="@TrainersVetted" />
        <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
        <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0095/9894.js" async="async"></script>

      </Head>

      <header className={styles.header}>

      <MobileMenu />


<MediaQuery minDeviceWidth={768}>
        {home ? (
          <>

            <Link href="/" ><img
              src="/images/vetted-logo.png"
              className={`${styles.headerHomeImage} `}
              alt={name}
            /></Link>

            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>Home</a>
              </Link>
            </h2>

            <h2 className={utilStyles.headingLg}>
              <Link href="/services">
                <a className={utilStyles.colorInherit}>Services</a>
              </Link>
            </h2>

            <h2 className={utilStyles.headingLg}>
              <Link href="/join-our-team">
                <a className={utilStyles.colorInherit}>Join Our Team</a>
              </Link>
            </h2>

            <h2 className={utilStyles.headingLg}>
              <Link href="/about-the-owners">
                <a className={utilStyles.colorInherit}>About the Owners</a>
              </Link>
            </h2>

            <h2 className={utilStyles.headingLg}>
              <Link href="/general-training-intake">
                <a className={` ${utilStyles.colorInherit} ${utilStyles.navButton} `}>Request Consultation</a>
              </Link>
            </h2>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/vetted-logo.png"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>

            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>Home</a>
              </Link>
            </h2>


            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>Services</a>
              </Link>
            </h2>



            <h2 className={utilStyles.headingLg}>
              <Link href="/general-training-intake">
                <a className={utilStyles.colorInherit}>Request Consultation</a>
              </Link>
            </h2>
          </>
        )}

        </MediaQuery>
      </header>



      <main>{children}

        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7981288.js"></script>
        <script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Vetted Trainers",
    "url": "https://vettedtrainers.com",
    "address": "5712 Industry Ln unit e, Frederick, MD 21703",
    "sameAs": [
      "https://www.facebook.com/Vettedtrainers/",
      "https://twitter.com/TrainersVetted",
      "https://www.instagram.com/vettedtrainers/",
      "https://www.youtube.com/channel/UCMTekJJglOmXvy3AZGjbQYw"
    ]
  }
</script>
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

    </html>


  )
}
