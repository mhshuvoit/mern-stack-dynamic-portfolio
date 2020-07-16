import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// User-Panel
import Home from '../Pages/user-panel/Home'
import About from '../Pages/user-panel/About'
import Courses from '../Pages/user-panel/Courses'
import Services from '../Pages/user-panel/Services'
import Portfolio from '../Pages/user-panel/Portfolio'
import Contact from '../Pages/user-panel/Contact'
import Refund from '../Pages/user-panel/Refund'
import Terms from '../Pages/user-panel/Terms'
import Privacy from '../Pages/user-panel/Privacy'
import ProjectDetails from '../Pages/user-panel/ProjectDetails'
import CourseDetails from '../Pages/user-panel/CourseDetails'

//Admin-Panel
import AdminHome from '../Pages/admin-panel/Home'
import AdminServices from '../Pages/admin-panel/Services'
import AdminCourses from '../Pages/admin-panel/Courses'
import AdminProjects from '../Pages/admin-panel/Projects'
import AdminContacts from '../Pages/admin-panel/Contacts'

const Router = () => (
    <Fragment>
        <BrowserRouter>
            <Switch>
                {/* User-Panel */}
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

                {/* Admin-Panel */}
                <Route exact path='/admin' component={AdminHome} />
                <Route exact path='/admin/services' component={AdminServices} />
                <Route exact path='/admin/courses' component={AdminCourses} />
                <Route exact path='/admin/projects' component={AdminProjects} />
                <Route exact path='/admin/contacts' component={AdminContacts} />
            </Switch>
        </BrowserRouter>
    </Fragment>
)

export default Router