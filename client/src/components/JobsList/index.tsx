/**
 * I chose a 'spinner' library to give a visual feedback to the user while data is being fetched.
 * Also displaying an error message in case the fetching fails.
 *
 * It would have been great if I used libraries like jest and react-testing-library to test this
 * component instead of making the API calls directly, but I still need more experience with that.
 *
 * At least the problems of this is minimized by react-query's caching and vite's hot reloading.
 */

import { useQuery } from 'react-query';
import { MagnifyingGlass } from 'react-loader-spinner';
import styled from 'styled-components'
import JobCard from '../JobCard';

const SpinnerContainer = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  height: 100%;
  width: 100%;
`

const JobsList: React.FC = () => {
  const { data, error, isLoading } = useQuery('jobsData', async () => {
    const res = await fetch('/test/jobs');
    return res.json();
  });

  if (isLoading) {
    return (
      <SpinnerContainer>
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#ff6000"
        />
      </SpinnerContainer>
    );
  }

  if (error) return <p>Something went wrong...</p>;

  return (
    <ul>
      {data.jobs.map(
        (job: { jobId: string; jobTitle: string; companyName: string; jobDescription: string }) => (
          <JobCard
            key={job.jobId}
            jobTitle={job.jobTitle}
            jobCompany={job.companyName}
            jobDescription={job.jobDescription}
          />
        )
      )}
    </ul>
  );
};
export default JobsList;
