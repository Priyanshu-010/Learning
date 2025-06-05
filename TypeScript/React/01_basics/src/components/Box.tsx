

type PropstType = {
  heading : string,
  count: number,
  children: React.ReactNode
}
const Box = ({heading, count, children}: PropstType) => {
  return (
    <div>
      {heading}<br></br>
      {count}
      {children}
    </div>
  )
}

export default Box