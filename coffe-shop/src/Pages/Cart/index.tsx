// import { useForm } from 'react-hook-form'
import { BodyComponent } from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

export const Cart = () => {
  // const { register, handleSubmit } = useForm()

  return (
    <BodyComponent>
      <div>
        <p>Complete seu pedido</p>
        <div>
          <MapPinLine size={22} weight="bold" />
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
          <form action="">
            <input
              type="text"
              name="cep"
              id="cep"
              pattern="[0-9]"
              placeholder="CEP"
            />
            <input type="text" name="Rua" id="rua" placeholder="Rua" />
            <input type="text" name="Número" id="numero" placeholder="Número" />
            <input
              type="text"
              name="Complemento"
              id="complemento"
              placeholder="Complemento"
            />
            <input type="text" name="Bairro" id="bairro" placeholder="Bairro" />
            <input type="text" name="Cidade" id="cidade" placeholder="Cidade" />
            <input
              type="text"
              name="UF"
              id="uf"
              placeholder="UF"
              maxLength={2}
            />
            <div>
              <CurrencyDollar size={22} weight="bold" />
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
              <button>
                <CreditCard size={22} weight="bold" />
                CARTÃO DE CRÉDITO
              </button>
              <button>
                <Bank size={22} weight="bold" />
                CARTÃO DE DÉBITO
              </button>
              <button>
                <Money size={22} weight="bold" />
                DINHEIRO
              </button>
            </div>
          </form>
          <aside>
            
          </aside>
        </div>
      </div>
    </BodyComponent>
  )
}
