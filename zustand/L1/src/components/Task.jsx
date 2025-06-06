import './Task.css'
const Task = ({title}) => {
  const STATUS = 'PLANNED'
  return (
    <div className='task'> 
      <div>{title}</div>
      <div className='bottomWrapper'>
        <div></div>
        <div className='statue'>{STATUS}</div>
      </div>
    </div>
    
  )
}

export default Task