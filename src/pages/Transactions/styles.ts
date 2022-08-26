import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding-inline: 1.5rem;

  @media (max-width: 768px) {
    margin-top: 1.75rem;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 1.125rem;

  margin-bottom: 0.75rem;

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['gray-500']};
  }
`

export const List = styled.div`
  gap: 0.5rem;
  margin-block: 1.5rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`

export const CardList = styled.div`
  display: grid;
  grid-template-columns: 50% 20% 30%;
  border-radius: 5px;
  padding: 1.25rem 2rem;

  background: ${(props) => props.theme['gray-700']};

  .category,
  .date {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    color: ${(props) => props.theme['gray-500']};
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.strong<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
