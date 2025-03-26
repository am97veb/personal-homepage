import { useSelector } from "react-redux";
import { ReactComponent as GitHubIcon } from "./portfolioIcons/github.svg";
import { PortfolioSection, Header, LeadParagraph, Title, Project, ProjectName, ProjectDescription, Projects, Link, ProjectLinks, DangerIconDark, DangerIconLight, ErrorHeader, LoadingInformation, LoadingIcon, Wrapper, LinkText } from "./styled";
import { selectDownloads, selectProjects, selectTheme } from "../../../homepageSlice";

export const Portfolio = ({ gitHubLink }) => {
  const downloads = useSelector(selectDownloads);
  const projects = useSelector(selectProjects);
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
      {downloads === "loading"
        ?
        (
          <Wrapper>
            <LoadingInformation>
              Please wait, projects are being loaded...
            </LoadingInformation>
            <LoadingIcon />
          </ Wrapper>
        )
        : downloads === "error"
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
              {gitHubLink}
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
                </Project>
              )}
            </Projects>
          )
      }

    </PortfolioSection>
  )
};