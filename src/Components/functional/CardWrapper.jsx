
function CardWrapper({ title, children }) {
  return (
    <section className="card-wrapper">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default CardWrapper
