import './App.css'
import {useForm} from 'react-hook-form'

const App = () => {

  const {register, handleSubmit, formState: {errors}} = useForm()

  const addUser = data => {
    console.log(data)
  }

  return <div>
    <h1>Signup</h1>
    <form 
      className="form"
      onSubmit={handleSubmit(addUser)}>
      {errors.first && <p className="error">first name is required...</p>}
      <div>
        <label>first name</label>
        <input 
          type="text" 
          {...register("first", {required: true})}
        />
      </div>
      <div>
        <label>last name</label>
        <input 
          type="text"
          {...register("last")}
        />
      </div>
      {errors.age && <p className="error">age must be a number between 18 and 30</p>}
      <div>
        <label>age</label>
        <input 
          type="text"
          {...register("age", {pattern:/[\d]/, required: true, min: 18, max: 30, })}
        />
      </div>
      <button>save</button>
    </form>
  </div>
}

export default App;
