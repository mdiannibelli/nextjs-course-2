import Image from 'next/image'
import React from 'react'
import SidebarItem from './SidebarItem'
import DashboardIcon from '../icons/DashboardIcon'
import CounterIcon from '../icons/CounterIcon'
import Link from 'next/link'
import PokemonIcon from '../icons/PokemonIcon'
import HearthIcon from '../icons/HearthIcon'

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <DashboardIcon/>,
        title: 'Dashboard',
        subtitle: 'Visualization'

    },
    {
        path: '/dashboard/counter',
        icon: <CounterIcon/>,
        title: 'Counter',
        subtitle: 'Local State'

    },
    {
        path: '/dashboard/pokemons',
        icon: <PokemonIcon/>,
        title: 'Pokemons',
        subtitle: 'Static Generation'

    },
    {
        path: '/dashboard/favorites',
        icon: <HearthIcon fill='none'/>,
        title: 'Favorites Pokemons',
        subtitle: 'Global State'

    },
]


export default function Siderbar() {
  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-hidden">
           <div id="logo" className="my-4 px-6">
            <h1 className="text-lg md:text-2xl font-bold text-white">Dash<span className="text-blue-500">8</span>.</h1>
            <p className="text-slate-500 text-sm">Manage your actions and activities</p>
           </div>
           <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Welcome back,</p>
            <Link href="#" className="inline-flex space-x-2 items-center">
                <span>
                    <Image className="rounded-full" width={50} height={50} src="https://i.postimg.cc/sx93zVCR/foto-portfolio2.png" alt="Marcos Dionel Iannibelli"/>
                </span>
                <span className="text-sm md:text-base font-bold">
                    Marcos Dionel
                </span>
                </Link>
           </div>
           <div id="nav" className="w-full px-6">

            {menuItems.map((item,index) => (
                <SidebarItem key={index} path={item.path} icon={item.icon} title={item.title} subtitle={item.subtitle} />
            ))}
            
           </div>
        </div>
  )
}
