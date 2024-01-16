import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
	background-color: white;
	box-shadow: 2px 2px 4px black;
  padding: 8px 16px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px grey solid;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};

`;

export const Avatar = styled.img`
  margin-left: 20px;
  width: 100px;
`;

export const Name = styled.p`
  margin-left: 20px;
  font-size: 30px;
`;