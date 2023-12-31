import styled from 'styled-components';

export const LoginPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: calc(100vh - 50px);
`;

export const MoaPickLogo = styled.div`
	width: 200px;
	height: 200px;
	background-color: #fbd9ea;
`;
export const LoginButtonContainer = styled.div`
	cursor: pointer;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	margin: 100px auto 0 auto;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
	border-radius: 5px;
	width: fit-content;
	padding: 0 10px 0 0;
	height: 50px;
	font:
		17px 'Roboto',
		sans-serif;
`;
