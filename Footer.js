import html from "./core.js";
import { connect } from "./store.js";


function Footer({todos,filters,filter}) {
    
    return html`
   
    <footer class="footer">
    <span class="todo-count"><strong>${todos.filter(filters.active).length}</strong> item left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
     
        ${Object.keys(filters).map(type => 
            html`<li> 
            <a  onclick= "dispatch('switchFilter','${type}')" class="${filter == type && 'selected'}" href="#/">${type[0].toUpperCase()+type.slice(1)}
            </a>
            </li>`
            )}
          
     
     
    </ul>
    ${todos.filter(filters[filter]).length >0 && html`<button onclick="dispatch('clearcompleted','${filter}')" class="clear-completed">Clear completed</button>
    `}
</footer>
    
    `

}
export default connect()(Footer)



















