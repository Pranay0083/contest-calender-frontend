import ContestData from './data';
import FilteredContestList from './filterandcards';

function Home({ isLogin }) {
    const contestDataAvailable = ContestData.data && ContestData.data.objects;
    return (
      <>
        {contestDataAvailable ? (
          <FilteredContestList
            data={ContestData.data}
            buttonData={ContestData.buttonData}
            platformNames={ContestData.platformNames}
            platformImages={ContestData.platformImages}
            isLogin={isLogin}
          />
        ) : (
          <div className='loader-container'>
            <div className='loader'></div>
          </div>
        )}
      </>
    );
  }

  export default Home;