import DP from "/Image/Dp.jpg";

function about() {
  return (
    <>
      <div className="bg-black  text-white min-h-screen py-2">
        <div className=" flex justify-center ">
          <img
            src={DP}
            alt=""
            className="w-2/4 h-2/4 rounded-full  border-white border-4 "
          />
        </div>
        <div className="flex justify-center py-5 ">
          <h1 className="font-semibold text-xl">Rishabh Nirmalkar</h1>
        </div>
        <div className="flex justify-center px-4 min-h-screen text-lg mb-16 text-justify	">
          <p>
            Hello everyone, my name is Rishabh Nirmalkar, and I am a web
            developer with a bit of knowledge in UI and UX. As an engineering
            graduate, I am passionate about technology, and as an individual, I
            consider myself creative. I enjoy thinking creatively in various
            fields and am a bit introverted, but that doesn't affect my work.
            <br />
            Speaking of my educational journey, I am currently a final-year
            B.Tech student. Throughout my academic career, I have been an
            average student, but my passion for technology and creativity has
            always driven me.
            <br />
            In terms of experience, I initially worked at a company called
            MRMINT as a Social Media Manager, which marked the beginning of my
            professional journey. Subsequently, I collaborated with some
            friends' startups, working as a freelancer to develop websites as
            per client requirements and handle social media.
            <br />
            If you want to know more about me, please feel free to reach out.
          </p>
        </div>
      </div>
    </>
  );
}

export default about;
