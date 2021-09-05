// write your CatList component here
import React from 'react'

function CatList({catPics=[]}) {
    return (
        <div>
            {catPics.map((cat)=> <img src={cat.url} alt="cat" key={cat.id}/>)}
        </div>
    )
}

export default CatList
