import React from "react";
import useApi from "./hooks/useApi";
import MemberList from "./components/MemberList";
import ScheduleList from "./components/ScheduleList";
import NewsList from "./components/NewsList";
import Navbar from "./components/Navbar";
import {LoadingProvider, useLoading} from "./context/LoadingContext";

const App = () => {
  return (
    <LoadingProvider>
      <Main />
    </LoadingProvider>
  );
};

const Main = () => {
  const {loading} = useLoading();
  const {data: members, error: memberError} = useApi("member");
  const {data: schedule, error: scheduleError} = useApi("schedule");
  const {data: berita, error: beritaError} = useApi("news");

  if (loading) return <p>Loading...</p>;
  if (memberError) return <p>Error fetching members: {memberError.message}</p>;
  if (scheduleError)
    return <p>Error fetching schedule: {scheduleError.message}</p>;
  if (beritaError)
    return <p>Error fetching news: {beritaError.message}</p>;

  return (
    <div className="wrapper text-white">
      <Navbar />
      <h2 className="text-center text-2xl mb-4">Members</h2>
      <MemberList members={members} />
      <h2 className="text-center text-2xl mb-4">Schedule</h2>
      <ScheduleList schedule={schedule} />
      <h2 className="text-center text-2xl mb-4">News</h2>
      <NewsList berita={berita} />
    </div>
  );
};

export default App;
