import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import userData from '../data/user.json';
import statistics from '../data/statistics.json';
import friends from '../data/friends.json';
// import { }

export const App = () => {
  return (
    <>
      <Profile {...userData} />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
    </>
  );
};
