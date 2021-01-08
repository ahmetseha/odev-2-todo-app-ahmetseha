import React, { memo } from 'react'

const Footer = memo((props) => {
    const { setStatusFilter, activeButton, clearCompleted, numOfTodosLeft, numOfTodos } = props
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{numOfTodosLeft}</strong>
                <span> </span>
                <span>{numOfTodosLeft > 1 ? 'hedef' : 'hedef'}</span>
                <span> kaldı</span>
            </span>
            <ul className="filters">
                <li>
                    <a
                        href="#/"
                        className={`${activeButton === 'ALL' ? "selected" : ''}`}
                        onClick={() => setStatusFilter('ALL')}
                    >
                        Hepsi
                    </a>
                </li>
                <span></span>
                <li>
                    <a
                        href="#/active"
                        className={`${activeButton === 'ACTIVE' ? "selected" : ''}`}
                        onClick={() => setStatusFilter('ACTIVE')}
                    >
                        Yapılacak
                    </a>
                </li>
                <span></span>
                <li>
                    <a
                        href="#/completed"
                        className={`${activeButton === 'COMPLETED' ? "selected" : ''}`}
                        onClick={() => setStatusFilter('COMPLETED')}
                    >
                        Tamamlandı
                    </a>
                </li>
            </ul>
            {
                numOfTodosLeft < numOfTodos && <button className="clear-completed" onClick={clearCompleted}>Hepsini Temizle</button>
            }
        </footer>
    )
})

export default Footer