import { css } from 'lit-element'

export const notificationStyles = css`
	div {
		transition: all 0.5s ease-in-out;
		top: 20px;
		font-size: 1.6rem;
		right: 10px;
		opacity: 0.9;
		border-radius: 6px;
		position: fixed;
		background-color: #fef08a;
		padding: 10px 30px;
	}

	.show {
		animation: show 12s ease-in-out;
	}

	.close-button {
		cursor: pointer;
		display: grid;
		place-content: center;
		top: -25px;
		left: -15px;
		height: 30px;
		width: 30px;
		border-radius: 100%;
		background-color: #dc2626;
		color: white;
		position: absolute;
	}

	.close-button:hover {
		transform: scale(0.9);
		transition: scale 0.5s ease-in-out;
	}

	@keyframes show {
		0% {
			opacity: 0;
		}
		10% {
			opacity: 0.9;
		}
		90% {
			opacity: 0.9;
		}
		100% {
			opacity: 0;
		}
	}
`
