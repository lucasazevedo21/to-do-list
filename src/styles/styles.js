import styled from 'styled-components'

export const Title = styled.h1`
	text-align: center;
	font-size: 2.7rem;
	margin-top: 2rem;
	color: #4361ee;
`

export const InputContainer = styled.form`
	display: flex;
	justify-content: center;
	width: 700px;
	margin: 3rem auto;

	input {
		display: block;
		border: 1px solid #747171;
		border-radius: 5px;
		padding: 10px;
		width: 100%;
		margin-right: 5px;
		font-size: 1rem;
		outline-color: #4361ee;
	}

	button {
		border: 1px solid #04e762;
		border-radius: 5px;
		padding: 10px;
		width: 90px;
		background: #04e762;
		color: #fff;
		font-size: 1rem;
		cursor: pointer;

		:hover {
			opacity: 0.8;
			transition: 0.3s;
		}
	}
`

export const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 700px;
		margin-bottom: 1rem;

		p {
			font-size: 1.2rem;
		}

		button {
			border: 1px solid #e9190f;
			border-radius: 5px;
			padding: 5px;
			width: 80px;
			background: #e9190f;
			color: #fff;
			font-size: 1rem;
			cursor: pointer;

			:hover {
				opacity: 0.8;
				transition: 0.3s;
			}
		}
	}
`

export const Footer = styled.footer`
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	margin: 3rem;
	text-align: center;

	p {
		font-size: 1.3rem;
		color: #4361ee;
	}
`
