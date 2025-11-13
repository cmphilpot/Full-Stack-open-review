
interface FilterProps {
    newFilter: string,
    handleFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Filter = ({ newFilter, handleFilter }: FilterProps) => {
    return <input value={newFilter} onChange={handleFilter} />
}
  
export default Filter;