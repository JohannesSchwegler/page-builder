import React from 'react'
import s from "./Selection.scss"
import { HeadingIcon } from '@primer/octicons-react'

export default function Selection() {


    /*     const drop = (e: any) => {
            e.preventDefault();
            const card_id = e.dataTransfer.getData("card_id")
    
            const card = document.getElementById(card_id)
    
            if (card) {
                card.style.display = "block"
            }
    
            e.target.appendChild(card)
        }
    
        const dragOver = (e: any) => {
            e.preventDefault();
        } */
    return (
        <>

            <input type="search" id="site-search" name="q"
                aria-label="Search through site content" />

            <button>Search</button>

            {/* Accordion */}
            <div className={s.accordion}>
                <div className={s.accordion__item}>
                    <div className={s.accordion__item__title}>
                        <h1>BASIC</h1>
                    </div>
                    <div className={s.accordion__grid}>
                        {/*Heading */}
                        <div className={s.element__wrapper}>
                            <div className={s.element__body} draggable="true">
                                <div className={s.element__icon}>
                                    <HeadingIcon size='medium' />
                                </div>
                                <div className={s.element__title}>
                                    <p >Text Editor</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>


        </>
    )
}



