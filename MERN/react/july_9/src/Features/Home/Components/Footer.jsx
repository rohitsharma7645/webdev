
const Footer = () => {
  return (
    <div>
    <footer style={{
        width:'100%',
        backgroundColor:'black',
        color:'white',
        display:'flex',
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center',
        padding:'24px'
      }}>
        <p>Frontend Practice - © 2026</p>
        <div style={{display:'flex',gap:'100px', fontWeight:'bold'}}> <span>Home</span> <span>Projects</span> <span>FAQ</span>   </div>
      </footer>
    </div>
  )
}

export default Footer;