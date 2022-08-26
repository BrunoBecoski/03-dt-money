import { useContextSelector } from 'use-context-selector'
import { CalendarBlank, TagSimple } from 'phosphor-react'

import { TransactionsContext } from '../../contexts/TransactionsContext'
import { priceFormatter, dateFormatter } from '../../utils/formatter'
import { Header } from '../../Components/Header'
import { Summary } from '../../Components/Summary'
import { SearchForm } from './Components/SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  Title,
  List,
  CardList,
} from './styles'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <Title>
          Transações
          <span>{transactions.length} itens</span>
        </Title>

        <SearchForm />

        <List>
          {transactions.map((transaction) => {
            return (
              <CardList key={transaction.id}>
                <span>{transaction.description}</span>
                <PriceHighlight variant={transaction.type}>
                  {transaction.type === 'outcome' ? '- ' : '+ '}
                  {priceFormatter.format(transaction.price)}
                </PriceHighlight>
                <div>
                  <span className="category">
                    <TagSimple />
                    {transaction.category}
                  </span>
                  <span className="date">
                    <CalendarBlank />
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </span>
                </div>
              </CardList>
            )
          })}
        </List>
      </TransactionsContainer>
    </div>
  )
}
