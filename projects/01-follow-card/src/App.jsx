import './App.css';
import { FollowCard } from './FollowCard';

const users = [
	{
		userName: 'sandandsea',
		name: 'Sand & Sea',
		followState: false,
	},
	{
		userName: 'eltonmust',
		name: 'Elton MustS',
		followState: false,
	},
	{
		userName: 'juacallo',
		name: 'Juan C. Roncallo',
		followState: true,
	},
	{
		userName: 'midudev',
		name: 'Miguel Ángel Durán',
		followState: true,
	},
];

export const App = () => {
	const formatUserName = (user) => `@${user}`;
	return (
		<section className="App-FollowCard">
			{users.map((user) => {
				const { userName, name, followState } = user;
				return (
					<FollowCard
						key={userName}
						userName={userName}
						formatUserName={formatUserName}
						followState={followState}
					>
						{name}
					</FollowCard>
				);
			})}
		</section>
	);
};
