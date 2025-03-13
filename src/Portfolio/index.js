import { ReactComponent as GitHub } from "./svg/github.svg";
import { ReactComponent as Danger } from "./svg/danger.svg";
import { PortfolioSection, Header, List, LeadParagraph, StyledHeader, Title, ProjactsSection, Project, ProjectName, ProjectDescription, Projects, Label, Link, LinkContainer, ErrorHeader, ErrorParagraph, LoadingInformation, LoadingIcon, Jakiśchuj, Wrapper } from "./styled";
import { useProjectsDownloads } from "./useProjectDownloads";


export const Portfolio = ({ title, gitHubButton, gitHubLink }) => {
    const dataState = useProjectsDownloads();
    const projects = dataState.projectsData;

    return (
        <PortfolioSection>
            <Header>
                <GitHub />
                <Title>{title}</Title>
                <LeadParagraph>My recent projects</LeadParagraph>
            </Header>
            {dataState.status === "loading"
                ?
                (
                    <Wrapper>
                        <LoadingInformation>Please wait, projects are being loaded...</LoadingInformation>
                        <LoadingIcon />
                    </ Wrapper>
                )
                : dataState.status === "error"
                    ?
                    (
                        <Wrapper>
                            <Danger />
                            <ErrorHeader>Ooops! Something went wrong...</ErrorHeader>
                            <LoadingInformation>Sorry, failed to load Github projects.
                                <br />
                                You can check them directly on Github.</LoadingInformation>
                            {gitHubButton}
                        </ Wrapper>
                    )
                    :
                    (<Projects>
                        { projects.map(project =>
                                <Project>
                                    <ProjectName>{project.name.replaceAll("-", " ")}</ProjectName>
                                    <ProjectDescription>{project.description}</ProjectDescription>
                                    <LinkContainer>
                                        <span>Demo:</span>
                                        <Link href={project.homepage}> {project.homepage}</Link>
                                        <span>Code:</span>
                                        <Link href={project.html_url}> {project.html_url}</Link>
                                    </LinkContainer>
                                </Project>
                        )}
                        </Projects>
                    )
            }

        </PortfolioSection>
    )
};