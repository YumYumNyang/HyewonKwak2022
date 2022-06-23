import React, {
	useState,
	createContext,
	useCallback,
	ReactElement,
} from "react";
import gsap from "gsap";

type ProviderProps = {
	children: ReactElement;
};

const TransitionContext = createContext<any>({});

const TransitionProvider = ({ children }: ProviderProps) => {
	const [timeline, setTimeline] = useState(() =>
		gsap.timeline({ paused: true })
	);

	return (
		<TransitionContext.Provider
			value={{
				timeline,
				setTimeline,
			}}
		>
			{children}
		</TransitionContext.Provider>
	);
};

export { TransitionContext, TransitionProvider };
