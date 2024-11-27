
const Item = ({params}: {params: {id: string, flavor: string}})=> {
 
  return (
    <div>
       {JSON.stringify(params)}
    </div>
  )
}

export default Item;