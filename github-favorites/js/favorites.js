export class Favorites {
  constructor(root){
    this.root = document.querySelector(root)
    this.load()
  }

  load(){

    this.entries = [
      {
      login: 'JrSantiaggo',
      name: 'Junior Santiago',
      public_repos: '40',
      followers: '100',
      },
      {
      login: 'Diego3g',
      name: 'Diego Fernandes',
      public_repos: '70',
      followers: '90000',
      },
    ]
    
  }
}

export class FavoritesView extends Favorites{
  constructor(root){
    super(root)

    this.tbody = this.root.querySelector('table tbody')
    this.update()
  }

  update(){
    this.removeAllTr()

    this.entries.forEach( user => {
      const row = this.createRow()
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      this.tbody.append(row)
    })

    
  }

  createRow(){
    const tr = document.createElement('tr')
    tr.innerHTML = `

      <td class="user">
        <img src="https://github.com/JrSantiaggo.png" alt="imagem de perfil">
        <a href="https://github.com/JrSantiaggo" target="_blank">
          <p>Junior Santiago</p>
          <span>JrSantiaggo</span>
        </a>
      </td>
      <td class="repositories">
        50
      </td>
      <td class="followers">
        02
      </td>
      <td>
        <button class="remove">&times;</button>
      </td>

    `
    return tr
  }

  removeAllTr(){
    
    this.tbody.querySelectorAll('tr').forEach((tr) => {
      tr.remove()
    })
  }
}