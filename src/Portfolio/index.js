import { PortfolioSection, Header, LeadParagraph, Title, Project, ProjectName, ProjectDescription, Projects, Link, ProjectLinks, ErrorHeader, LoadingInformation, LoadingIcon, Wrapper } from "./styled";
import { ReactComponent as GitHubIcon } from "./svg/github.svg";
import { ReactComponent as DangerIcon } from "./svg/danger.svg";
import { useProjectsDownloads } from "./useProjectDownloads";
import { LinkContainer } from "../LinkContainer";

export const Portfolio = ({ gitHubLink }) => {
  const dataState = useProjectsDownloads();
  const projects = dataState.projectsData;

  return (
    <PortfolioSection>
      <Header>
        <GitHubIcon />
        <Title>
          Portfolio
        </Title>
        <LeadParagraph>
          My recent projects
        </LeadParagraph>
      </Header>
      {dataState.status === "loading"
        ?
        (
          <Wrapper>
            <LoadingInformation>
              Please wait, projects are being loaded...
            </LoadingInformation>
            <LoadingIcon />
          </ Wrapper>
        )
        : dataState.status === "error"
          ?
          (
            <Wrapper>
              <DangerIcon />
              <ErrorHeader>
                Ooops! Something went wrong...
              </ErrorHeader>
              <LoadingInformation>
                Sorry, failed to load Github projects.
                <br />
                You can check them directly on Github.
              </LoadingInformation>
              <LinkContainer>
                {gitHubLink}
              </LinkContainer>
            </ Wrapper>
          )
          :
          (
            <Projects>
              {projects.map(project =>
                <Project>
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
                    <Link href={project.homepage}>
                      {project.homepage}
                    </Link>
                    <span>
                      Code:
                    </span>
                    <Link href={project.html_url}>
                      {project.html_url}
                    </Link>
                  </ProjectLinks>
                </Project>
              )}
            </Projects>
          )
      }

    </PortfolioSection>
  )
};