import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
const useUser = () => {
    const { user } = useContext(AuthContext)

    const { refetch, data:users=[] } = useQuery({
        queryKey: ['users', user],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_SERVER_API}/users`)
            return res.json()
        },
    })
    return [users,refetch]
}

export default useUser