import { useState } from "react"
import CategoryMeals from "./CategoryMeals"
import ButtonLeftImg from '../images/Button_left.svg'
import ButtonRightImg from '../images/Button_right.svg'

export default function ListOfCategoryMeals({meals, onMealClick}) {
    const totalPosition = Math.ceil(meals.length/6)

    const [position, setPosition] = useState(0)

    const handleMealCategory = (category) => {
        onMealClick(category)    
    }
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
    return (    
        <section className="flex flex-col h-fit px-[40px] lg:p-[0] gap-[32px] bg-[#0E1325] lg:w-[250px] ">
            <span className="text-[#E5E7EB] text-2xl font-semibold" id='span-categories'>Categories</span>
            <div className=" grid grid-cols-2 lg:flex lg:flex-col h-fit gap-[12px]">
            {              
                meals &&  meals.slice(position * 6,position * 6 + 6).map( meal => <CategoryMeals key={meal.id} onMealClick={handleMealCategory}  meal={meal}/>)
            }
            </div>
            <div className="flex justify-between">
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
        </section>    
    )
}

