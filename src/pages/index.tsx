import { Inter } from '@next/font/google'
import SearchBar from 'components/searchBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className=''>
        <SearchBar />
      </div>
    </>
  )
}
