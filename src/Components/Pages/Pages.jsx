import React, { useState } from 'react'
import "./Pages.css"
import PageList from '../PageList/PageList';
import { data } from '../../data';

export default function Pages() {
    const [pages, setPages] = useState(data);
    const [allPagesStatus, setAllPages] = useState(false);
    const changeAllPageStatus = () => {
        const pageData = pages.map((page) => ({ ...page, isCompleted: !allPagesStatus }))
        setPages(pageData);
        setAllPages(!allPagesStatus)
    };

    const changePageStatus = (id) => {

        const pageData = pages.map(
            (prevPage) => (prevPage.id === id ? { ...prevPage, isCompleted: !prevPage.isCompleted } : prevPage)
        )

        setPages(pageData);

    }



    return (
        <div>
            <form className='pages'>
                <label className='allPages'>
                    All Pages
                    <input type="checkbox" className='rounded-checkbox' checked={allPagesStatus} onChange={changeAllPageStatus} />
                </label>
                <ul>
                    {pages.map((page) => <PageList key={page.id} page={page} changePageStatus={changePageStatus} />)}

                </ul>
                <button> Done </button>
            </form>
        </div>
    )
}
