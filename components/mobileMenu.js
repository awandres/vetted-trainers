import Link from 'next/link'
import MediaQuery from 'react-responsive'
import React from 'react'
import Menu from './Menu'
import MenuItem from './MenuItem'
import MenuButton from './MenuButton'

class MobileMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleMenuClick () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  handleLinkClick () {
    this.setState({menuOpen: false})
  }

  render () {
    const styles =
      {
        container: {
          position: 'absolute',
          top: 0,
          height: '130px',
          right: 0,
          zIndex: '99',
          opacity: 0.9,
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'flex-end',
          background: 'rgba(247,202,153, .4)',
          width: '100%',
          color: 'white',
          fontFamily: 'Lobster',
          textAlign: 'right'
        },
        menuItem: {
          fontFamily: `'Open Sans', sans-serif`,
          fontSize: '1.4rem',
          padding: '1rem 0',
          margin: '0 5%',
          cursor: 'pointer',
          textDecoration: 'none',
          textDecorationColor: 'white',
          color: this.state.hover ? 'gray' : '#fafafa',
          transition: 'color 0.2s ease-in-out',
          animation: '0.5s slideIn forwards',
          animationDelay: this.props.delay

        },
        menuContainer: {
          opacity: 0,
          animation: '1s appear forwards',
          paddingTop: '80px',
          animationDelay: this.props.delay
        },
        line: {
          width: '90%',
          height: '1px',
          background: 'gray',
          margin: '0 auto',
          animation: '0.5s shrink forwards',
          animationDelay: this.props.delay

        },
        body: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100vw',
          height: '80vh',
          filter: this.state.menuOpen ? 'blur(2px)' : null,
          transition: 'filter 0.5s ease'
        },
        logo: {
          margin: '0 auto',
          width: '70px',
          padding: '20px',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 100
        }
      }
    const menu = ['Home', 'Services', 'Join Our Team', 'About the Owners']
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => { this.handleLinkClick() }}>{val}</MenuItem>)
    })

    return (

        <MediaQuery maxDeviceWidth={768}>
          <div style={styles.container}>

            <MenuButton open={this.state.menuOpen} onClick={() => this.handleMenuClick()} color='white' />

          </div>
          <Menu open={this.state.menuOpen}>

              <div style={styles.menuContainer}>

                <Link href='/'><div style={styles.menuItem} onClick={() => this.handleMenuClick()}
          >
          Home
          </div></Link>

                <div style={styles.line} />

                <Link href='/services'><div style={styles.menuItem} onClick={() => this.handleMenuClick()}
    >
    About
    </div></Link>

                <div style={styles.line} />

                <Link href='/join-our-team'><div style={styles.menuItem} onClick={() => this.handleMenuClick()}
>
Services
</div></Link>

                <div style={styles.line} />

                <Link href='/about-the-owners'><div style={styles.menuItem} onClick={() => this.handleMenuClick()}
>
FAQs
</div></Link>

                <div style={styles.line} />

</div>
          </Menu>
        </MediaQuery>


    )
  }

}

export default MobileMenu
