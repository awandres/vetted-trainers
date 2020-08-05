import React, { Component } from "react";


class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
    }
  }

  componentDidUpdate(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }

  render(){
    const styles={
      container: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: this.state.open? '100%': 0,
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        background: 'black',
        opacity: 0.9,
        color: '#fafafa',
        transition: 'height 0.3s ease',
        zIndex: 2,
        textAlign:'right',
      },
      menuList: {
        paddingTop: '3rem',
      },
      logo: {
        width:'40px',
        position:'absolute',
        top:0,
        left:0,
      }
    }
    return(
      <div style={styles.container}>

        {
          this.state.open?
            <div style={styles.menuList}>
              {this.props.children}
            </div>:null
        }
      </div>
    )
  }
}

export default Menu
