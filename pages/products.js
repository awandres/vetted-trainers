import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import PrivateGymTrainingForm from '../components/privateGymTrainingForm'
import Footer from '../components/footer'
import Iframe from 'react-iframe'
import formStyles from '../styles/intake.module.css'
import productStyles from '../styles/productStyles.module.css'

export default function Home () {
  return (
    <Layout home>
      <Head>
        <title>Private Gym Form - Vetted Trainers</title>
        <link rel="canonical" href="https://vettedtrainers.com/private-gym-training-intake" />

      </Head>
      <body className={formStyles.body}>


      <section className={formStyles.mainContent}>

        <Iframe url="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=vettedtrainer-20&marketplace=amazon&amp;region=US&placement=B00XM2N06O&asins=B00XM2N06O&linkId=5ba6129f7e2119f617db3459720208f3&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff"
                width="450px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"/>

        <iframe className={productStyles.productIframe} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://www.youtube.com/embed/E7wJTI-1dvQ">            </iframe>


        <iframe className={productStyles.productIframe} marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=qf_sp_asin_til&ad_type=product_link&tracking_id=vettedtrainer-20&marketplace=amazon&amp;region=US&placement=B071P2MQ5D&asins=B071P2MQ5D&linkId=aa6667fd0d7876945e258c2577478c74&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff">
            </iframe>





      </section>





<Footer />

      </body>
    </Layout>
  )
}
