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
          <input {...register('firstName', 
            { 
              required: true, 
              maxLength: 20, 
              minLength: {value: 2, message: "First name should be at least 2 characters long"} 
              })} />
              {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <br />
        <div>
          <label>Middle Name: </label>
          <input {...register('middleName', 
          { 
            required: true, 
            maxLength: 20, 
            minLength: {value: 2, message: "Middle name should be at least 2 characters long"} 
          })} />
          {errors.middleName && <p>{errors.middleName.message}</p>}
        </div>
        <br />
        <div>
          <label>Last Name: </label>
          <input {...register('lastName', 
            {
             required: true, 
             maxLength: 20, 
             minLength: {value: 2, message: "Last name should be at least 2 characters long"} 
            })} />
            {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App
