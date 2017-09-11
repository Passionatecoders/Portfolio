$(document).ready(function(){
            remove_quotes();
            
            $('#header-main').hover(function(){
               $(this).removeClass('animated');
               $(this).addClass('animated');
               $(this).addClass('tada'); 
            }).on("mouseleave", function() {
                $(this).removeClass('tada');
                $(this).removeClass('animated');
            });

            // ============ Section1 ========== //
            $('#section1').hover(function(){
               $('.about').addClass('animated');
               $('.about').addClass('rubberBand');
                setTimeout(function(){
               $('.p1').addClass('animated'); 
               $('.p1').addClass('fadeInUpBig');
               },200); 
               setTimeout(function(){
                $('.p2').addClass('animated'); 
               $('.p2').addClass('fadeInUpBig'); 
               },400); 
                setTimeout(function(){
               $('.p3').addClass('animated'); 
               $('.p3').addClass('fadeInUpBig');
               },600); 
               setTimeout(function(){
               $('.p4').addClass('animated'); 
               $('.p4').addClass('fadeInUpBig'); 
               },800); 
               setTimeout(function(){
               $('.p5').addClass('animated'); 
               $('.p5').addClass('fadeInUpBig');  
               },1000); 
            }).on("mouseleave", function() {
                $('p').removeClass('animated');
               $('p').removeClass('fadeInUpBig');
               $('.about').removeClass('animated');
               $('.about').removeClass('rubberBand');
            });

            // ========== Get In Touch ============//
            $('p, #phone, #email, #get-in').hover(function(){
               $(this).removeClass('animated');
               $(this).addClass('animated');
               $(this).addClass('rubberBand'); 
            }).on("mouseleave", function() {
                $(this).removeClass('rubberBand');
                $(this).removeClass('animated');
            });

            // ========== Contact Form Message Limit ========= //

            $('#message').keydown(function () {
              $('#characterLeft').text('140 characters left');
                var max = 140;
                var len = $(this).val().length;
                if (len >= max) {
                    $('#characterLeft').text('You have reached the limit');
                    $('#characterLeft').addClass('red');
                    $('#btnSubmit').addClass('disabled');            
                } 
                else {
                    var ch = max - len;
                    $('#characterLeft').text(ch + ' characters left');
                    $('#btnSubmit').removeClass('disabled');
                    $('#characterLeft').removeClass('red');            
                }
            });  

            // ========= Copy Right ======== //
            $('.copyright').hover(function(){
               $(this).removeClass('animated');
               $(this).addClass('animated');
               $(this).addClass('shake'); 
            }).on("mouseleave", function() {
                $(this).removeClass('shake');
                $(this).removeClass('animated');
            });

            function remove_quotes() {
              $('#quote1,#quote2,#quote3,#quote4,#quote5,#quote6').removeClass('animated').hide(); 
              $('#quote1,#quote2,#quote3,#quote4,#quote5,#quote6').removeClass('fadeInLeft').hide(); 
            }

            function quotes() {

              setTimeout(function(){
                remove_quotes();
                $('#quote1').show();
                $('#quote1').addClass('animated'); 
               $('#quote1').addClass('fadeInLeft');                
              },1000);

              setTimeout(function(){
                remove_quotes();
                $('#quote2').show();
                $('#quote2').addClass('animated'); 
               $('#quote2').addClass('fadeInLeft');                
              },2000);

              setTimeout(function(){
                remove_quotes();
                $('#quote3').show();
                $('#quote3').addClass('animated'); 
               $('#quote3').addClass('fadeInLeft');                
              },3000);

              setTimeout(function(){
                remove_quotes();
                $('#quote4').show();
                $('#quote4').addClass('animated'); 
               $('#quote4').addClass('fadeInLeft');                
              },4000);

              setTimeout(function(){
                remove_quotes();
                $('#quote5').show();
                $('#quote5').addClass('animated'); 
               $('#quote5').addClass('fadeInLeft');                
              },5000);

              setTimeout(function(){
                remove_quotes();
                $('#quote6').show();
                $('#quote6').addClass('animated'); 
               $('#quote6').addClass('fadeInLeft');                
              },6000);
            };

            quotes();

            setInterval(function() {
              quotes();
            }, 6000);

            // Send Email 
            $("#submit").click(function(){
              var name = $("#name").val();
              var email = $("#emailid").val();
              var mobile = $("#mobile").val();
              var subject = $("#subject").val();
              var message = $("#message").val();  
                // if(name==''||email==''||mobile==''||subject==''||message=='')
                // {
                //   alert("Please Fill All Fields");
                // }
                // else
                // {
                    $.ajax({
                     type: 'POST',
                     url: 'http://localhost:1337/user/emailTo',
                     data: { 
                      name:name, 
                      email:email, 
                      mobile:mobile, 
                      subject:subject, 
                      message:message 
                    },
                     beforeSend: function()
                     {
                         console.log('Fetching....');
                     },
                     success: function()
                     {
                        $("#name").val('');
                        $("#emailid").val('');
                        $("#mobile").val('');
                        $("#subject").val('');
                        $("#message").val('');  
                        $('#characterLeft').text('');
                        $('#characterLeft').text('Mail Sent Successfully!!!');
                        $('#characterLeft').addClass('animated'); 
                        $('#characterLeft').addClass('flipInX');    
                        $('#submit').addClass('disabled');
                         // alert('Fetch Complete');
                     },
                     error: function()
                     {
                        $('#characterLeft').text('There was an error while sending your mail! Please retry.');
                        $('#characterLeft').addClass('animated'); 
                        $('#characterLeft').addClass('flipInX');    
                     },
                     complete: function()
                     {
                         // alert('Complete')
                     }
                 });
                // }
              // return false;
            });
});