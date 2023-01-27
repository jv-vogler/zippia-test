/**
 * Since this is a very simple project I'm using the Styled components within the same file.
 * 
 * Also added the expected Props type toe the JobCard component to get autocompletion when creating
 * them.
 */

import styled from 'styled-components';

const Li = styled.li`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
`

const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const H2 = styled.h2`
  font-size: 1rem;
  font-weight: bold;
`;

const P = styled.p`
  padding-top: 1rem;
  color: #777;
  font-weight: 400;
`;

type Props = {
  jobTitle: string;
  jobCompany: string;
  jobDescription: string;
};

const JobCard: React.FC<Props> = ({ jobTitle, jobCompany, jobDescription }) => {
  return (
    <Li>
      <H1>{jobTitle}</H1>
      <H2>{jobCompany}</H2>
      <P>{jobDescription}</P>
    </Li>
  );
};
export default JobCard;
