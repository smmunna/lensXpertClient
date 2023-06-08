import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'

const UseClass = () => {
    const { user } = useContext(AuthContext)

    const { refetch, data:myclass=[] } = useQuery({
        queryKey: ['myclass', user?.email],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_SERVER_API}/classes/myclasses?email=${user?.email}`)
            return res.json()
        },
    })
    return [myclass,refetch]
}

export default UseClass;
