import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'use-context-selector'

import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useSummary } from '../../hooks/useSummary'
import {
  dateFormatter,
  dateLongFormatter,
  priceFormatter,
} from '../../utils/formatter'
import { SummaryContainer, SummaryCard } from './styles'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  const summary = useSummary()

  let lastEntryFormatted = ''
  let lastExitFormatted = ''
  let firstTransactionFormatted = ''
  let lastTransactionFormatted = ''

  const lastEntry = transactions.find(
    (transaction) => transaction.type === 'income',
  )
  const lastExit = transactions.find(
    (transaction) => transaction.type === 'outcome',
  )
  const firstTransaction = transactions[transactions.length - 1]
  const lastTransaction = transactions[0]

  if (lastEntry) {
    lastEntryFormatted = dateLongFormatter.format(new Date(lastEntry.createdAt))
  }

  if (lastExit) {
    lastExitFormatted = dateLongFormatter.format(new Date(lastExit.createdAt))
  }

  if (firstTransaction) {
    firstTransactionFormatted = dateFormatter.format(
      new Date(firstTransaction.createdAt),
    )
  }

  if (lastTransaction) {
    lastTransactionFormatted = dateFormatter.format(
      new Date(lastTransaction.createdAt),
    )
  }

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>

        <strong>{priceFormatter.format(summary.income)}</strong>

        <span>Última entrada em {lastEntryFormatted}</span>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>

        <strong>{priceFormatter.format(summary.outcome)}</strong>

        <span>Última saída em {lastExitFormatted}</span>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFFFFF" />
        </header>

        <strong>{priceFormatter.format(summary.total)}</strong>

        <span>{`De ${firstTransactionFormatted} até ${lastTransactionFormatted}`}</span>
      </SummaryCard>
    </SummaryContainer>
  )
}
