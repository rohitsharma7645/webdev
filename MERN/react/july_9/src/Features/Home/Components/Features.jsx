import Features_card from './Features_card.jsx'

const Features = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px 150px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ margin: '24px', width: '36vw', fontFamily: "'DM Serif Display' serif", fontWeight: '900', fontSize: 'xx-large' }}>Frontend Practice provides you with the inspiration and resources to create beautiful websites.</h1>
        <p style={{ fontSize: 'x-large', width: '30vw' }}>
          Here are some ways you can benefit from using our platform:
        </p>
      </div>
      <div style={{ display: 'grid', justifyContent: 'center', gridTemplateColumns: 'repeat(2,350px)', gap: '32px', columnGap: "32px", margin: '50px' }}>
        <Features_card text='Enhance your skills by building real websites selected for their educational value.' />
        <Features_card text='Test and improve your frontend knowledge through various challenges..' />
        <Features_card text='Use the provided color palettes for each project to save time..' />
        <Features_card text='Find helpful, curated resources to tackle challenging elements.' />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

      }}>
        <h1 style={{ margin: '24px', width: '40vw', fontFamily: 'DM Serif Display', fontWeight: '700', fontSize: 'xx-large' }}>Ready to become a better frontend developer?</h1>
        <button style={{
          padding: '8px 16px',
          fontSize: 'medium',
          fontWeight: '540',
          backgroundColor:'transparent',
          border:'2px solid black'
        }}>Learn more</button>
      </div>
      
    </div>
  )
}

export default Features