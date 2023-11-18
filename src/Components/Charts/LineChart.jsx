import { ChartComponent, 
  SeriesCollectionDirective, 
  LineSeries,
  SeriesDirective, 
  Inject, 
  DateTime, 
  Legend, 
  Tooltip } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../Contexts/ContextProvider'

const LineChart = () => {
  const { currentMode } = useStateContext()
  return (
    <div>
      <ChartComponent
      id='line-chart'
      height='420px'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      background={currentMode === 'Dark'? '#33373E' : '#fff'}
      chartArea={{ border: {width: 0} }}
      tooltip={{ enable:true }}>
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index)=>(
            <SeriesDirective key={index} {...item}/>
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default LineChart