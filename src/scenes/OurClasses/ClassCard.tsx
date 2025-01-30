import { IClassesInfo } from "@/shared/types";

const ClassCard = ({ name, description, image }: IClassesInfo) => {
    const overlayStyles = `p-5 absolute z-30 flex 
        h-[340px] w-[450px] flex-col items-center justify-center
        whitespace-normal bg-zinc-800 text-center text-white
        opacity-0 transition duration-500 hover:opacity-80`;

    return (
        <li className="relative mx-5 inline-block h-[380px] w-[450px]">
            <div className={overlayStyles}>
                <p className="text-2xl">{name}</p>
                {description && <p className="mt-5">{description} </p>}
            </div>
            <img src={image} alt="class image" />
        </li>
    )
}

export default ClassCard