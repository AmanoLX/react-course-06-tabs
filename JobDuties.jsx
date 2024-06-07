import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const JobDuties = ({ company, dates, duties, title, order }) => {
  // console.log(duties);
  const id = uuidv4();
  return (
    <div>
      {duties.map((duty, id) => {
        return (
          <div key={id} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
export default JobDuties;
