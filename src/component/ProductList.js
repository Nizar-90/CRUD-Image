import React from 'react'

const ProductList = () => {
  return (
    
    <div className="container mt-5">
        <div className="columns is-multiline">
            <div className="column is-one-quarter">
                {/* card START */}
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">

                      <div className="media-content">
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">@johnsmith</p>
                      </div>
                    </div>
                

                  </div>
                </div>
                

                {/* card END */}
            </div>
        </div>
    </div>
  )
}

export default ProductList