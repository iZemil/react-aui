import { toast } from 'react-hot-toast';

/**
 * @docs: https://react-hot-toast.com/
 */
export const useSnacks = () => {
	const snackOk = toast.success;
	// TODO: isNestError handling
	const snackError = (message: string | string[]) => toast.error(String(message));

	return {
		snackOk,
		snackError,
		snack: toast,
	};
};
