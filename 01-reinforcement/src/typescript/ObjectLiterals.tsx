export const ObjectLiterals = () => {
  const person = {
    name: 'César',
    age: 21,
    address: {
      country: 'México',
      houseNumber: 6
    }
  }

  return (
    <>
      <h3>Object Literals</h3>
      <code>
        <pre>
          { JSON.stringify(person, null, 2) }
        </pre>
      </code>
    </>
  )
}
