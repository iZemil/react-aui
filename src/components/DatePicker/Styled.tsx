import DP from 'react-datepicker';
import styled from 'styled-components';

import { borderRadius, color, inputLabelCss, padding } from '../../styles';

const Styled = {
	$: styled(DP)`
		height: 42px;
		width: 100%;
		background: ${color('bg')};
		color: ${color('white')};
		border: 2px solid ${color('grey')};
		border-radius: ${borderRadius};
		padding: 4px 10px;
	`,
	Wrapper: {
		$: styled.div`
			display: flex;
			flex-direction: column;

			.react-datepicker {
				border: 1px solid ${color('grey')};
				border-radius: ${borderRadius};
				background: ${color('bg')};
				color: ${color('white')};

				&__header {
					background: ${color('bg')};
				}

				&__current-month {
					color: ${color('white')};
				}

				&__day-name {
					color: ${color('white')};
				}

				&__day {
					color: ${color('white')};
				}

				&__triangle {
					display: none;
				}

				&__day--keyboard-selected,
				&__month-text--keyboard-selected,
				&__quarter-text--keyboard-selected,
				&__year-text--keyboard-selected {
					border-radius: ${borderRadius};
					background: ${color('bg')};
					color: ${color('white')};
				}

				&__day--selected,
				&__day--in-selecting-range,
				&__day--in-range,
				&__month-text--selected,
				&__month-text--in-selecting-range,
				&__month-text--in-range,
				&__quarter-text--selected,
				&__quarter-text--in-selecting-range,
				&__quarter-text--in-range,
				&__year-text--selected,
				&__year-text--in-selecting-range,
				&__year-text--in-range {
					border-radius: ${borderRadius};
					background: ${color('bg')};
					color: ${color('white')};
					box-shadow: 0 0 0px 2px ${color('main')};
				}

				&__year-dropdown,
				&__month-dropdown,
				&__month-year-dropdown {
					background: ${color('bg')};
					border-radius: ${borderRadius};
					border: 1px solid ${color('grey')};
				}

				&__year-read-view,
				&__month-read-view,
				&__month-year-read-view {
					border: 1px solid transparent;
					border-radius: ${borderRadius};
					position: relative;
					padding: ${padding('small')} 0;
					display: flex;
					align-items: center;
					gap: ${padding('small')};
					font-size: 14px;
				}

				&__year-read-view--down-arrow,
				&__navigation--years {
					display: none;
				}

				&__year-option,
				&__month-option,
				&__month-year-option {
					display: flex;
					align-items: center;
					justify-content: center;

					&--selected,
					&--selected,
					&--selected {
						font-size: 0;
						width: 5px;
						height: 5px;
						border-radius: 100%;
						background: ${color('main')};
					}
				}

				/* HOVER */

				&__day:hover,
				&__month-text:hover,
				&__quarter-text:hover,
				&__year-text:hover {
					border-radius: ${borderRadius};
					box-shadow: 0 0 0px 2px ${color('grey')};
					background-color: transparent;
				}

				&__year-option:hover,
				&__month-option:hover,
				&__month-year-option:hover {
					background-color: ${color('grey')};
				}
			}
		`,
	},
	Label: {
		$: styled.div`
			margin-bottom: ${padding('small')};
			${inputLabelCss}
		`,
	},
};

export default Styled;
