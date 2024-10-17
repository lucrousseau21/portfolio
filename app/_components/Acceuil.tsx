import { Section } from "./Section";
import Image from "next/image";

export const Acceuil = () => {
  return (
    <Section className="flex max-lg:flex-col items-start">
      <div className="flex-[2]">
        <h2>Luc Rousseau</h2>
        <h3>Student Web Developer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          veritatis nihil harum sapiente perspiciatis reiciendis temporibus,
          fuga error delectus iusto corrupti aperiam, inventore, repudiandae
          obcaecati necessitatibus deserunt magnam nemo laboriosam!
        </p>
      </div>
      <div className="flex-1">
        {/* <img
          src="http://luc-rousseau.com/media/portrait1.png"
          alt="image luc rousseau"
          className="w-full h-auto"
        /> */}
        <Image
          src="/images/IMG_2693-min.jpg" 
          alt="image luc rousseau"
          width={500} 
          height={300} 
          className="w-full h-auto"
        />
      </div>
    </Section>
  );
};
