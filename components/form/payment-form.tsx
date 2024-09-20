'use client'
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { Button } from '../ui/button';
import axios from 'axios';

const PaymentForm = ({token}:{token:string}) => {
    const [txSignature, setTxSignature] = useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string | null>(null);

    const { publicKey, sendTransaction } = useWallet();
    const { connection } = useConnection();
    const router = useRouter();
    React.useEffect(() => {
        const savedSignature = localStorage.getItem('txSignature');
        if (savedSignature) {
            setTxSignature(savedSignature);
        }
    }, []);
    async function makePayment() {
        if (!publicKey) {
            setError("Wallet is not connected.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey!,
                    toPubkey: new PublicKey("j1oAbxxiDUWvoHxEDhWE7THLjEkDQW2cSHYn2vttxTF"),
                    lamports: 100000000,
                })
            );

            const {
                context: { slot: minContextSlot },
                value: { blockhash, lastValidBlockHeight }
            } = await connection.getLatestBlockhashAndContext();

            const signature = await sendTransaction(transaction, connection, { minContextSlot });
            await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });

            setTxSignature(signature);
            // router.push(signature);
            localStorage.setItem('txSignature', signature);

            const response = await axios.post(`https://twa-lake.vercel.app/v1/payer/task`, {
               
                signature: txSignature
            }, {
                headers: {
                    "Authorization":token
                }
            });

            localStorage.removeItem('txSignature');
            router.push(`/task/${response.data.id}`);

        } catch (error) {
            console.error("Payment error:", error);
            setError("An error occurred during the payment process.");
        } finally {
            setLoading(false);
        }
    }
  return (
      <div>  <Button onClick={makePayment} disabled={loading}>{loading ? "Loading.." : "Pay"}</Button></div>
  )
}

export default PaymentForm