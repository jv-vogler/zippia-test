import JobCard from '../JobCard';

const JobsList: React.FC = () => {
  return (
    <ul>
      <JobCard jobTitle="title" jobCompany="company" jobDescription="desc" />
    </ul>
  );
};
export default JobsList;
