import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'

const UseAllClass = () => {
    const { user } = useContext(AuthContext)

    const { refetch, data:allclass=[] } = useQuery({
        queryKey: ['allclass', user],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_SERVER_API}/classes`)
            return res.json()
        },
    })
    return [allclass,refetch]
}

export default UseAllClass;
