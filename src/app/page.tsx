export default function SkillsSection() {
  const skills = [
    "Manual Testing",
    "API Testing (Postman)",
    "Selenium (Basic)",
    "Jira, Redmine",
    "SQL (Basic)"
  ];

  return (
    <section style={{ padding: "50px", color: "white" }}>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
