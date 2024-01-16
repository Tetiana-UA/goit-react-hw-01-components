import { FriendListItem } from "./FriendListItem";
import { FriendsList } from "./FriendList.styled";



export const FriendList = ({friends=[]}) => {
    const elements=friends.map(friend=><FriendListItem key={friend.id} name={friend.name} avatar={friend.avatar} isOnline={friend.isOnline}/>);

    return (
<FriendsList>
  {elements}
</FriendsList>
    )
}