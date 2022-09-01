import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TrasactionsContext'
import { dateformatte, priceFormatter } from '../../ultils/formatter'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Trasactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transction) => {
              return (
                <tr key={transction.id}>
                  <td width="50%">{transction.description}</td>
                  <td>
                    <PriceHighLight variant={transction.type}>
                      {transction.type === 'outcome' && '- '}
                      {priceFormatter.format(transction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transction.category}</td>
                  <td>{dateformatte.format(new Date(transction.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
