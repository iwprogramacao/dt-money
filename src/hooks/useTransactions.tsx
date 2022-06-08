import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { api } from '../services/api'

interface TransactionProps {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

/* interface TransactionInput {
  title: string
  amount: number
  type: string
  category: string
} */
type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>
// Herda todos os itens de TransactionProps e omite os itens detalhados como 2º param.
/* 
  type TransactionInput = Pick<TransactionProps, 'createdAt' | 'amount' | 'type' | 'category'>
Seleciona os itens a seguir */

interface TransactionProviderProps {
  children: ReactNode // Aceita qualquer tipo de conteúdo válido do React
}

interface TransactionContextData {
  /*  
Como precisamos enviar um Object como "value" no TransactionsContext.Provider, precisamos dessa interface 
A tipagem pode ser explicada analisando os itens onde os itens são criados 
*/
  transactions: TransactionProps[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData // Somente com o Object vazio, ele acusa erro, então devemos forçar o TS a entender que esse é o formato real que queremos
)

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]) // <...[]> para ele entender que é um array de transactions. Se não tiver

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionsInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionsInput,
      createdAt: new Date()
    })

    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)
  return context
}
