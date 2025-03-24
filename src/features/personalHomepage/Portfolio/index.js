import { useSelector } from "react-redux";
import { ReactComponent as GitHubIcon } from "./portfolioIcons/github.svg";
import { PortfolioSection, Header, LeadParagraph, Title, Project, ProjectName, ProjectDescription, Projects, Link, ProjectLinks, DangerIconDark, DangerIconLight, ErrorHeader, LoadingInformation, LoadingIcon, Wrapper } from "./styled";
import { useProjectsDownloads } from "./useProjectDownloads";
import { LinkContainer } from "../LinkContainer";
import { selectTheme } from "../../../themeSlice";

export const Portfolio = ({ gitHubLink }) => {
  const dataState = useProjectsDownloads();
  const projects = dataState.projectsData;
  const darkTheme = useSelector(selectTheme);

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
              {darkTheme !== true ? <DangerIconDark /> : <DangerIconLight />}
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