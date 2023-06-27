import { PhaseProps } from "typings";

import Phase from "../Components/Phase";

const ProjectPhases = ({ props }: { props: PhaseProps[] }) => {
  return (
    <div>
      {props.map((item, index) => (
        <Phase key={index} props={item} />
      ))}
    </div>
  );
};

export default ProjectPhases;
