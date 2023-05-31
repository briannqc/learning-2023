import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos,
        porro sit quam, exercitationem similique asperiores blanditiis eveniet
        odit expedita illo voluptates repudiandae, rem vero corporis distinctio
        dolores saepe nostrum.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
