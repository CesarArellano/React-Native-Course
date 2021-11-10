interface Person {
  fullName: string,
  age: number,
  address: Address
}

interface Address {
  country: string,
  houseNumber: number
}

export const ObjectLiterals = () => {
  const person: Person = {
    fullName: 'César',
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
