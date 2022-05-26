import React, { useState, useEffect } from 'react';


const Recipe = ({ name, calore, image, ingredient }) => {

  const [classes, setClasses] = useState(false)
  const [classes2, setClasses2] = useState("modal-container text-center")

  const handleClassChange = () => {
    setClasses(!classes);
    setClasses2("modal-active text-center");
  }

  const handleClose = () => {
    setClasses2("modal-container text-center");
  }
  
  return(
    <>
        <div className='holder'>
          <h1 className='label'>{name}</h1>
          <p className='calore'>{calore} Calories</p>
          <img className='image' src={image} alt=""></img>
          <button type="button" className='ingredients' onClick={handleClassChange}>Ingredients</button>
          
            {classes ?  
                  <div className="container">
                      <div className={classes2}>
                          <div className="modal-class">
                              <span className="close" onClick={handleClose}>X</span>
                            <ul className="list-items-show">
                            {ingredient.map(ingredients => {
                                return (<><li className='actual-list'>{ingredients.text}</li></>)}
                            )}
                              </ul>
                          </div>
                      </div>
                  </div>
             : null }
         
        </div>
      
      
      </>
  );
}

export default Recipe;