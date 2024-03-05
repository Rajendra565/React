// /* eslint-disable react/prop-types */


import Items from './Items'

function FoodList({listItems}) {
    
  return (
    <div>
    <ul className="list-group  ">
    {listItems.map((items)=>{

    <Items keys={items} foodlist={items} />
    })}
    
    
    </ul>
      
    </div>
  )
}

export default FoodList
