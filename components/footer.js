import Link from 'next/link'
import formStyles from '../styles/home.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Footer () {

return (
<section className={formStyles.footer}>

  <Link href="/">

  <a className={utilStyles.colorInherit}>
  <div className={formStyles.logo}>
    <img src='/images/vetted-logo.png' alt="Black and white logo for Vetted Trainers fitness gym" />
  </div>
  </a>

  </Link>

  <div className={formStyles.footerContact}>

    <h3>5712 Industry Lane Unit E, Frederick MD, 21703</h3>

    <a href="mailto:vettedtrainers@gmail.com" className={utilStyles.colorInherit}>
      <h3>vettedtrainers@gmail.com</h3>
    </a>

    <a href="tel:2404092975" className={utilStyles.colorInherit}>
      <h3>(240)-409-2975</h3>
    </a>
    <div className={formStyles.socialMedia}>

    <a href="https://www.youtube.com/channel/UCMTekJJglOmXvy3AZGjbQYw" target="_blank" className={utilStyles.colorInherit}>
      <img src='/images/yt-red.png' alt="Red youtube icon" />
    </a>

      <a href="https://www.facebook.com/Vettedtrainers/" target="_blank" className={utilStyles.colorInherit}>
        <img src='/images/fb-icon.png' alt="Blue facebook icon"/>
      </a>

    <a className={utilStyles.colorInherit} href ="https://www.instagram.com/vettedtrainers/" target="_blank">
      <img src='/images/ig-icon.png' alt="Purple instagram icon" />
    </a>
    </div>
  </div>

</section>
)
}
