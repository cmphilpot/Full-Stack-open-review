
interface PersonProps {
    name: string,
    phoneNumber: string
}

const Person = ({ name, phoneNumber }: PersonProps) => {
    return <li>{name}: {phoneNumber}</li>
  }
  
export default Person;