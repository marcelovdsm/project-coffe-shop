import { useForm } from 'react-hook-form'
import {
  BodyComponent,
  MainComponent,
  Title,
  RequestComponent,
  LeftBoxComponent,
  RequestTitleComponent,
  FormComponent,
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'

import expresso from '../../assets/expresso.png'
import { CardCoffeeNumber } from '../../components/CardCoffeeNumber'

export const Cart = () => {

  const { register, handleSubmit } = useForm()

  return (
    <BodyComponent>
      <LeftBoxComponent>
        <RequestComponent>
          <Title>Complete seu pedido</Title>
          <MainComponent>
            <RequestTitleComponent>
              <MapPinLine size={22} />
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </RequestTitleComponent>
            <FormComponent action="">
              <input
                type="text"
                id="cep"
                pattern="[0-9]"
                placeholder="CEP"
                {...register('cep')}
              />
              <input type="text" name="Rua" id="rua" placeholder="Rua" />
              <input
                type="text"
                id="numero"
                placeholder="Número"
                {...register('numero')}

              />
              <input
                type="text"
                id="complemento"
                placeholder="Complemento"
                {...register('complemento')}

              />
              <input
                type="text"
                id="bairro"
                placeholder="Bairro"
                {...register('bairro')}

              />
              <input
                type="text"
                id="cidade"
                placeholder="Cidade"
                {...register('cidade')}

              />
              <input
                type="text"
                id="uf"
                placeholder="UF"
                maxLength={2}
                {...register('uf')}

              />
              <div>
                <CurrencyDollar size={22} weight="bold" />
                <h2>Pagamento</h2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
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
            </FormComponent>
          </MainComponent>
        </RequestComponent>
      </LeftBoxComponent>
      <aside>
        <Title>Cafés selecionados</Title>
        <MainComponent>
          <div>
            <img src={expresso} alt="expresso" />
            <p>Expresso Tradicional</p>
            <span>R$ 9,90</span>
            <div>
              <CardCoffeeNumber />
              <button>
                <Trash size={22} weight="bold" />
              </button>
            </div>
          </div>
          <div>
            <img src={expresso} alt="expresso" />
            <p>Expresso Tradicional</p>
            <span>R$ 9,90</span>
            <div>
              <CardCoffeeNumber />
              <button>
                <Trash size={22} weight="bold" />
              </button>
            </div>
          </div>
          <div>
            <p>
              Total de itens <span>R$ 30,00</span>
            </p>
            <p>
              Entrega <span>R$ 5,00</span>
            </p>
            <h3>
              Total <span>R$ 35,00</span>
            </h3>
          </div>
          <button>CONFIRMAR PEDIDO</button>
        </MainComponent>
      </aside>
    </BodyComponent>
  )
}
