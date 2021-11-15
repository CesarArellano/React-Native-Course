import { useState } from "react"

export const Forms = () => {

  const [formValues, setFormValues] = useState({
    email: 'test@test.com',
    password: '123456'
  });

  const onChange = ( field:string, value: string ) => {
    setFormValues({
      ...formValues,
      [field]: value // Corchetes para computar la propiedad, para reemplazar con el field.
    });
  };

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="email"
        className="form-control" 
        placeholder= "Email"
        name="email"
        value={ formValues.email }
        onChange={ ({ target }) => onChange(target.name, target.value) } />
      <input
        type="password"
        className="form-control mt-2" 
        placeholder= "Password"
        name="password"
        value={ formValues.password }
        onChange={ ({ target }) => onChange(target.name, target.value) }/>

      <code className="mt-2">
        <pre>{ JSON.stringify(formValues, null, 2) }</pre>
      </code>
    </>
  )
}
