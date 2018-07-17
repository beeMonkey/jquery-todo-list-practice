$(document)
    .ready(function () {

        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        // handle add click
        $( "#button" ).click(function() {
            let addtext=$(".input-text").val();
            if(addtext===""){

            }else{
                let uuid=generateUUID();
                $('ol').append("<li id="+uuid+" class=''><input name='done-todo' type='checkbox' class='done-todo'>"+addtext+"</li>");
            }
        });

        // $( ".done-todo" ).click(function() {
        //     alert($(this).parent().hasClass("checked"))
        //     if($(this).parent().hasClass("checked")){
        //         $(this).parent().removeClass("checked");
        //     }else{
        //     $(this).parent().addClass("checked");
        //     }
        //   });

          $( "body" ).on( "click",".done-todo", function() {
            if($(this).parent().hasClass("checked")){
                $(this).parent().removeClass("checked");
            }else{
            $(this).parent().addClass("checked");
            }
          });

          $("ol li").click(function(){
            $(this).text.attr("contentEditable",true);
           // $(this).text().attr("contentEditable",true);
            //attr("contentEditable",true)
          })

        //   $("a[data-filter=all]").click(function(){
        //     $('ol .done-todo').attr("checked",true)
        //     $('ol li').addClass("checked");
        // });
        $("a[data-filter=all]").click(function(){
            $(this).addClass("selected");     
            $("ol li").css("display","");
        });

          $("a[data-filter=active]").click(function(){
               //let active=$.find("ol .checked");
               $(this).addClass("selected");
            $("ol").children().filter('.checked').css("display","none")
            $("ol").children().not('.checked').css("display","")
          });

          $("a[data-filter=complete]").click(function(){
            //let active=$.find("ol .checked");
            $(this).addClass("selected");
            $("ol").children().not('.checked').css("display","none")
            $("ol").children().filter('.checked').css("display","")
        });
         
    });