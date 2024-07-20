import React from 'react';
import "./PageList.css";
export default function PageList({ page, changePageStatus }) {



    return (
        <div>
            <li>
                <label key={page.id}>
                    {page.name}
                    <input type="checkbox" className="rounded-checkbox" checked={page.isCompleted} onChange={() => changePageStatus(page.id)} />
                </label>
            </li>

        </div>
    )
}
