//this is js for eumehost


$(document).ready(
    function()
    {
        close_modal();

        $(function() {


            $('#slider2').tinycarousel({
                display: 3,
                controls:true
            });

            $('#slider2 .overview li').click(function()
            {
                var picture=$(this);
                var img=picture.children('img').attr('src');
                modal.open({content:'<img src="'+img+'">'})

            });

            $('.slider-pagination-button').live('click',function()
            {var but=$(this);
                $('.slider-pagination-button').removeClass('pressed');
                but.addClass('pressed');
            });


            $('.jcarousel-gallery li').click(
                function()
                {
                    modal.open({content:'hi'});
                }
            );

            $('.jcarousel-pagination').jcarouselPagination({
                perPage:1,
                item: function(page) {
                    if(page==1)
                    {
                        return '<a href="#" class="slider-pagination-button pressed" onclick="return false;">&nbsp;</a>';
                    }
                    return '<a href="#" class="slider-pagination-button" onclick="return false;">&nbsp;</a>';
                }
            });
        });


        $('#submit_registration').click(
            function()
            {
                var data=$('#registration_form').serialize();
                $.post(BASE_URL+'registration/register',data,function(data)
                    {
                        if(data.status==1)
                        {
                            alert(data.messages);
                            location.reload();
                        }
                        else
                        {
                            alert(data.errors);
                        }
                    },'json'

                );
            }
        );

        $('#submit_login_form').click(
            function()
            {
                var data=$('#login_form').serialize();
                $.post(BASE_URL+'registration/login',data,function(data)
                    {
                        if(data.status==1)
                        {
                            location.reload();
                        }
                        else
                        {
                            alert(data.errors);
                        }
                    },'json'

                );
            }
        );


        $('.footer_nav_a').click(function()
        {
            var order=$(this).attr('data-order');
            $('.content').animate({

                  'margin-left':'2580px'
        }, 1500 );
            setTimeout(function()
            {
                $('.content').css('margin-left','-2580px');

            },1510);
            setTimeout(function()
            {
                $('.content').animate({

                    'margin-left':'0px'
                }, 1500 );

            },1520);





    });






    }
);

function submit_change_profile()
{
    var data=$('#profile_form').serialize();
    $.post(BASE_URL+'registration/change_profile_info',data,function(data)
        {
            if(data.status==1)
            {
                alert(data.messages);
                location.reload();
            }
            else
            {
                alert(data.errors);
            }
        },'json'

    );

}

function open_modal(data)
{
    $('#modal').show();
    $('#overlay').show();
}
function close_modal()
{
    $('#modal').hide();
    $('#overlay').hide();
}



