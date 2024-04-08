import WidgetGrid from '@/app/components/dashboard/WidgetGrid'
import React from 'react'

export default function MainPage() {
  return (
    <div className='flex justify-center p-2 flex-col'>
      <div className='flex flex-col items-center'>
        <h1 className='mt-2 text-3xl'>Dashboard</h1>
        <span className='text-xl'>General Information</span>
      </div>

      <WidgetGrid/>
    </div>
  )
}
