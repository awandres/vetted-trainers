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
        <link rel='canonical' href='https://vettedtrainers.com/private-gym-training-intake' />

      </Head>
      <body className={formStyles.body}>

        <section className={productStyles.mainContent}>

          <div className={productStyles.productContainer}>

            <div className={productStyles.productRow}>
              <div className={productStyles.productCol}>
                <a target='_blank' href='https://www.amazon.com/gp/product/B07T29CWVQ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07T29CWVQ&linkCode=as2&tag=vettedtrainer-20&linkId=487386fc6db41c0b43d9fbe490265e6b'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07T29CWVQ&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=vettedtrainer-20' /></a>
                <a target='_blank' href='https://www.amazon.com/gp/product/B07T29CWVQ/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07T29CWVQ&linkCode=as2&tag=vettedtrainer-20&linkId=ace497cf51b540835b86220033ba9e46'>Yansyi Muscle Roller Stick for Athletes - Body Massage Roller Stick - Release Myofascial Trigger Points Reduce Muscle Soreness Tightness Leg Cramps &amp; Back Pain for Physical Therapy &amp; Recovery (Black)</a>
              </div>
              <div className={productStyles.productCol}>
                <a target='_blank' href='https://www.amazon.com/gp/product/B00XM2N06O/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00XM2N06O&linkCode=as2&tag=vettedtrainer-20&linkId=931f8f1fe3e0404be23be1fba54cacf6'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00XM2N06O&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=vettedtrainer-20' /></a>
                <a target='_blank' href='https://www.amazon.com/gp/product/B00XM2N06O/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00XM2N06O&linkCode=as2&tag=vettedtrainer-20&linkId=4e0607124a2426c05cfb261a9cc49c10'>Amazon Basics High-Density Round Foam Roller for Exercise and Recovery - 12-Inch, Black</a>

              </div>
              <div className={productStyles.productCol}>
                <a target='_blank' href='https://www.amazon.com/gp/product/B071P2MQ5D/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B071P2MQ5D&linkCode=as2&tag=vettedtrainer-20&linkId=56a889b7c06e62af7987644fab14d7eb'><img border='0' src='/images/foamroller.jpg' /></a>
                <a target='_blank' href='https://www.amazon.com/gp/product/B071P2MQ5D/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B071P2MQ5D&linkCode=as2&tag=vettedtrainer-20&linkId=7bf0ce41874376eaaa8e7c4a8ecf789f'>Amazon Basics High-Density Round Foam Roller for Exercise and Recovery - 24-Inch, Black</a>
              </div>
              </div>
              <div className={productStyles.productRow}>
              <div className={productStyles.productCol}>
                <a target='_blank' href='https://www.amazon.com/gp/product/B00IMKSYTO/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00IMKSYTO&linkCode=as2&tag=vettedtrainer-20&linkId=828deae6d64d94d21f10d3fed79e0071'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00IMKSYTO&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=vettedtrainer-20' /></a>
                <a target='_blank' href='https://www.amazon.com/gp/product/B00IMKSYTO/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00IMKSYTO&linkCode=as2&tag=vettedtrainer-20&linkId=8e8ab0bcf4061fb9a5d94a19f69e0fbc'>Saloniture Professional Portable Folding Massage Table with Carrying Case - Black</a>
              </div>

              <div className={productStyles.productCol}>
                <a target='_blank' href='https://www.amazon.com/gp/product/B000BDLJ5G/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000BDLJ5G&linkCode=as2&tag=vettedtrainer-20&linkId=abe6c3ac0daf78d76d4e9c30375881af'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B000BDLJ5G&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=vettedtrainer-20' /></a>
                <a target='_blank' href='https://www.amazon.com/gp/product/B000BDLJ5G/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000BDLJ5G&linkCode=as2&tag=vettedtrainer-20&linkId=8006f777672532438c9e3348c006e78d'>Lifeline Power Wheel for At Home Full Body Functional Fitness Strength including Abs &amp; Core, Lower Body and Upper Body with Foot Straps for More Workout Options , Black</a>
              </div>

              <div className={productStyles.productCol}>
                <a target='_blank' href='https://www.amazon.com/gp/product/B072FGR7K8/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B072FGR7K8&linkCode=as2&tag=vettedtrainer-20&linkId=2baae44abe7ea22ac7f5ec5cda419214'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B072FGR7K8&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=vettedtrainer-20' /></a>
                <a target='_blank' href='https://www.amazon.com/gp/product/B072FGR7K8/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B072FGR7K8&linkCode=as2&tag=vettedtrainer-20&linkId=3163611bee5e92baa3cdde3268977d0d'>Fit &amp; Fresh JAXX FitPak Meal Prep Lunch Bag with Portion Control Containers &amp; Shaker Bottle, Commuter Series, Gray</a>
              </div>
              </div>
              <div className={productStyles.productRow}>
              <div className={productStyles.productCol}>
                <a target='_blank' href='https://www.amazon.com/gp/product/B07DPCWV8Z/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07DPCWV8Z&linkCode=as2&tag=vettedtrainer-20&linkId=7c10bfb113b1958b39be5e19c399a928'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07DPCWV8Z&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=vettedtrainer-20' /></a>
                <a target='_blank' href='https://www.amazon.com/gp/product/B07DPCWV8Z/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07DPCWV8Z&linkCode=as2&tag=vettedtrainer-20&linkId=27cb9fcaae167ea17ed6debf76113466'>PSO-RITE Psoas Muscle Release and Deep Tissue Massage Tool - Psoas, Back, Hip Flexor Release Tool - Night Black</a>
              </div>

              <div className={productStyles.productCol}>
                <a target='_blank' href='https://www.amazon.com/gp/product/B01JTDG084/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01JTDG084&linkCode=as2&tag=vettedtrainer-20&linkId=f31c7ae5916b4a6b99d1b4022bb71abf'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01JTDG084&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=vettedtrainer-20' /></a>
                <a target='_blank' href='https://www.amazon.com/gp/product/B01JTDG084/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01JTDG084&linkCode=as2&tag=vettedtrainer-20&linkId=01ee57b742537f850496fa26acbc0df2'>GreaterGoods Digital Food Kitchen Scale, Multifunction Scale Measures in Grams and Ounces (Ash Grey)</a>
              </div>
              <div className={productStyles.productCol}>
                <a target='_blank' href='https://www.amazon.com/gp/product/B07M93P63R/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07M93P63R&linkCode=as2&tag=vettedtrainer-20&linkId=b16b03e46d21330b8dc22f8366d19118'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07M93P63R&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=vettedtrainer-20' /></a>
                <a target='_blank' href='https://www.amazon.com/gp/product/B07M93P63R/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07M93P63R&linkCode=as2&tag=vettedtrainer-20&linkId=3b6f2d4265ed5061850407128ff82bd9'>Hey! Play! Toy Bench and Leg Press – Children’s Play Workout Equipment for Beginner Exercise, Weightlifting, Powerlifting - for Boys and Girls, Brown (80-SH-04)</a>
              </div>
              </div>
              <div className={productStyles.productRow}>
              <div className={productStyles.productCol}>
                <a target='_blank' href='https://www.amazon.com/gp/product/B07QKML1SL/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07QKML1SL&linkCode=as2&tag=vettedtrainer-20&linkId=d5156c094c0a4772e19e642af3377f51'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07QKML1SL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=vettedtrainer-20' /></a>
                <a target='_blank' href='https://www.amazon.com/gp/product/B07QKML1SL/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07QKML1SL&linkCode=as2&tag=vettedtrainer-20&linkId=56b1c0ed9ed958cbe87d2a4c3817ec71'>Fat Gripz Pro - The Simple Proven Way to Get Big Biceps &amp; Forearms Fast (Winner of The Men’s Health Magazine Strength Training Equipment Award) (2.25” Outer Diameter)</a>
              </div>

              <div className={productStyles.productCol}>
                <a target='_blank' href='https://www.amazon.com/gp/product/B07PXGQC1Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07PXGQC1Q&linkCode=as2&tag=vettedtrainer-20&linkId=98d9a241e6253a0d075474d3eac82519'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07PXGQC1Q&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=vettedtrainer-20' /></a>
                <a target='_blank' href='https://www.amazon.com/gp/product/B07PXGQC1Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07PXGQC1Q&linkCode=as2&tag=vettedtrainer-20&linkId=aad0ccbba0d7fc882cdcbaf8aa9cb118'>Apple AirPods with Charging Case</a>
              </div>
              <div className={productStyles.productCol}>
                <a target='_blank' href='https://www.amazon.com/gp/product/B084CQ41M2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B084CQ41M2&linkCode=as2&tag=vettedtrainer-20&linkId=ec87c3eb11f59ff79a6d629b797ed4ea'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B084CQ41M2&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=vettedtrainer-20' /></a>
                <a target='_blank' href='https://www.amazon.com/gp/product/B084CQ41M2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B084CQ41M2&linkCode=as2&tag=vettedtrainer-20&linkId=cc665b22e863124ce6d2550a0fad8157'>Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep &amp; Swim Tracking, Black/Black, One Size (S &amp;L Bands Included)</a>
              </div>
              </div>
              <div className={productStyles.productRow}>
              <div className={productStyles.productCol}>
                <a target='_blank' href='https://www.amazon.com/gp/product/B07HYDQDQB/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07HYDQDQB&linkCode=as2&tag=vettedtrainer-20&linkId=b9168c7ada96951900c9f0286c54c2ab'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07HYDQDQB&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=vettedtrainer-20' /></a>
                <a target='_blank' href='https://www.amazon.com/gp/product/B07HYDQDQB/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07HYDQDQB&linkCode=as2&tag=vettedtrainer-20&linkId=ba0685ad2f4689ee01b6cd3eaea5440b'>Simple Modern Summit Insulated Water Bottle with Straw Lid Large Half Gallon Reusable Wide Mouth Stainless Steel Flask Thermos, 64oz (1.9L), - Midnight Black</a>
              </div>

              <div className={productStyles.productCol}>
                <a target='_blank' href='https://www.amazon.com/gp/product/B084CYGYGW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B084CYGYGW&linkCode=as2&tag=vettedtrainer-20&linkId=41c3fece23d6e15a4e452ea30c821be9'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B084CYGYGW&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=vettedtrainer-20' /></a>
                <a target='_blank' href='https://www.amazon.com/gp/product/B084CYGYGW/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B084CYGYGW&linkCode=as2&tag=vettedtrainer-20&linkId=e642ccaff995ddf1879c7204c032e218'>Wallniture Guru Wall Mount Yoga Mat Home Gym Equipment Resistance Bands and Foam Roller Holder with 3 Hooks 3 Sectional Metal White</a>
              </div>
              <div className={productStyles.productCol}>
                <a target='_blank' href='https://www.amazon.com/gp/product/B07NWC3L95/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07NWC3L95&linkCode=as2&tag=vettedtrainer-20&linkId=52e64343b80f99e6adb26f54fd69cf74'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B07NWC3L95&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=vettedtrainer-20' /></a>
                <a target='_blank' href='https://www.amazon.com/gp/product/B07NWC3L95/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07NWC3L95&linkCode=as2&tag=vettedtrainer-20&linkId=113463adbceab129b23e19f1efd5285b'>UBeesize 51" Extendable Tripod Stand with Bluetooth Remote for iPhone Android Phone, Heavy Duty Aluminum, Lightweight</a>
              </div>
              </div>
              <div className={productStyles.productRow}>
              <div className={productStyles.productCol}>
                <a target='_blank' href='https://www.amazon.com/gp/product/B092QMJXMH/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B092QMJXMH&linkCode=as2&tag=vettedtrainer-20&linkId=bcb04a5e3ac7feefb39d5aeea4db8dea'><img border='0' src='//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B092QMJXMH&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=vettedtrainer-20' /></a>
                <a target='_blank' href='https://www.amazon.com/gp/product/B092QMJXMH/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B092QMJXMH&linkCode=as2&tag=vettedtrainer-20&linkId=e1b65d91b685ba9182ec48f0e72701a2'>Stainless Steel Gua Sha Tool Facial Gua Sha Tool Tighten Skin Care Tools Massage Beauty Tool for Body Eyes Neck Massager with Travel Pouch (Heart model)</a>
              </div>

            </div>
          </div>

        </section>

        <Footer />

      </body>
    </Layout>
  )
}
