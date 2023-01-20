export class Router {
  routes = {}
  add(routeName, page){
    this.routes[routeName] = page
  }

  route(event){
    event = event || window.event
    event.preventDefault()
    window.history.pushState({}, '', event.target.href)
  
    this.handle() 
  }

  handle(){
    const {pathname} = window.location //saber onde está
    const route = this.routes[pathname] || this.routes[404]
    
    fetch(route).then(data => data.text())//pegar os dados, transformar em text,
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }
}

