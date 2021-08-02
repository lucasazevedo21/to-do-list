import styled from 'styled-components'

export const InputContainer = styled.form`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin: 3rem auto;

	input {
		border: 1px solid #747171;
		border-radius: 5px;

		height: 40px;
		width: 100%;
		padding-left: 10px;
		margin-right: 5px;

		font-size: 1rem;
		outline-color: #4361ee;
	}

	button {
		border: 1px solid #04e762;
		border-radius: 5px;
		width: 4rem;
		height: 40px;
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
	margin: 0 auto;

	width: 100%;

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin-bottom: 1rem;

		p {
			font-size: 1.2rem;
			font-weight: 500;
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

	ul {
		width: 100%;
	}
`
