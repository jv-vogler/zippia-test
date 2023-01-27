type Props = {
  jobTitle: string;
  jobCompany: string;
  jobDescription: string;
};

const JobCard: React.FC<Props> = ({ jobTitle, jobCompany, jobDescription }) => {
  return (
    <li>
      <h1>{jobTitle}</h1>
      <h2>{jobCompany}</h2>
      <p>{jobDescription}</p>
    </li>
  );
};
export default JobCard;
