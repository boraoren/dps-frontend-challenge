import { RefObject, useEffect } from 'react';

type UseScrollEndOptions = {
	onScrollEnd: () => void;
	offset?: number; // Optional buffer before reaching bottom
};

const useScrollEnd = (
	ref: RefObject<HTMLElement>,
	{ onScrollEnd, offset = 0 }: UseScrollEndOptions
) => {
	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		const handleScroll = () => {
			const { scrollTop, clientHeight, scrollHeight } = element;
			const atBottom = scrollTop + clientHeight >= scrollHeight - offset;
			if (atBottom) {
				onScrollEnd();
			}
		};

		element.addEventListener('scroll', handleScroll);
		return () => {
			element.removeEventListener('scroll', handleScroll);
		};
	}, [ref, onScrollEnd, offset]);
};

export default useScrollEnd;
