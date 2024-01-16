import { StatisticsWraper, StatisticsItem } from "./Statistics.styled";
import { getRandomHexColor } from "./getRandomHexColor";



//stats за замовчуванням буде масивом, тоді якщо нічого не передадуть, то код не зламається
// оскільки title  не обовязковий, то в розмітку відмальовуємо, тільки якщо він буде переданий
// колір StatisticsItem вибирається рандомно 
export const Statistics = ({title, stats = []}) => {
    const elements=stats.map(stat => <StatisticsItem 
    key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
    <span className="label">{stat.label}</span>
    <span className="percentage">{stat.percentage}</span>
  </StatisticsItem>);

return (
<StatisticsWraper>
  {title && <h2 className="title">{title}</h2>}

  <ul className="stat-list">
  {elements}
  </ul>
</StatisticsWraper>
)
}