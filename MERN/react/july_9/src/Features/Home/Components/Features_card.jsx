
const Features_card = (props) => {
  return (
    <div style={{
        border: "1px solid black", padding:'16px', width:'360px', 
        height:'120px',
        textAlign:'center',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }}>
        <p>{props.text}</p>
    </div>
  )
}

export default Features_card