import { AnimateSharedLayout, motion, useAnimation } from "framer-motion";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Contact from "../../src/components/Contact";
const routes = [
  { key: "home", route: "/" },
  { key: "about", route: "/about" },
  { key: "project", route: "/project" },
  { key: "experience", route: "/experience" },
];
const Menu: NextPage = () => {
  const router = useRouter();

  const numbers = {
    show: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.3,
        duration: 0.8,
      },
    }),
    hidden: { opacity: 0, y: -30 },
  };

  const underline = {
    hover: {opacity : 1, width: "100%"},
    hidden: {opacity : 0, width: 0}
  }

  return (
    <AnimateSharedLayout>
      <div className="conatiner flex-auto flex  flex-wrap sm:flex-col md:flex-col  items-center justify-center space-x-8 sm:space-y-2 sm:space-x-2  md:space-x-2 md:space-y-2  lg:space-x-4 xl:space-x-5 p-5">
        <div className="flex flex-col space-y-3  justify-center">
          {routes.map((route, index) => {
            return (
              <motion.button
                initial="hidden"
                onClick={() => {
                  router.push(route.route);
                }}
                key={route.key}
                className="relative flex"
              >
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={numbers}
                  custom={index}
                  className="font-desc break-normal"
                >
                  0{index + 1}
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={numbers}
                  custom={index}
                  className="group font-subTitle relative text-6xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl ml-5 sm:ml-2 md:ml-2 lg:ml-2 xl:ml-2"
                >
                  {route.key}
                  <motion.div
                    key={index}
                    variants={underline}
                    className="back-underline absolute bottom-0 w-full flex flex-auto left-0 h-2 bg-blue"
                  ></motion.div>
                </motion.div>
              </motion.button>
            );
          })}
        </div>
        <Contact />
      </div>
    </AnimateSharedLayout>
  );
};
export default Menu;
