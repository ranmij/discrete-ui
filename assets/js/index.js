


// Left pane's width when expanded
const max_pane_width = (window.innerWidth < 480) ? 70 : (window.innerWidth < 768) ?  65 : 30;
const left_pane_node = $('#left-pane');
const right_pane_node = $('.right-pane');
const pane_close = $('#pane-close');
const pane_open = $('#pane-open');
$(document).ready(() => {
    

    // Expand Pane Button 
    $('#pane-open').click(()=> {
        console.log("opened");
        left_pane_node.css({
            padding: '1em',
            paddingTop: '0',
            width: `${max_pane_width}%`
        });
        pane_close.css({
            display: 'block',
            right: '1em',
            top: '1rem'
        });
        pane_open.css('display', 'none');
        right_pane_node.css({
            background: '#000',
            opacity: '.5'
        });
        $('.topics').fadeIn('fast');
        $('#accordionFlushExample').css("background", "#000 !important")
        
    });

    // Collapse Pane Button
    $('#pane-close').click(() => {
        console.log("paneclode")
        left_pane_node.css({
            width: '0',
            padding: '0'
        });
        pane_close.fadeOut('fast');
        pane_open.fadeIn(1000);
        right_pane_node.css({
            background: '#fff',
            opacity: '1'
        });
        $('.topics').fadeOut('fast');
    });

    
});