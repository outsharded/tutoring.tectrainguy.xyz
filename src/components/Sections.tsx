import Image from 'next/image'
import { motion } from 'framer-motion'
const SwiftDen = ({ section }) => {
	return (
		<motion.a
		href="mailto:fabian@tectrainguy.xyz"
		target="_blank"
		rel="noreferrer"
			className="col-span-3 md:col-span-2 bg-white dark:bg-slate-900
			 rounded-3xl text-gray-600 dark:text-gray-300 aspect-2/1 pb-4 md:pb-0"
			whileHover="groupHover"
			animate={{ opacity: ['all', 'contact'].includes(section) ? 1 : 0.3 }}
			variants={{
				groupHover: {
					scale: 1.01,
					transition: {
						duration: 0.1,
						ease: 'easeInOut',
					},
				},
			}}
		>
			<div className="relative overflow-hidden">

				<div>
	
					<div className="text-3xl md:text-4xl 2xl:text-4xl 2xl:mt-16 m-6 md:ml-6 ml-5 md:m-8 font-nunito font-bold">Sections</div>
				</div>
				<div className="flex flex-col ml-5 justify-center 2xl:mt-10 sm:-mt-6 sm:ml-8 md:ml-6">
					<div className="flex lg:text-xl xl:text-2xl 2xl:text-2xl font-base dark:text-gray-300 mt-5">
						Tinkering: Using Micro:Bit with components to connect computers to the real world. (Beginner) <br></br><br></br>
						General purpose programming: Learn python, one of the most common programming languages. (Medium) <br></br><br></br>
						Front-end web: Learn how websites are programmed, and how they are styled using HTML and CSS. (Medium) <br></br><br></br>
						Back end web: Learn about databases, and working with what powers the web using Javascript. (Experienced) <br></br><br></br>
					</div>
				</div>
			</div>
		</motion.a>
	)
}

export default SwiftDen
