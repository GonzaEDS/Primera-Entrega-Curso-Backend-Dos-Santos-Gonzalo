class User {
  constructor(name, surname) {
    this.name = name
    this.surname = surname
    this.books = []
    this.pets = []
  }

  getFullName() {
    return `${this.name} ${this.surname}`
  }
  addPet(pet) {
    this.pets.push(pet)
  }
  countPets() {
    return this.pets.length
  }
  addBook(newbook) {
    this.books.push(newbook)
  }
  getBookNames() {
    return this.books.map(book =>
      this.books.indexOf(book) > 0 ? ' ' + book.title : book.title
    )
  }
}

class Book {
  constructor(title, author) {
    this.title = title
    this.author = author
  }
}

const user = new User('Juan', 'Perez'),
  firstPet = 'Dog',
  secondPet = 'Cat',
  firstBook = new Book('El Aleph', 'Jorge Luis Borges'),
  secondBook = new Book('To Kill A MockingBird', 'Harper Lee'),
  thirdBook = new Book('Pride And Prejudice', 'Jane Austen')

user.addPet(firstPet)
user.addPet(secondPet)

user.addBook(firstBook)
user.addBook(secondBook)
user.addBook(thirdBook)

console.log(user)

console.log(`
getFullName result: ${user.getFullName()}

getBookNames result: ${user.getBookNames()}

countPets result: ${user.countPets()}
`)
