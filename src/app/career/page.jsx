import Banner from "../components/Banner";
import Text from "../components/Text";

export const metadata = {
  title: "Careers",
  description:
    "Join Essentia Environments – explore current openings and career opportunities.",
};

const departments = [
  { name: "Graphic Design", openings: "Jobs available" },
  { name: "CRM", openings: "Jobs available" },
  { name: "Draughtsman Department", openings: "Jobs available" },
  { name: "Interior Design Department", openings: "Jobs available" },
  { name: "Accounts Department", openings: "0 Jobs available" },
  { name: "BOQ Department", openings: "1 Job available" },
  { name: "ID Department", openings: "3 Jobs available" },
  { name: "3D Visualisers", openings: "0 Jobs available" },
  { name: "BD Department", openings: "0 Jobs available" },
  { name: "Decor Department", openings: "0 Jobs available" },
  { name: "Architecture Department", openings: "1 Job available" },
  { name: "Procurement Department", openings: "0 Jobs available" },
  { name: "Admin Department", openings: "0 Jobs available" },
  { name: "HR Department", openings: "0 Jobs available" },
];

const jobs = [
  {
    title: "Interior Design Department – ID Department",
    location: "Gurugram",
    date: "April 20, 2025",
    type: "Full time",
    urgency: "Urgent",
    qualifications: "Bachelor's degree / Master’s degree",
    experience: "Fresher or 1–2 years experience",
    industry: "Interior designing",
  },
  {
    title: "Graphic Designer Department – ID Department",
    location: "Gurugram",
    date: "May 02, 2025",
    type: "Full time",
    urgency: "Urgent",
    qualifications: "Bachelor's degree / Master’s degree",
    experience: "Fresher or 1–2 years experience",
    industry: "Graphic designing",
  },
  {
    title: "KRA – Intern – ID",
    location: "Gurugram",
    date: "March 20, 2025",
    type: "Full time",
    urgency: "Urgent",
    qualifications: "Bachelor's degree / Master’s degree",
    experience: "Fresher or 1–2 years experience",
    industry: "Interior designing",
  },
  {
    title: "Draughtsman Department – BOQ Department",
    location: "Gurugram",
    date: "February 20, 2025",
    type: "Full time",
    urgency: "Urgent",
    qualifications: "Bachelor's degree / Master’s degree",
    experience: "Fresher or 1–2 years experience",
    industry: "Interior designing manufacturing",
  },
  {
    title: "KRA – Senior Architect – Architecture Department",
    location: "Gurugram",
    date: "March 20, 2025",
    type: "Full time",
    urgency: "Urgent",
    qualifications: "Bachelor's degree / Master’s degree",
    experience: "Fresher or 1–2 years experience",
    industry: "Interior designing manufacturing",
  },
  {
    title: "CRM Department – CRM",
    location: "Gurugram",
    date: "March 12, 2025",
    type: "Full time",
    urgency: "Urgent",
    qualifications: "Bachelor's degree / Master’s degree",
    experience: "Fresher",
    industry: "Interior designing manufacturing",
  },
];

export default function CareerPage() {
  const intro = [
    <p key="1">
      Join Essentia Environments, a leading interior company in India and
      Gurgaon, and embark on a career of continuous growth. Here, you’ll tackle
      projects that push the boundaries of your specialized skills, demanding
      innovative solutions and fostering your problem-solving prowess.
    </p>,
    <p key="2">
      We believe in nurturing an entrepreneurial spirit, empowering you to take
      ownership and drive projects to success. Our dynamic environment
      encourages creativity and collaboration, providing a platform to refine
      your abilities and expand your professional horizons.
    </p>,
    <p key="3">
      At Essentia, you’ll be part of a team that values excellence and
      innovation. Join us and contribute to creating exceptional spaces while
      continuously sharpening your expertise in the heart of India’s design
      landscape.
    </p>,
  ];

  return (
    <>
      <Banner
        heading="Join Our Team: Explore Exciting Career Opportunities"
        image="/images/team-group.jpg"
      />
      <div className="container mx-auto px-6 py-12 space-y-16">
        <Text heading="Careers at Essentia Environments" content={intro} />

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Departments</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept) => (
              <div
                key={dept.name}
                className="rounded-2xl border border-border bg-card p-4 text-sm shadow-sm"
              >
                <h3 className="text-base font-semibold">{dept.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {dept.openings}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Current Openings</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {jobs.map((job) => (
              <article
                key={job.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-5 text-sm shadow-sm"
              >
                <h3 className="text-base font-semibold">{job.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {job.location} • {job.date}
                </p>
                <p className="mt-2 text-xs">
                  <strong>Type:</strong> {job.type} • <strong>{job.urgency}</strong>
                </p>
                <p className="mt-1 text-xs">
                  <strong>Qualifications:</strong> {job.qualifications}
                </p>
                <p className="mt-1 text-xs">
                  <strong>Experience:</strong> {job.experience}
                </p>
                <p className="mt-1 text-xs">
                  <strong>Industry:</strong> {job.industry}
                </p>
                <a
                  href="mailto:info@essentiaenvironments.com?subject=Career%20Application"
                  className="mt-4 inline-flex w-max items-center justify-center rounded-full border border-primary px-4 py-2 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Apply Now
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
