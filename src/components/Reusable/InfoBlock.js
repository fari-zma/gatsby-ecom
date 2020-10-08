import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

function InfoBlock({ heading }) {
  return (
    <section className="bg-theme my-5 py-5">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              autem culpa, adipisci facilis harum incidunt sapiente deserunt
              eius necessitatibus delectus esse impedit, unde eum ad, quisquam
              non quos mollitia magni in quae dolore. Ex hic animi, optio ipsam,
              tenetur mollitia assumenda eligendi atque molestiae modi enim
              pariatur facilis culpa labore cumque. Sequi laborum quia dolorem
              quos nobis magni, nihil illum?
            </p>
            <Link to="/about/">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoBlock
