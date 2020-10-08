import React, { Component } from "react"
import Img from "gatsby-image"
import Heading from "../Reusable/Heading"

const getCaty = items => {
  let holdItems = items.map(item => {
    return item.node.category
  })
  // to remove the repitation, Set has used
  let holdCategories = new Set(holdItems)
  // get Array from Set
  let categories = Array.from(holdCategories)

  categories = ["all", ...categories]

  return categories
}

export default class CourseCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.courses.edges,
      mycourses: props.courses.edges,
      mycategories: getCaty(props.courses.edges),
    }
  }

  catyClicked = category => {
    if (category === "all") {
      this.setState(() => {
        return { mycourses: this.state.courses }
      })
    } else {
      let holdMe = this.state.courses.filter(
        ({ node }) => node.category === category
      )
      this.setState(() => {
        return { mycourses: holdMe }
      })
    }
  }

  render() {
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Courses" />
          <div className="row">
            <div className="col-10 mx-auto text-center">
              {this.state.mycategories.map((category, index) => {
                return (
                  <button
                    type="button"
                    className="btn btn-info m-3 px-3"
                    key={index}
                    onClick={() => {
                      this.catyClicked(category)
                    }}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="row">
            {this.state.mycourses.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 d-flex mx-auto my-3"
                >
                  <Img fixed={node.image.fixed} />
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">{node.title}</h6>
                      <h6 className="mb-0 text-success">$ {node.price}</h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                    <button
                      className="btn btn-warning snipcart-add-item"
                      data-item-id={node.id}
                      data-item-name={node.title}
                      data-item-price={node.price}
                      data-item-url="https://gatsby-ecom.netlify.app/"
                      data-item-description={node.description.description}
                      data-item-image={node.image.fixed.src}
                    >
                      Join now
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
