import Categories from "./components/Categories/Categories"
import Gallery from "./components/Gallery/Gallery"
import Menu from "./components/Menu/Menu"
import Offers from "./components/Offers/Offers"
import Search from "./components/Search/Search"

function App() {

  return (
    <div>
      <section className="bg-topbackground bg-no-repeat bg-cover min-h-[840px]  flex flex-col">
        <header className="flex justify-between px-12 py-6">
          <div className="">
            <img src="./assets/logo.svg" alt="" />
          </div>

          <Menu />
        </header>

        <section className="px-28 py-24">
          <h1 className="text-7xl text-white font-bold">
            The whole world <br /> awaits.
          </h1>

          <div className="py-10">
            <Search />
          </div>

          <Categories />
        </section>

        <section className="px-28 py-24">
          <h1 className="text-3xl text-white font-bold">Top Vacation Destinations</h1>

          <Gallery />
        </section>
      </section>

      <section className="offers">
        <div className="px-28">
          <h1 className="text-black text-3xl font-bold pt-20">Offers</h1>


          <Offers />
        </div>
      </section>

    </div >
  )
}

export default App
