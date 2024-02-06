import { HeaderContainer } from './styles'
import Logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <aside>
          <p>
            <MapPin size={22} weight="fill" />
            Brasília, DF
          </p>
          <p>
            <a href="/cart">
              <ShoppingCart size={22} weight="fill" />
            </a>
          </p>
        </aside>
      </nav>
    </HeaderContainer>
  )
}
