import styled from 'styled-components';

export const FloatingButtonWrapper = styled.button`
	position: fixed;
	width: 80px;
	height: 40px;
	bottom: 40px;
	right: 50%;
	transform: translateX(50%);
	border-radius: 10px;
	background-color: #fff;
	box-shadow: 0 0 10px rgba(176, 176, 176, 0.2);
	z-index: 1;
`;
