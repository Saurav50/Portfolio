import ProjectCard from "./UI/ProjectCard";
import styles from "./ProjectItem.module.css";
import RightArrowIcon from "./UI/RightArrowIcon";
const ProjectItem = (props) => {
  return (
    <ProjectCard>
      <h1>{props.item.name}</h1>
      <img src={props.item.image} alt="Project_Image" className={styles.img} />
      <p className={styles.text}>{props.item.text}</p>
      <div className={styles.links}>
        <a href={props.item.githubLink}>
          Github{" "}
          <span>
            <RightArrowIcon />
          </span>
        </a>
        <a href={props.item.DemoLink}>
          Demo{" "}
          <span>
            <RightArrowIcon />
          </span>
        </a>
      </div>
    </ProjectCard>
  );
};
export default ProjectItem;
