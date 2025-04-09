import { StyledProject, ProjectName, ProjectDescription, Link, ProjectLinks, LinkText, ProjectValue, ProjectRow } from "./styled";

export const Project = ({ project }) => (
    <StyledProject>
        <ProjectName>
            {project.name.replaceAll("-", " ")}
        </ProjectName>
        <ProjectDescription>
            {project.description}
        </ProjectDescription>
        <ProjectLinks>
            <dt>
                Demo:
            </dt>
            <ProjectValue>
                <Link href={project.homepage}
                    rel="noreferrer noopener"
                    target="_blank">
                    {project.homepage}
                </Link>
            </ProjectValue>
            <dt>
                Code:
            </dt>
            <ProjectValue>
                <Link href={project.html_url}
                    rel="noreferrer noopener"
                    target="_blank">
                    {project.html_url}
                </Link>
            </ProjectValue>
        </ProjectLinks>
    </StyledProject>
);
