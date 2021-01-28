
import { createElement , reactDOM } from "./react"
import { layout } from "./components/layout"

 
const App =()=>{

let fragement=document.createDocumentFragment()
fragement.append(layout())
    return fragement;
}
reactDOM.render(App(),document.getElementById('root'))