import Part from './Part';
import type { PartType } from '../types';

interface ContentProps {
    parts: PartType[]
}

const Content = ({ parts }: ContentProps) => {
    return (
      <>
        {parts.map((part) => {
          return <Part 
                    key={part.id}
                    name={part.name} 
                    exercises={part.exercises}
                  />
        }
        )}
      </>
    )
}

export default Content;