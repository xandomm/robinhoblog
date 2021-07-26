
import { BrowserRouter, Switch,Route} from 'react-router-dom' 
import 'aos'
import main from './pages/main/main'
import dash from './dashboard/Components/Main'
import blog from './pages/blog/blog'
import teste from './pages/main/test'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import artigo from './pages/blog/artigo'
import Aos from 'aos'
export default _=>{
    Aos.init();
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={main} />
                    <Route exact path="/dashadmi" component={dash} />
                    <Route path ="/teste" component={teste}/>
                    <Route exact path="/blog" component={blog}/>
                    <Route path="/blog/:url" component={artigo}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}