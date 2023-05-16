import { HeaderContainer } from "./styles"
import Logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <img src={Logo} />
        <aside>
          <p><MapPin size={22} weight="fill" />Brasília, DF</p>
          <p><ShoppingCart size={22} weight="fill" /></p>
        </aside>
      </nav>
    </HeaderContainer>
  )
}