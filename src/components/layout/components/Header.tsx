import Router, { useRouter } from "next/router";
import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { buttonAnimation } from "../../../utils/buttonAnimation";

const Header = () => {
	const { theme, setTheme } = useTheme();
	const router = useRouter();
	return (
		<div className="mx-3 px-3 flex items-center justify-between h-8 font-desc border-b-2 text-xs  border-black dark:border-white leading-loose">
			<motion.button
				whileTap="tap"
				whileHover="hover"
				variants={buttonAnimation}
				onClick={() => router.push("/")}
			>
				hyewon kwak
			</motion.button>
			{router.pathname === "/menu" ? (
				<motion.button
					whileTap="tap"
					whileHover="hover"
					variants={buttonAnimation}
					onClick={() => router.back()}
				>
					close
				</motion.button>
			) : (
				<div className="flex items-center">
					<motion.div
						onClick={() =>
							setTheme(theme === "dark" ? "light" : "dark")
						}
						className="flex items-center dark:justify-start justify-end
bg-black text-2xs dark:bg-white w-6 h-4 m-2 px-1 leading-3 rounded-full "
					>
						<motion.button layout>
							{theme === "dark" ? "🌞" : "🌝"}
						</motion.button>
					</motion.div>

					<motion.button
						whileTap="tap"
						whileHover="hover"
						variants={buttonAnimation}
						onClick={() => router.push("/menu")}
					>
						{router.pathname === "/"
							? "home"
							: router.pathname.replace("/", "")}
						/menu
					</motion.button>
				</div>
			)}
		</div>
	);
};

export default Header;
