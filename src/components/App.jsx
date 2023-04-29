import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import userData from '../data/user.json';
import statistics from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
