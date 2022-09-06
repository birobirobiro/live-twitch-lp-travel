function Offers() {
  return (
    <div>
      <div className="bg-white rounded-2xl w-[688px] h-[258px]">
        <div className="flex">
          <div className="flex items-center justify-center">

            <img className="rounded-3xl w-[310px] h-[210px]" src="https://source.unsplash.com/random/landscape/?landscape,airplane" alt="" />

          </div>

          <div className="infos flex-col">
            <span className="font-bold">Domestic Flights</span>

            <h2>Huge savings on flight with trxvl.</h2>

            <span>Book domestic flights starting @ just ₹1459</span>

            <button className="rounded-[32px] bg-blue-600 " >Book Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers