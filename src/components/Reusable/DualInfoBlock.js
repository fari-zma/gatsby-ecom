import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

function DualInfoBlock({ heading, imgsrc }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-lg-8 mx-auto col-sm-12">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              animi architecto labore beatae iure. Accusamus aspernatur
              consectetur cumque iste autem ad harum aliquid, voluptatum quia,
              reiciendis deleniti officiis accusantium corporis? Obcaecati
              tempora possimus reiciendis consequuntur exercitationem optio,
              totam excepturi corrupti harum quos, dicta maxime voluptate
              dolorem, consectetur voluptas saepe? Magni, mollitia maiores.
              Voluptate esse repudiandae facilis soluta pariatur deleniti totam
              quam at rerum, dolorum quaerat error? Possimus perspiciatis
              impedit corporis nemo cum recusandae, expedita repellendus
              laborum. Autem itaque adipisci quod laborum sed impedit, placeat
              tempora tempore ducimus totam explicabo, voluptate dolores harum
              molestiae magnam animi dolore ullam? Incidunt esse ad repellat
              quae animi accusantium iure reiciendis perspiciatis illum vel
              saepe impedit cum repudiandae natus ab molestias id voluptatibus
              eveniet commodi repellendus ipsum laudantium, culpa cupiditate?
              Facilis ex dignissimos in. Nam, beatae fugit. Dolores obcaecati
              aspernatur itaque minima nam, autem nisi quo quos mollitia fuga
              sunt facilis animi magni error iure!
            </p>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="card bg-dark">
              <img src={imgsrc} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title text-white">Just click photos</h5>
                <Link to="" className="btn btn-warning btn-block">
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DualInfoBlock
