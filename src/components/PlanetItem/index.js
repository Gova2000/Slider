// Write your code here
import './index.css'

const Item = props => {
  const {list} = props
  const {imageUrl} = list
  return (
    <>
      <div>
        <img src={imageUrl} alt="k" />
      </div>
    </>
  )
}

export default Item
