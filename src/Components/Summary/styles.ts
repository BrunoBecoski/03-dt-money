import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  padding-inline: 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  @media (max-width: 950px) {
    overflow: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
  }
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  max-width: 352px;
  min-width: 280px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 140%;
  }

  span:last-child {
    color: ${(props) =>
      props.variant === 'green'
        ? props.theme['gray-300']
        : props.theme['gray-500']};
    line-height: 160%;
    font-size: 0.875rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['green-700']};
    `}

  @media (max-height: 768px) {
    strong {
      font-size: 1.5rem;
    }
  }
`
