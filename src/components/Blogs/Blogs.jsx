import blogImg1 from "../../../public/images/blog_1.png";
import blogImg2 from "../../../public/images/blog_2.png";
import blogImg3 from "../../../public/images/blog_3.png";
import BlogCard from "../BlogCard/BlogCard";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      blogImg: blogImg1,
      title: "Houten Speelhuisje WT M22",
      description:
        "Ontdek de nieuwste trends in elektrische badkamerradiatoren | MijnBadkamerSpiegel.nl Ontdek de nieuwste trends in elektrische badkamerradiatoren Als je ooit je...",
      date: "Mar 31, 2024",
      hash: "Playhouse",
    },
    {
      id: 2,
      blogImg: blogImg2,
      title: "Houten Speelhuisje WT M 17 Maritiem Blauw",
      description:
        "Ontdek de Magie van de Badkamerspiegel Rond Frameloos 80 cm met Anti-Condens & Dimbaar LED Ontdek de magie van de...",
      date: "Mar 31, 2024",
      hash: "OutdorePlayhouse",
    },
    {
      id: 3,
      blogImg: blogImg3,
      title: "Houten Speelhuisje WT M22",
      description:
        "Hoe hang je jouw badkamerspiegel op: Een persoonlijke gids van MijnBadkamerSpiegel.nl Hoe hang je jouw badkamerspiegel op: Een persoonlijke gids...",
      date: "Mar 31, 2024",
      hash: "Playhouse",
    },
  ];
  return (
    <div className="mt-44">
      <div className="flex justify-center">
        <div className="max-w-[463px]">
          <h2 className="text-center text-4xl font-bold">Blogs</h2>
          <p className="mt-2">
            Benieuwd naar de nieuwste blogs en trends over speelhuizen?
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mt-12 flex flex-wrap justify-center xl:flex xl:justify-center gap-7">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog}></BlogCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
