import styled from 'styled-components';

export const ProfileWraper = styled.div`
  display: block;
	margin-top: 20px;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  overflow: hidden;
  border: 2px grey solid;
  background-color: white;
  box-shadow: 2px 2px 4px black;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Image = styled.img`
  width: 100px;
`;

export const Name = styled.p`
	font-size: 24px;
	font-weight: 700;
  margin-top: 20px;
  margin-bottom: 0;
`;
export const Tag = styled.p`
	font-size: 18px;
	font-weight: 500;
  margin-top: 16px;
  margin-bottom: 0;
  color: grey;
`;

export const Location = styled.p`
  margin-top: 16px;
  margin-bottom: 0;
  color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  padding-left: 0;
  margin: 0;
`;

export const StatsItem = styled.li`
  box-sizing: border-box;
  width: 200px;
  height: 150px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-left: 1px grey solid;
  border-right: 1px grey solid;
  border-top: 2px grey solid;
  background-color: green;
`;

export const Label = styled.span`
  display: block;
  color: grey;
`;

export const Quantity = styled.span`
  display: block;
  font-weight: 700;
`;