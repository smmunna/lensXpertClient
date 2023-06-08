import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'

const UsePayments = () => {
    const { user } = useContext(AuthContext)

    const { refetch, data:payments=[] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_SERVER_API}/paymenthistory`)
            return res.json()
        },
    })
    return [payments,refetch]
}

export default UsePayments;
