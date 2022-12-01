import React from 'react'

function Remove_Products() {
  return (
    <>
    <div className="card" style={{"margin": "auto", "width": "100%","border": "10px solid green","padding":"5%"}}>
        <h3>REMOVE PRODUCTS</h3>
          <table className="table">

        <thead>
            <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Category</th>
            <th scope="col">Option</th>
            </tr>
        </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button type="button" style={{"background":"#ff392e", "borderRadius":"5px", "borderStyle":"none"}}>REMOVE</button></td>

                </tr>
            </tbody>
            </table>
            <p>all products will be visible here and remove button will delete all details of the product</p>
        </div>
    </>
  )
}

export default Remove_Products