import '../styles/story.scss';
import ProfileIcon from './ProfileIcon';
import users from '../data/users';

function Story() {
    let accountName = users[Math.floor(Math.random() * users.length)].name;

    if(accountName.length > 4) {
        accountName = accountName.substring(0, 4) + "...";
    }

    return (
        <div className="story">
            <ProfileIcon iconSize="big" storyBorder={ true } />
            <span className="accountName">{ accountName }</span>
        </div>
    );
}

export default Story;