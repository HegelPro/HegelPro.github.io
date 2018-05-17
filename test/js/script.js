function isValidUrl(url) {
  var str = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;   // Проверка на валидность URL
  return str.test(url);
}

function addDeleters() {
  for (let i = 0; i < table.children[0].children.length; i++) {
    table.children[0].children[i].children[2].children[0].addEventListener('click', (event) => {
      books.deleteHTMLForTable(i)

      table.innerHTML = books.creatHTMLForTable()
      if(books.books.length !== 0) {
        addDeleters()
        addEditers()
      }
    })
  }
}

function addEditers() {
  for (let i = 0; i < table.children[0].children.length; i++) {
    table.children[0].children[i].children[2].children[1].addEventListener('click', (event) => {
      openAdderEdit(i)
    })
  }
}

function editBook() {
  var author = document.querySelector('#author-edit').value
  var calling = document.querySelector('#calling-edit').value
  var year = document.querySelector('#year-wrote-edit').value
  var url = document.querySelector('#url-edit').value

  if(isValidUrl(url)) {
    var book = new Book(calling, author, year, url)
  } else {
    url = ''

    var book = new Book(calling, author, year, url)
  }


  books.switchValue(editIndex, book)

  table.innerHTML = books.creatHTMLForTable()
  addDeleters()
  addEditers()
  closeAdder()
}


function addBook(event) {
  var author = document.querySelector('#author').value
  var calling = document.querySelector('#calling').value
  var year = document.querySelector('#year-wrote').value
  var url = document.querySelector('#url').value


  if ( calling === '' ) {
    alert('Пожалуйста, заполнети поле \'Название\'');
  } else if ( author === '' ) {
    alert('Пожалуйста, заполнети поле \'Автор\'');
  } else if ( year === '' )  {
    alert('Пожалуйста, заполнети поле \'Год выпуска\'');
  } if ( isNaN(year) ) {
    alert('Пожалуйста, введите число в поле \'Год выпуска\'');
  } else if( Number(year) > 2017 ) {
    alert('Год должен быть меньше 2017');
  } else {
    books.addBook(calling, author, year, url)
    table.innerHTML = books.creatHTMLForTable()
    addDeleters()
    addEditers()
    closeAdder()
  }
}


function Books() {
  return {
    books: [],
    addBook: function(calling, author, year, url) {
      this.books.push(new Book(calling, author, year, url))
    },
    creatHTMLForTable: function() {
      var htmlText = "";
      for (var index in this.books) {
        if (this.books.hasOwnProperty(index)) {
          htmlText += '<tr><td><img class="book-face" src="' + this.books[index].url + '"></td><td class="book-info"><h3>'+ this.books[index].calling + '</h3><p>' + this.books[index].author + '</p><p>' + this.books[index].year + ' г.</p></td><td><button class ="deleter btn-2">Удалить</button><button class ="editor btn-2">Редактировать</button></td></tr>'
        }
      }
      return htmlText;
    },
    deleteHTMLForTable: function(index) {
      var arrNew = []

      for (var i in this.books) {
        if (this.books.hasOwnProperty(i)) {
          if(i == index) {
            continue;
          }
          arrNew.push(this.books[i])
        }
      }

      this.books = arrNew
    },
    switchValue: function(i, book) {
      this.books[i] = book
    }
  }
}

function Book(calling, author, year, url) {
  this.calling = calling;
  this.author = author;
  this.year = year;
  this.url = url;
}


var urlDataList = {
  one: 'https://st2.depositphotos.com/6771988/10663/v/950/depositphotos_106635366-stock-illustration-abstract-cover-annual-report-cover.jpg',
  two: 'https://st2.depositphotos.com/6771988/10663/v/950/depositphotos_106635368-stock-illustration-abstract-cover-annual-report-cover.jpg',
  three: 'https://thumbs.dreamstime.com/z/abstract-round-circle-shapes-background-report-flyer-book-cover-poster-minimal-geometric-design-business-annual-brochure-63096945.jpg',
  four: 'https://st2.depositphotos.com/6771988/10663/v/950/depositphotos_106635364-stock-illustration-abstract-brochure-annual-report-brochure.jpg'
}
function fileDataList() {
  var dataList = document.querySelector('#books-on-pc')

  var htmlText = "";
  for (var index in urlDataList) {
    if (urlDataList.hasOwnProperty(index)) {
      htmlText += '<option value="' + urlDataList[index] + '">'
    }
  }
  dataList.innerHTML = htmlText;
}
fileDataList()

var adder = document.querySelector('#adder')
var table = document.querySelector('#books-list')

var saver = document.querySelector('#saver')
var exiter = document.querySelector('#exiter')
var formAdder = document.querySelector('#books-adder')
formAdder.style.display = 'none'

var saverEdit = document.querySelector('#saver-edit')
var exiterEdit = document.querySelector('#exiter-edit')
var formAdderEdit = document.querySelector('#books-adder-edit')
formAdderEdit.style.display = 'none'




var books = new Books()
// books.addBook('Абвд','Ейжз', '1234', 'https://pp.userapi.com/c846322/v846322921/31781/J2PwGTwfyGk.jpg')
// books.addBook('Абвд','Ейжз', '1234', 'https://pp.userapi.com/c846322/v846322921/31781/J2PwGTwfyGk.jpg')
// table.innerHTML = books.creatHTMLForTable()
// addDeleters()
// addEditers()

var editIndex

function openAdder() {
  formAdder.style.display = ''
  formAdderEdit.style.display = 'none'
  table.style.display = 'none'
}

function closeAdder() {
  formAdder.style.display = 'none'
  formAdderEdit.style.display = 'none'
  table.style.display = ''

  table.innerHTML = books.creatHTMLForTable()
  addDeleters()
  addEditers()
}

function openAdderEdit(i) {
  formAdderEdit.style.display = ''
  formAdder.style.display = 'none'
  table.style.display = 'none'

  editIndex = i

  document.querySelector('#author-edit').value = books.books[i].author
  document.querySelector('#calling-edit').value = books.books[i].calling
  document.querySelector('#year-wrote-edit').value = books.books[i].year
  document.querySelector('#url-edit').value = books.books[i].url
}

function closeAdderEdit() {
  formAdderEdit.style.display = 'none'
  formAdder.style.display = 'none'
  table.style.display = ''

  table.innerHTML = books.creatHTMLForTable()
  addDeleters()
  addEditers()
}


saver.addEventListener('click', addBook)
adder.addEventListener('click', openAdder)
exiter.addEventListener('click', closeAdder)

saverEdit.addEventListener('click', editBook)
exiterEdit.addEventListener('click', closeAdderEdit)
