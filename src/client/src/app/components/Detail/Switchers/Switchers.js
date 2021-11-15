import React , {useState}from 'react'
import classNames from "classnames";

const Switchers = ({className, setSelected}) => {
  const [active, setActive] = useState('I owe')
  return (
    <div className={className}>
      <ul >
        <li className={classNames('st1' ,`${active === 'I owe' ? 'active' : 'standard'}`)} onClick={() => {setActive('I owe'); setSelected('I owe')}}>I owe</li>
        <li className={classNames(`${active === 'Owed to me' ? 'active' : 'standard'}`)} onClick={() => {setActive('Owed to me');setSelected('Owed to me');}}>Owed to me</li>
        <li className={classNames('st3',`${active === 'All expenses' ? 'active' : 'standard'}`)} onClick={() => {setActive('All expenses'); setSelected('All expenses');}}>All expenses</li>
      </ul>
    </div>

  )
}

export default Switchers
