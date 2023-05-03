import Card from '../card/Card.component'
import './CardList.styles.css'

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />
    })}
  </div>
)

export default CardList
