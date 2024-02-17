export default function CategoryMeals({meal}) {
 
    return(
        <div className=" relative flex items-center h-[64px] w-[250px] border border-[#394150] rounded-lg">
            <img className='absolute left-[-40px] w-[80px] rounded-xl' src={meal.strCategoryThumb}></img>
            <span className="text-[#E5E7EB] ml-[52px]">{meal.strCategory}</span>
        </div>
    )
}