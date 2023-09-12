import Image from 'next/image'
import Link from 'next/link'
import { ProductCard } from './components/ProductCard'
export default function Home() {
  return (
   <main>
    <h1>Hello NEXTJS</h1>
    <Link href='/Users'>Users</Link>
    <ProductCard />
    </main>
  )
}
