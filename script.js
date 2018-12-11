$(document).ready(function () {
    $( '#tester' ).click(function(){
            $.ajax ({
                type: 'GET',
                url: 'https://jsonplaceholder.typicode.com/posts',
                success: function(items) {
                    $.each(items, function(i, item) {
                        // $items.append('<li>userId: '+ item.userId +', id: '+ item.id +', title: '+ item.title +' body: '+ item.body +' </li>');
                        const data = `<th scope="row">${item.userId}</th> <td>${item.id}</td> <td>${item.title}</td> <td>${item.body}</td>`;
                        let elem = $('<tr/>').append( data );
                        $('#table').append( elem );
                    });
                }
                
            });
    
    });
});
  
 