import Search from "./components/Search/Search"


function App() {

  return (
    <div>
      <section className="bg-topbackground bg-no-repeat bg-cover min-h-[800px] min-w-[1366px]">
        <header className="flex justify-between px-12 py-6">
          <div className="">
            <img src="./src/assets/logo.svg" alt="" />
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

        <main className="min-w-[1100px] px-28 py-24">
          <h1 className="text-7xl text-white">
            The whole world awaits.
          </h1>
        </main>

        <Search />
      </section>
    </div >
  )
}

export default App
