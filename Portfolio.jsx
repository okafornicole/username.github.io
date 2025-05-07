export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6 md:p-12 font-sans">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Okafor Nicole</h1>
        <p className="text-xl text-gray-600">Product Design & Media Enthusiast | Final Year CS Student</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="max-w-3xl">
          I'm a creative and driven final-year Computer Science student at Landmark University, passionate about building digital experiences that inspire and connect. I blend media storytelling, product thinking, and design to craft solutions people love.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Product Design:</strong> Figma, UI/UX Flows, Wireframing</li>
          <li><strong>Product Management:</strong> Notion, Project Planning, Documentation</li>
          <li><strong>Media & Content Creation:</strong> Social Media Management, Scripting, Visual Storytelling</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold">Rightclick Solutions</h3>
            <p className="italic">Product Design & Management Intern | 2025 – Present</p>
            <ul className="list-disc list-inside ml-4">
              <li>Managing social media content and campaigns</li>
              <li>Assisting in the design and improvement of digital products</li>
              <li>Supporting product research, user flows, and feature planning</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">OG Technologies</h3>
            <p className="italic">Media Intern | 2024</p>
            <ul className="list-disc list-inside ml-4">
              <li>Created scripts and visual media content</li>
              <li>Collaborated with teams to produce engaging content</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Landmark University Choir</h3>
            <p className="italic">Media Head | 2023 – Present</p>
            <ul className="list-disc list-inside ml-4">
              <li>Led a media team to create weekly content</li>
              <li>Edited performance videos and maintained social presence</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <p><strong>Landmark University</strong><br />B.Sc. in Computer Science (Expected 2026)</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills & Tools</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Figma, Notion, Canva</li>
          <li>Content Planning & Scripting</li>
          <li>Social Media Strategy</li>
          <li>Team Management</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Youth Program Campaign – “Incendio”:</strong> Created and managed content across platforms.</li>
          <li><strong>Who We Are in Christ Series:</strong> Developed the script and visual plan for a teaching campaign.</li>
        </ul>
      </section>
    </main>
  );
}