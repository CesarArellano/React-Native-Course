export const BasicTypes = () => {
  let name:string | number = 'César';
  const age: number = 21;
  const isActive: boolean = false;
  const powers: string[] = ['Speed', 'Fly', 'Breathing underwater'];

  powers.push('Fire');

  return (
    <>
      <h3>Tipos básicos</h3>
      { name }, { age }, { (isActive) ? 'active' : 'inactive' }
      <br />
      { powers.join(', ')}
    </>
  )
}
