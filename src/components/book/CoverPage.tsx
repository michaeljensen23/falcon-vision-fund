export function CoverPage({ page, total }: { page: number; total: number }) {
  return (
    <article className="slide title-slide" data-page={page}>
      <img
        src="/brand/lockup.jpg"
        alt="Falcon Vision Fund — Pre-IPO: AI, Defense, Robotics, Space"
        className="title-lockup"
      />
      <p className="title-page">
        {String(page).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </p>
    </article>
  );
}
