$(document).ready(function () {
     
        $(function (){
            let $items = $('#items');

            $.ajax ({
                type: 'GET',
                url: 'https://jsonplaceholder.typicode.com/posts',
                success: function(items) {
                    $.each(items, function(i, item) {
                        // $items.append('<li>userId: '+ item.userId +', id: '+ item.id +', title: '+ item.title +' body: '+ item.body +' </li>');
                        const data = `userId: ${item.userId} id: ${item.id} title: ${item.title} body: ${item.body}`;
                        let elem = $('<tr/>').append( data )
                        $('#items').append(elem);
                    });
                }
            });
        });

    });
  
 