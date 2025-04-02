import { useSelector } from "react-redux";
import { ReactComponent as GitHubIcon } from "./portfolioIcons/github.svg";
import { selectDownloads, selectProjects } from "../homepageSlice";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { Project } from "./Project";
import { PortfolioSection, Header, LeadParagraph, Title, Projects } from "./styled";

export const Portfolio = () => {
  const downloads = useSelector(selectDownloads);
  const projects = useSelector(selectProjects);

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
        <Loading />
        :
        downloads === "error"
          ?
          <Error />
          :
          <Projects>
            {projects.map(project =>
              <Project
                project={project}
              />
            )}
          </Projects>
      }
    </PortfolioSection>
  )
};