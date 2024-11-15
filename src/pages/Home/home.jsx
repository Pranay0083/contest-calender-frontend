import { useEffect, useState } from "react";
import FilteredContestList from "../../components/Features/filterandcards";
import { getContest } from "../../api/contest";
import { buttonData, platformImages, platformNames } from "../../constants";
import { sortEventsByDate } from "../../utils/SortContests";

function Home({ isLogin }) {
  const [contestData, setContestData] = useState([]);
  useEffect(() => {
    try{
      getContest()
      .then(({objects}) => {
        sortEventsByDate(objects);
        setContestData(objects);
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
        />
      ) : (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
}

export default Home;
