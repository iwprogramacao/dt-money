import { Container } from './styles';
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import './styles'

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}