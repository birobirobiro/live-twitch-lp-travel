import Categories from "./components/Categories/Categories"
import Menu from "./components/Menu/Menu"
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
      </section>



    </div >
  )
}

export default App
