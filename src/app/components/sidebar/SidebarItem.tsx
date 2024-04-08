'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
interface Props {
    path: string,
    icon: JSX.Element,
    title: string,
    subtitle: string,
}

export default function SidebarItem({path, icon, title, subtitle}: Props) {
    const url = usePathname()
  return (
    <Link href={path} className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150 ${path === url ? 'bg-blue-800' : ''}`}>
                <div>
                    {icon}        
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-bold leading-5 text-white">{title}</span>
                    <span className="text-sm text-white/50 hidden md:block">{subtitle}</span>
                </div>
            </Link>
  )
}
