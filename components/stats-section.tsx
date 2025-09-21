export function StatsSection() {
  const stats = [
    { name: "Course Materials", value: "500+", description: "PPTs, Notes, Books & PYQs" },
    { name: "Video Tutorials", value: "200+", description: "Curated Learning Videos" },
    { name: "Learning Paths", value: "15+", description: "Structured Study Routes" },
    { name: "Active Students", value: "1000+", description: "SRM Ramapuram Learners" },
  ]

  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by SRM Students
          </h2>
          <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
            Join thousands of students who are already excelling in their ML journey.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary sm:text-5xl">{stat.value}</div>
              <div className="mt-2 text-lg font-semibold text-foreground">{stat.name}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
