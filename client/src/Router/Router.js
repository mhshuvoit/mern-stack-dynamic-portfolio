import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Courses from '../Pages/Courses'
import Services from '../Pages/Services'
import Portfolio from '../Pages/Portfolio'
import Contact from '../Pages/Contact'
import Refund from '../Pages/Refund'
import Terms from '../Pages/Terms'
import Privacy from '../Pages/Privacy'
import ProjectDetails from '../Pages/ProjectDetails'
import CourseDetails from '../Pages/CourseDetails'

const Router = () => (
    <Fragment>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/services' component={Services} />
                <Route exact path='/courses' component={Courses} />
                <Route exact path='/portfolio' component={Portfolio} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/about' component={About} />
                <Route exact path='/refund' component={Refund} />
                <Route exact path='/term' component={Terms} />
                <Route exact path='/privacy' component={Privacy} />
                <Route exact path='/projectdetails/:id/:title' component={ProjectDetails} />
                <Route exact path='/coursedetails/:id/:title' component={CourseDetails} />
            </Switch>
        </BrowserRouter>
    </Fragment>
)

export default Router