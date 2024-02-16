import { useState } from 'react';

export const FollowCard = ({ children, formatUserName, userName }) => {
	const [followState, setFollowState] = useState(false);

	const imageScr = `https://unavatar.io/${userName}`;
	const buttonText = followState ? 'Following' : 'Follow';
	const buttonClassName = followState ? 'followCard-followButton is-following' : 'followCard-followButton';

	const handleFollowing = () => {
		setFollowState(!followState);
	};

	return (
		<article className="followCard-article">
			<header className="followCard-header">
				<img className="followCard-img" alt="A sea sand image" src={imageScr} />
				<div className="followCard-info">
					<strong>{children}</strong>
					<span className="followCard-infoUser">{formatUserName(userName)}</span>
				</div>
			</header>
			<aside>
				<button className={buttonClassName} onClick={handleFollowing}>
					<span className="followCard-defaultFollowing">{buttonText}</span>
					<span className="followCard-unfollow">Unfollow</span>
				</button>
			</aside>
		</article>
	);
};
