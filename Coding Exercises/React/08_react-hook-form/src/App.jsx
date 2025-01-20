import { useForm } from 'react-hook-form'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <div>
      <form>
        <div>
          <label htmlFor="">First Name: </label>
          <input type="text" />
        </div>
        <br />
        <div>
          <label htmlFor="">Middle Name: </label>
          <input type="text" />
        </div>
        <br />
        <div>
          <label htmlFor="">Last Name: </label>
          <input type="text" />
        </div>
      </form>
    </div>
  )
}

export default App
