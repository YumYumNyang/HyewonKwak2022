import Router, { useRouter } from "next/router";
import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { buttonAnimation } from "../../../utils/buttonAnimation";

const Header = () => {
	const { theme, setTheme } = useTheme();
	const router = useRouter();
	return (
		<div className="flex items-center justify-between h-8 px-3 mx-3 text-xs leading-loose border-b-2 border-black font-desc dark:border-white">
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
						className="flex items-center justify-end w-6 h-4 px-1 m-2 leading-3 bg-black rounded-full dark:justify-start text-2xs dark:bg-white "
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
