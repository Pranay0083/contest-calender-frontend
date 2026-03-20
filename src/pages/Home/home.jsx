import { useEffect, useState } from "react";
import FilteredContestList from "../../components/Features/filterandcards";
import { getContest } from "../../api/contest";
import { buttonData, platformImages, platformNames } from "../../constants";
import { sortEventsByDate } from "../../utils/SortContests";

function Home({ isLogin }) {
  const [contestData, setContestData] = useState([]);
  const [lastScraped, setLastScraped] = useState(null);
  useEffect(() => {
    try{
      getContest()
      .then(({objects, lastScraped}) => {
        sortEventsByDate(objects);
        setContestData(objects);
        setLastScraped(lastScraped);
      });
    }
    catch(err){
      
    }

  }, []);
  // const contestDataAvailable = ContestData.data && ContestData.data.objects;
  return (
    <>
      {contestData.length > 0 ? (
        <FilteredContestList
          data={contestData}
          buttonData={buttonData}
          platformNames={platformNames}
          platformImages={platformImages}
          isLogin={isLogin}
          lastScraped={lastScraped}
        />
      ) : (
        <div className="loader-container">
          <div className="loader"></div>
          <p className="loader-text">Server is waking up, this may take a moment...</p>
        </div>
      )}
    </>
  );
}

export default Home;
