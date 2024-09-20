
import { useSearchParams } from 'next/navigation'
import { jwtVerify } from 'jose';
import { headers } from 'next/headers';
import { serialize } from 'v8';
import { Appbar } from '@/components/appbar';
import PaymentForm from '@/components/form/payment-form';


const secret = new TextEncoder().encode(
    'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2'
);

async function verifyToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, secret);
        return payload as { payerId: string; taskId: string };
    } catch (error) {
        console.error('Error verifying token:', error);
        return null;
    }
}
//@ts-ignore
export default async function PaymentPage({
    params,
    searchParams,
}: {
    params: { slug: string };
    searchParams?: { [key: string]: string |  undefined };
    }) {
    
    console.log(searchParams)


    
        if (!searchParams?.token) {
                return <div>Error: No token provided</div>;
            }
    
        const token = searchParams?.token
        const payload = await verifyToken(token);
            if (!payload) {
                return <div>Error: Invalid or expired token</div>;
            }

        console.log(payload)
    

    







    // const headersList = headers()
    // const payloadString = headersList.get('x-payload')

    // const searchParams = useSearchParams()

//     const token = searchParams.get('token')

//     if (!token) {
//         return <div>Error: No token provided</div>;
//     }

//     const payload = await verifyToken(token);

//     if (!payload) {
//         return <div>Error: Invalid or expired token</div>;
//     }

// console.log(payload)
    // if (!task) {
    //     return <div>Error: Task not found</div>;
    // }

    return (
        <div>
            <h1>Payment Details</h1>
            <Appbar token={token} />
            <PaymentForm token={token} />
            
        </div>
    );
};

