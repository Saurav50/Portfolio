import styles from "./Projects.module.css";
import Expense_Tracker from "../assets/Expense_Tracker.png";
import Good_Quotes from "../assets/Good_Quotes.png";
import Meals_Kart from "../assets/Meals_Kart.png";
import To_Do_List from "../assets/To_Do_List.png";
import ProjectItem from "../components/ProjectItem";
import Pig_Game from "../assets/Pig_Game.png";
import Fylo_Langing_Page from "../assets/Fylo_Langing_Page.png";

const projects_List = [
  {
    id: 1,
    name: "Expense Tracker",
    image: Expense_Tracker,
    text: "An expense tracker made using react",
    githubLink: "https://github.com/Saurav50/Expense-Tracker",
    DemoLink: "https://expense-tracker-saurav50.vercel.app/",
  },
  {
    id: 2,
    name: "Meals Kart",
    image: Meals_Kart,
    text: "A Meals ordering website made using react",
    githubLink: "https://github.com/Saurav50/Meals_Kart",
    DemoLink: "https://meals-kart-e6wev1zof-saurav50.vercel.app/",
  },
  {
    id: 3,
    name: "Great Quotes",
    image: Good_Quotes,
    text: "Awesome Quotes website made using react",
    githubLink: "https://github.com/Saurav50/Good-Quotes",
    DemoLink: "https://good-quotes.vercel.app/Quotes",
  },
  {
    id: 4,
    name: "To Do List",
    image: To_Do_List,
    text: "A To Do List application made using react",
    githubLink: "https://github.com/Saurav50/To-Do-List",
    DemoLink: "https://earnest-semolina-445a78.netlify.app/",
  },
  {
    id: 5,
    name: "Pig Game",
    image: Pig_Game,
    text: "A javascript based game website",
    githubLink: "https://github.com/Saurav50/Pig-game",
    DemoLink: "https://saurav50.github.io/Pig-game/",
  },
  {
    id: 6,
    name: "Fylo Landing Page",
    image: Fylo_Langing_Page,
    text: "Landing page for a fictional company called Fylo.",
    githubLink: "https://github.com/Saurav50/Fylo-Landing-Page",
    DemoLink: "https://saurav50.github.io/Fylo-Landing-Page/",
  },
];

const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <h1>My Projects</h1>
      <div className={styles.projectList}>
        {projects_List.map((item) => {
          return <ProjectItem key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
