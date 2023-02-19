$(document).ready(function(){
    $('#add-book-nav').click(function(){
        $('#caption').show()
        $('#caption').css('background-color','rgb(112, 249, 112)')
        $('#caption').css('color','rgb(255 41 41)')
        $('#caption').html('add book form')
        $('#inputFields').show()
        $('#table').hide()
    })
    $('#delete-book-nav').click(function(){
        $('#caption').show()
        $('#caption').css('background-color','orange')
        $('#caption').css('color','rgb(255 41 41)')
        $('#caption').html('delete book')
        $('#inputFields').hide()
        $('#table').show()
        showAllBooks('delete')
    })
    $('#update-book-nav').click(function(){
        $('#caption').show()
        $('#caption').css('background-color','yellow')
        $('#caption').css('color','rgb(255 41 41)')
        $('#table').hide()
        $('#caption').html('update book')
    })
    $('#show-book-nav').click(function(){
        $('#caption').show()
        $('#caption').css('background-color','#d057e4')
        $('#caption').css('color','rgb(255 41 41)')
        $('#caption').html('show book')
        $('#inputFields').hide()
        $('#table').show()
        showAllBooks()
    })
    $('#save-book').click(function(){
        saveBook();
    })
})
function saveBook(){
    var inputs=document.getElementsByClassName("inputFieldData")
    url='/save_book/?name='+inputs[0].value+'&prize='+inputs[1].value+'&pages='+
    inputs[2].value+'&bookid='+inputs[3].value
    var req=new XMLHttpRequest()
    req.open("GET",url,true)
    req.send()  
    req.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
            alert(req.responseText)
            if(req.responseText==true){
                inputs[0].value=''
                inputs[1].value=''
                inputs[2].value=''
                inputs[3].value='' 
              $('#error').html("")

            }
            else{
              $('#error').html("Book id can not be same")
              inputs[3].value=''
            }
    }
}
function showAllBooks(str){
    var req=new XMLHttpRequest()
    var url='getAllBooks/'
    req.open("GET",url,true)
    req.send()  
    req.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var data=eval(req.responseText)
            var div=document.getElementById('table')
            div.innerHTML=''
            var table=document.createElement('TABLE')
            var row=table.insertRow(0)
            row.insertCell(0).innerHTML='serial no'
            row.insertCell(1).innerHTML='book Name'
            row.insertCell(2).innerHTML='prize'
            row.insertCell(3).innerHTML='pages'
            if(str=='delete')
               row.insertCell(4).innerHTML=''
            row.className='table-header'
            for(i=0;i<data.length;i++){
                
                var row=table.insertRow(i+1)
                var bid=row.insertCell(0)
                var name=row.insertCell(1)
                var prize=row.insertCell(2)
                var pages=row.insertCell(3)
                if(str=='delete')
                {
                    row.insertCell(4).innerHTML='<a class="book" href="#" onclick="deletebook('+data[i].bookId+')">delete</a>'
                }
                bid.innerHTML=i+1;
                name.innerHTML=data[i].name 
                prize.innerHTML=data[i].prize
                pages.innerHTML=data[i].pages
            }
            table.className='table table-striped'
            div.appendChild(table)
        }
    }
}
function deletebook(id){
    let req=new XMLHttpRequest()
    url='delete-Book/?bookId='+id
    req.open("GET",url,true)
    req.send()
    req.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
        {
            showAllBooks('delete');
        }
    }
}