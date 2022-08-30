function Menu() {
  return (
    <nav className="flex gap-6 text-white">
      <ul>
        <a href="">
          <li className="hover:border-b-2">Home</li>
        </a>
      </ul>

      <ul>
        <a href="">
          <li className="hover:border-b-2">Stays</li>
        </a>
      </ul>

      <ul>
        <a href="">
          <li className="hover:border-b-2">Flights</li>
        </a>
      </ul>

      <ul>
        <a href="">
          <li className="hover:border-b-2">Packages</li>
        </a>
      </ul>

      <ul>
        <a href="">
          <li className="hover:border-b-2">Sign Up</li>
        </a>
      </ul>
    </nav>
  )
}
export default Menu