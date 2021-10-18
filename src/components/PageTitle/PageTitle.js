import './PageTitle.css'

const PageTitle = ({ title }) => {
  return (
    <div className="titleContainer">
      <h1 className="pageTitle">{title}</h1>
    </div>
  )
}

export default PageTitle
