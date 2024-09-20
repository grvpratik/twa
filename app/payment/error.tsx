'use client'
import { useRouter } from 'next/navigation'

export default function ErrorPage() {
    const router = useRouter()
    // const { message } = router.query
console.log(router)
    return (
        <div>
            <h1>Error </h1>
            < p > {  'An error occurred'} </p>
        </div>
    )
}

