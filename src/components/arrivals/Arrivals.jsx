import './Arrivals.css'

const Arrivals = ({ a_cards }) => {
  return (
      <div className="container">
    <div className='arrivals_background'>
      <h3 className='main_text'><span>New</span> Arrivals</h3>
      <div className="arrivals_text">
        <p className='a_p1'>New Collection 2023</p>
        <h3 className='a_h3'>Apple Watch Series 8</h3>
        <div className="p2_wrap">
        <p className='a_p2'>
          Fine workmanship is waterproof and dustproof. The watch is improved with many features to ensure accuracy when monitoring users' health.
        </p>
</div>

        <div className="arrivals_card-wrapper">
          <div className="a_card1"><p className='card_p1'>Sale up to</p>
          <p className='card_p2'>60%</p>
          </div>
          <div className="a_card2"><s style={{
            textDecoration: 'line-through',
            paddingBottom: '4px',
            fontSize: '16px'
          }}>$306.00</s>
          <p style={{
            fontSize: '26px',
            color: 'rgba(46, 46, 46, 1)'
          }}>$259.00</p>
          </div>
        </div>
      </div>
    </div>

          <div className="cards_text">
            <h3 style={{
              fontSize: '34px',
              paddingBottom: '40px'
            }}>New Arrivals</h3>
          </div>
          
    <div className="a_cards">
      {
        a_cards.map((item, index) => {
          return(

            <div className="acard_wrapper" key={index}>
              <img src={item.url} alt="" />
              <b>{item.price}</b>
              <p>{item.description}</p>
              <div className='icons'>{item.ratings}</div>
              <div className="awrap_icon">

              </div>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}

export default Arrivals
