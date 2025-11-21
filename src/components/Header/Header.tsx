import './Header.css'
import { useContext } from 'react'
import { AppContext } from '../../App';

export const Header  = () => {
  const context = useContext(AppContext);
  console.log('header return', context);
  return(
    <div className='header'>
      🏦 DIO Bank 🏦
    </div>
  )
}
