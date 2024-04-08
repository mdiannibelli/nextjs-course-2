'use client'
import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import CounterIcon from '../icons/CounterIcon'
import { useAppSelector } from '@/app/store'



export default function WidgetGrid() {
    const cartCounter = useAppSelector(state => state.counter.count)
    const widgetParams = [
        {
        title: `${cartCounter}`,
        subtitle: 'Products in cart',
        label: 'Counter',
        icon: <CounterIcon/>,
        href: '/dashboard/counter'
        }
    ]
  return (
    <div className='flex gap-4 flex-wrap p-2'>
        {widgetParams.map((widget, i) => (
            <SimpleWidget {...widget} key={i}/>
        ))}
      </div>
  )
}
