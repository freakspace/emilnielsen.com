import Hero from "../Sections/Hero";
import ProjectPhases from "../Sections/ProjectPhases";

export const metadata = {
  title: "Emil Nielsen | Technical Project Manager",
  description: "",
};

const HeroProps = {
  subtitle: "Technical Project Manager",
  title: "Delivering Projects On Time & Within Budget",
  description:
    "I assist business professionals in managing their projects from initiation to closure in a timely manner",
  imagePath: "/profilbillede_square.jpg",
};

const PhasesProps = [
  {
    phase: "Phase 1",
    title: "Pre-Project",
    description:
      "The pre-project stage involves identifying the business case and developing a project brief through initial meetings with key stakeholders. This information lays the foundation for the next phase.",
    actions: [
      "Meeting with key stakeholders",
      "Outlining the business case",
      "Developing the project brief",
    ],
    imagePath: "/project-manager.jpg",
  },
  {
    phase: "Phase 2",
    title: "Project Initiation",
    description:
      "The initiation stage is when most of the project planning takes place. This phase involves a detailed examination of the requirements and deliverables. Based on these findings, a project plan, communication plan, and stage plan are derived.",
    actions: [
      "Identifying stakeholders' roles and responsibilities",
      "Formulating project requirements",
      "Developing the project plan and setting milestones",
      "Developing the communication plan",
      "Developing the stage plan",
    ],
    imagePath: "/project-initiation.jpg",
  },
  {
    phase: "Phase 3",
    title: "Project Delivery",
    description:
      "The project delivery phase is a continuous process of sub-stages, with the main goal being to deliver the milestones established during the project initiation phase. Depending on the project, the project delivery stage can be divided into multiple stages. This is the phase where the project plan, stage plan, and communication plan are utilized.",
    actions: [
      "Ongoing communication with stakeholders",
      "Conducting project meetings",
      "Developing highlight reports",
      "Registering issues",
      "Recording quality assurance measures",
      "Closing and initiating project stages",
    ],
    imagePath: "/project-takeoff.jpg",
  },
  {
    phase: "Phase 4",
    title: "Project Closure",
    description:
      "The final phase of a project is its official closure, which occurs after the final milestones have been delivered and accepted by the stakeholders. This is also the stage where any follow-up actions are taken and feedback is gathered.",
    actions: [
      "Implementing follow-up actions",
      "Conducting final user acceptance meeting",
      "Gathering feedback",
    ],
    imagePath: "/project-meeting.jpg",
  },
];

export default function Page() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll">
      <Hero props={HeroProps} />
      <ProjectPhases props={PhasesProps} />
      <section className="flex items-center justify-center py-10 md:py-24 px-4 bg-black snap-always snap-center h-screen">
        <div className="container mx-auto h-auto">
          <div className="flex items-center justify-center">
            <div className="text-center md:w-1/2">
              <h2 className="text-pink-700 text-3xl md:text-8xl font-extrabold pb-6">
                There is not a one-size-fits-all
              </h2>
              <p className="text-white font-bold text-xl md:text-3xl mb-2">
                Every project is different, and a well versed project manager
                ensures that the plan is always tailored to the project at hand.
                That's why I always make sure to tailor the project management
                to each project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
