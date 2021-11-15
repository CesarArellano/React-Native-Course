import { useForm } from '../hooks/useForm';

export const Forms = () => {
  const { formValues, handleOnChange } = useForm({
    email: 'test@test.com',
    password: '123456'
  });

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="email"
        className="form-control" 
        placeholder= "Email"
        value={ formValues.email }
        onChange={ ({ target }) => handleOnChange('email', target.value) } />
      <input
        type="password"
        className="form-control mt-2" 
        placeholder= "Password"
        value={ formValues.password }
        onChange={ ({ target }) => handleOnChange('password', target.value) }/>

      <code className="mt-2">
        <pre>{ JSON.stringify(formValues, null, 2) }</pre>
      </code>
    </>
  )
}
