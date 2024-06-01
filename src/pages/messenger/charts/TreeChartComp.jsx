
import { Treemap } from 'recharts';

const TreeChartComp = ({ data }) => {
  return (
    <div>
        <Treemap width={400} height={200} data={data} dataKey="size" aspectRatio={4 / 3} stroke="#fff" fill="#8884d8" />
    </div>
  )
}

export default TreeChartComp