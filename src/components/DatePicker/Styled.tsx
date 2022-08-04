import DP from 'react-datepicker';
import styled from 'styled-components';

import { BORDER, PADDINGS, color, inputLabelCss } from '../../styles';

const Styled = {
	$: styled(DP)`
		height: 42px;
		width: 100%;
		background: ${color('Bg')};
		color: ${color('White')};
		border: 2px solid ${color('Grey')};
		border-radius: ${BORDER.radius};
		padding: 4px 10px;
	`,
	Wrapper: {
		$: styled.div`
			display: flex;
			flex-direction: column;

			.react-datepicker {
				border: 1px solid ${color('Grey')};
				border-radius: ${BORDER.radius};
				background: ${color('Bg')};
				color: ${color('White')};

				&__header {
					background: ${color('Bg')};
				}

				&__current-month {
					color: ${color('White')};
				}

				&__day-name {
					color: ${color('White')};
				}

				&__day {
					color: ${color('White')};
				}

				&__triangle {
					display: none;
				}

				&__day--keyboard-selected,
				&__month-text--keyboard-selected,
				&__quarter-text--keyboard-selected,
				&__year-text--keyboard-selected {
					border-radius: ${BORDER.radius};
					background: ${color('Bg')};
					color: ${color('White')};
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
					border-radius: ${BORDER.radius};
					background: ${color('Bg')};
					color: ${color('White')};
					box-shadow: 0 0 0px 2px ${color('Main')};
				}

				&__year-dropdown,
				&__month-dropdown,
				&__month-year-dropdown {
					background: ${color('Bg')};
					border-radius: ${BORDER.radius};
					border: 1px solid ${color('Grey')};
				}

				&__year-read-view,
				&__month-read-view,
				&__month-year-read-view {
					border: 1px solid transparent;
					border-radius: ${BORDER.radius};
					position: relative;
					padding: ${PADDINGS.Small} 0;
					display: flex;
					align-items: center;
					gap: ${PADDINGS.Small};
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
						background: ${color('Main')};
					}
				}

				/* HOVER */

				&__day:hover,
				&__month-text:hover,
				&__quarter-text:hover,
				&__year-text:hover {
					border-radius: ${BORDER.radius};
					box-shadow: 0 0 0px 2px ${color('Grey')};
					background-color: transparent;
				}

				&__year-option:hover,
				&__month-option:hover,
				&__month-year-option:hover {
					background-color: ${color('Grey')};
				}
			}
		`,
	},
	Label: {
		$: styled.div`
			margin-bottom: ${PADDINGS.Small};
			${inputLabelCss}
		`,
	},
};

export default Styled;
