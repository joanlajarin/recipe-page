import RecipeCard from "./RecipeCard"
import ButtonLeftImg from '../images/Button_left.svg'
import ButtonRightImg from '../images/Button_right.svg'
import { useState } from "react"
import { useEffect } from "react"

export default function ListOfRecipes({recipes, sort, resetPosition }) {

    const totalPosition = Math.ceil(recipes.length/6)

    const [position, setPosition] = useState(0)
    const [shouldResetPosition, setShouldResetPosition] = useState(false)

    const showNextCategories = () => {
        const newPos = position + 1

        if (newPos < totalPosition ) {
            setPosition(newPos)
        }
    }
    const showPrevCategories = () => {
        const newPos = position - 1

        if (newPos > -1 ) {
            setPosition(newPos)
        }
    }

    useEffect(() => {
        if (resetPosition && !shouldResetPosition) {
            setPosition(0)
            setShouldResetPosition(true)
        }
    }, [resetPosition, shouldResetPosition])

    return(
            <div className="flex flex-col gap-[40px] items-center">
                <section className="grid lg:grid-cols-2 xl:grid-cols-3 gap-[32px] w-fit"> 
                { 
                    recipes && (
                        sort === 'id' ?  
                        recipes.sort((a, b) => a.idMeal - b.idMeal).slice(position * 6,position * 6 + 6).map( recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)
                        :  recipes.sort((a, b) => a.strMeal.localeCompare(b.strMeal)).slice(position * 6,position * 6 + 6).map( recipe => <RecipeCard key={recipe.id} recipe={recipe}/>)
                    )                 
                }   
                </section>
                <div className="flex justify-between mb-[40px] w-full ">
                <button>
                    <img 
                        onClick={showPrevCategories} 
                        src={ButtonLeftImg}
                        className={position === 0 ? "opacity-0" : "opacity-100"  }
                    ></img>
                </button>
                <button>
                    <img 
                        onClick={showNextCategories} 
                        src={ButtonRightImg}
                        className={position === totalPosition - 1? "opacity-0" : "opacity-100"  }
                    ></img>
                </button>
                </div>
            </div>

    )
}