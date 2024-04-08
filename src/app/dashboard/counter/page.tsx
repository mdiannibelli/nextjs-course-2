/* 'use client' */
import { Metadata } from 'next'
import CartCounter from '@/shopping-cart/components/CartCounter'

export const metadata: Metadata = {
  title: 'Counter',
  description: 'Cart Products Counter'
}

export default function CounterPage() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
        <h1 className='text-2xl uppercase'>Products in cart</h1>      
        <CartCounter /* value={10} *//>
    </div>
  )
}
