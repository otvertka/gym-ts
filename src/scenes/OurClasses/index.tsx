import { IClassesInfo, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import ClassCard from "./ClassCard";


const classList: Array<IClassesInfo> = [
    {
        name: "Pilates Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum qui dolores iste earum fugit",
        image: image1
    },
    {
        name: "Yoga Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum qui dolores iste earum fugit",
        image: image2
    },
    {
        name: "Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum qui dolores iste earum fugit",
        image: image3
    },
    {
        name: "Adventure Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum qui dolores iste earum fugit",
        image: image4
    },
    {
        name: "Fitness Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum qui dolores iste earum fugit",
        image: image5
    },
    {
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum qui dolores iste earum fugit",
        image: image6
    },
]

type OurClassesProps = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: OurClassesProps) => {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-40">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }} >
                    <div className="md:w-3/5">
                        <HText>Our classes</HText>
                        <p className="py-5">
                            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                            tellus quam porttitor. Mauris velit euismod elementum arcu neque
                            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                            enim mattis odio in risus nunc.</p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classList.map((item: IClassesInfo, index) => (
                            <ClassCard
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>

            </motion.div>
        </section >
    )
}

export default OurClasses