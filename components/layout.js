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

        <link rel="icon" href="/images/vt-favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            <!-- Google Tag Manager -->
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MVFMXQT');</script>
            <!-- End Google Tag Manager -->
              `,
          }}
        />

        <meta
          name="description"
          content="Vetted Trainers is a group of personal trainers that give you dedicated workout and training programs to help you achieve your fitness goals."
        />
        <meta
          property="og:image"
          content={`https://ibb.co/2F4Dtpp`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
        <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0095/9894.js" async="async"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-170273689-1"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-170273689-1');
</script>
              `,
          }}
        />
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
      <script
        dangerouslySetInnerHTML={{
          __html: `
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MVFMXQT"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            `,
        }}
      />
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/7981288.js"></script>
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
