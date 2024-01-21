import { LOGO } from "../utils/constants"

const Header = () => {
  return (
    <>
      <img
        className="w-44 mx-auto md:mx-0  absolute z-10"
        src={LOGO}
        alt="logo"
      />
    </>
  )
}

export default Header
