$(function(){
    var $box = $('#box');
    $('#add').click(function(){
        $box.addClass('show');
    });
    $box.find('.close').click(function(){
        $box.removeClass('show');
    });
    $box.find('.add').click(function(){
        var $tmp = $(this).prev().clone();
        $tmp.find('input').val('');
        $tmp.find('select option').first().prop('selected', true);
        $tmp.insertBefore($(this));
    });
});