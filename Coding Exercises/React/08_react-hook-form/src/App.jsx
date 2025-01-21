import { useForm } from 'react-hook-form'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  function onSubmit(data) {
    console.log("Submitting The Form the Data is: ", data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name: </label>
          <input {...register('firstName')} />
        </div>
        <br />
        <div>
          <label>Middle Name: </label>
          <input {...register('middleName')} />
        </div>
        <br />
        <div>
          <label>Last Name: </label>
          <input {...register('lastName')} />
        </div>
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App
