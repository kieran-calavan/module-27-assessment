import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {
  const formState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
}

const [formData, setFormdata] = useState ({...formState})
const handleChange = ({target}) => {
setFormdata({
...formData,[target.name]: target.value,
})
}

const handleSubmit = (event) => {
event.preventDefault()
setRecipes([...recipes, formData])
setFormdata({...formState})
}

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td htmlFor="name">
              <input
                id = "name"
                type = "text"
                name = "name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
              />
            </td>
            <td htmlFor="cuisine">
              <input
                id = "cuisine"
                type = "text"
                name = "cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
              />
            </td>
            <td htmlFor="photo">
              <input
                id="photo"
                type="url"
                name="photo"
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL"
              />
            </td>
            <td htmlFor="ingredients">
              <textarea
                id="ingredients"
                type="textarea"
                name="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="Ingredients"
              />
            </td>
            <td htmlFor="preparation">
              <textarea 
                id="preparation"
                type="textarea"
                name="preparation"
                onChange={handleChange}
                value={formData.preparation}
                placeholder="Preparation"
              />
            </td>            
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
