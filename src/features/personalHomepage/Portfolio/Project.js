import { StyledProject, ProjectName, ProjectDescription, Link, ProjectLinks, LinkText } from "./styled";

export const Project = ({ project }) => (
    <StyledProject>
        <ProjectName>
            {project.name.replaceAll("-", " ")}
        </ProjectName>
        <ProjectDescription>
            {project.description}
        </ProjectDescription>
        <ProjectLinks>
            <span>
                Demo:
            </span>
            <Link href={project.homepage}
                rel="noreferrer noopener"
                target="_blank">
                <LinkText>
                    {project.homepage}
                </LinkText>
            </Link>
            <span>
                Code:
            </span>
            <Link href={project.html_url}
                rel="noreferrer noopener"
                target="_blank">
                <LinkText>
                    {project.html_url}
                </LinkText>
            </Link>
        </ProjectLinks>
    </StyledProject>
);
