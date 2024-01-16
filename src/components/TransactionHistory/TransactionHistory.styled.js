import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin-top: 50px;
	margin-bottom: 50px;
  margin-right: auto;
  margin-left: auto;
  width: 600px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  border: 2px grey solid;
  border-radius: 10px;
	background-color: white;
	box-shadow: 2px 2px 4px black;
	thead {
  color: #ffffff;
  background-color: green;
	}
tr:nth-child(2n+2) {
		background-color: #d3d3d3;
}
`;