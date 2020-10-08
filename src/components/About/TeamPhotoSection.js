import React from "react"

function TeamPhotoSection() {
  return (
    <div className="row">
      <div className="col-10 col-sm-10 mx-auto">
        <div class="card-group">
          <div class="card">
            <img
              src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Random</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://images.pexels.com/photos/776449/pexels-photo-776449.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">just Name</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="https://images.pexels.com/photos/654690/pexels-photo-654690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Just Any</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamPhotoSection
