const styles = {
  Navbar:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh',
  },
  
  logo :{
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    fontFamily: 'Arial, Helvetica, sans-serif',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a':{
      textdecoration: 'none',
      color:'black'
    }
  },

  slider:{
    width: '350px',
    margin:'0 10px',
    display: 'inline-block',
  },
  
  selectContainer:{
    marginLeft: 'auto',
    marginRight: '1rem',
  }
}

export default styles;