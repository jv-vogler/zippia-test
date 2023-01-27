/**
 * I chose a "spinner" library to give a visual feedback to the user while data is being fetched as
 * I wasn't able to implement Server Side Rendering. Will also display an error message in case
 * the fetch fails.
 *
 * It would have been great if I used libraries like jest and react-testing-library to test this
 * component instead of making the API calls directly, but I still need more experience with that.
 *
 * At least this problem is minimized by react-query's caching and vite's hot reloading.
 */

import { useQuery } from 'react-query';
import { MagnifyingGlass } from 'react-loader-spinner';
import moment from 'moment';
import styled from 'styled-components';
import JobCard from '../JobCard';

const SpinnerContainer = styled.div`
  display: flex;
  place-content: center;
  place-items: center;
  height: 100%;
  width: 100%;
`;

type Props = {
  companySearch: string;
  toggleRecent: boolean;
};

const JobsList: React.FC<Props> = ({ companySearch, toggleRecent }) => {
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
    <main>
      <ul>
        {/*
          First I filter based on the 'recent' jobs posted on the last 3 days. I ended up finding the
          library 'moment' as it simplifies the process of finding the difference between two dates.
      
          Then I filter based on the search input and finally I use the map function to list all of 
          the remaining jobs because instead of mutating, it returns a new array.
        */}
        {data.jobs
          .filter((job: { postingDate: string }) => {
            const postDate = moment(job.postingDate);
            const currentDate = moment();
            const differenceInDays = currentDate.diff(postDate, 'days');
            if (!toggleRecent) {
              return job;
            } else if (differenceInDays <= 3) {
              return job;
            }
          })
          .filter((job: { companyName: string }) => {
            if (companySearch === '') {
              return job;
            } else if (job.companyName.toLowerCase().includes(companySearch.toLowerCase())) {
              return job;
            }
          })
          .map(
            (job: {
              jobId: string;
              jobTitle: string;
              companyName: string;
              jobDescription: string;
              postedDate: string;
            }) => (
              <JobCard
                key={job.jobId}
                jobTitle={job.jobTitle}
                jobCompany={job.companyName}
                jobDescription={job.jobDescription}
                postedDate={job.postedDate}
              />
            )
          )}
      </ul>
    </main>
  );
};
export default JobsList;
