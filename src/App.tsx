import Search from "./components/Search/Search"

function App() {

  return (
    <div>
      <section className="bg-topbackground bg-no-repeat bg-cover min-h-[800px]  flex flex-col">
        <header className="flex justify-between px-12 py-6">
          <div className="">
            <img src="./assets/logo.svg" alt="" />
          </div>

          <nav className="flex gap-6 text-white">
            <ul>
              <a href="">
                <li>Home</li>
              </a>
            </ul>

            <ul>
              <a href="">
                <li>Stays</li>
              </a>
            </ul>

            <ul>
              <a href="">
                <li>Flights</li>
              </a>
            </ul>

            <ul>
              <a href="">
                <li>Packages</li>
              </a>
            </ul>

            <ul>
              <a href="">
                <li>Sign Up</li>
              </a>
            </ul>
          </nav>
        </header>

        <main className="px-28 py-24">
          <h1 className="text-7xl text-white font-bold">
            The whole world <br /> awaits.
          </h1>
        </main>

        <div className="flex px-28">
          <Search />
        </div>
      </section>

    </div >
  )
}

export default App
