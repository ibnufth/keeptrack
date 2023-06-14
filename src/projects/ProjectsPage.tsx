import { Fragment, useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import { Project } from "./Project";
import ProjectList from "./ProjectList";

function ProjectsPage() {
    const [projects, setProject] = useState<Project[]>(MOCK_PROJECTS);
    const saveProject = (project: Project) => {
        let updateProject = projects.map((p: Project) => {
            return p.id === project.id ? project : p;
        });
        setProject(updateProject);
    }
    return (
        <Fragment>
            <h1>Projects</h1>
            <ProjectList projects={projects} onSave={saveProject} />
        </Fragment>
    );
}
export default ProjectsPage;