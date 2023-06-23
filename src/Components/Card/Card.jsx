import React from 'react'

const Card = () => {
  return (
    <div className="Card bg-slate-700 p-5 mt-5 rounded-lg m-auto w-1/4">
        <img src="https://images.unsplash.com/photo-1687201363580-1cd1bb33c2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="img" />
        <div className="text-container p-5">
            <div className="title">Title</div>
            <div className="description">Description with</div>
            <button className="btn">View</button>
        </div>
    </div>
  )
}

export default Card;