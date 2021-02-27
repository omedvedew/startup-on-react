import React from 'react';
import { Link, Route } from 'react-router-dom';
import WorksAll from './WorksAll';
import WorksFiltered from './WorksFiltered';

const Works = () => {

    function changeColor() {
        let worksCategories = document.querySelectorAll(".works-category");
        worksCategories.forEach((category) => {
            category.classList.remove("works-category-active");
        });
    };

    document.addEventListener('click', function(e) {
        let target = e.target;
        if (target.classList.contains("works-category")) {
            target.classList.add("works-category-active");
        }
    })

    return (
        <div className="works-container" id="works-a">
            <div className="container-title">LATEST WORKS</div>
            <div className="container-dashes"></div>
            <div className="container-text">
                <Link to='/works-all'><p className="works-category" onClick={changeColor}>All</p></Link>
                <Link to='/works-branding'><p className="works-category" onClick={changeColor}>Branding</p></Link>                
                <Link to='/works-design'><p className="works-category" onClick={changeColor}>Design</p></Link>
                <Link to='/works-development'><p className="works-category" onClick={changeColor}>Development</p></Link>
                <Link to='/works-strategy'><p className="works-category" onClick={changeColor}>Strategy</p></Link>                
            </div>
            <div className="works-items-container">
                
                <Route
                    path='/works-all'
                    exact component={WorksAll}
                />

                <Route
                    path='/works-branding'
                    exact render={() => <WorksFiltered
                        filter = {"branding"}
                    />}
                />

                <Route
                    path='/works-design'
                    exact render={() => <WorksFiltered
                        filter = {"design"}
                    />}
                />

                <Route
                    path='/works-development'
                    exact render={() => <WorksFiltered
                        filter = {"development"}
                    />}
                />

                <Route
                    path='/works-strategy'
                    exact render={() => <WorksFiltered
                        filter = {"strategy"}
                    />}
                />

            </div>

        </div>
    )
}

export default Works;