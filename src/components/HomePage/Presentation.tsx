import { NextPage } from "next";

type PresentationProps = {
  heading: string,
  description: string,
}

const PresentationSection: NextPage<PresentationProps> = ({heading, description}) => {
  return (
    <div className="wrapper">
      <div className="presentation">
        <div className="presentation-text">
          <h2>{ heading }</h2>
          <p>{ description }</p>
        </div>
        <div className="presentation-image">
          img here
        </div>
      </div>
    </div>
  )
}

export default PresentationSection;